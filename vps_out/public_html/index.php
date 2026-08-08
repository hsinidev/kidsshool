<?php
/**
 * Kids School Next.js Standalone Proxy Entry Point
 * Safe fallback for Apache/Virtualmin environments without mod_proxy
 */

$nodePort = getenv('PORT') ?: 3000;
$nodeHost = "http://127.0.0.1:{$nodePort}";

$requestUri = $_SERVER['REQUEST_URI'] ?? '/';
$targetUrl = $nodeHost . $requestUri;

// Initialize cURL session to proxy request to local Node.js server
$ch = curl_init();

$headers = [];
foreach (getallheaders() as $key => $value) {
    if (strtolower($key) !== 'host') {
        $headers[] = "$key: $value";
    }
}
$headers[] = "Host: " . ($_SERVER['HTTP_HOST'] ?? 'kids.hsini.dev');
$headers[] = "X-Forwarded-For: " . ($_SERVER['REMOTE_ADDR'] ?? '127.0.0.1');
$headers[] = "X-Forwarded-Proto: " . (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http');

curl_setopt_array($ch, [
    CURLOPT_URL => $targetUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HEADER => true,
    CURLOPT_CUSTOMREQUEST => $_SERVER['REQUEST_METHOD'] ?? 'GET',
    CURLOPT_POSTFIELDS => file_get_contents('php://input'),
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_FOLLOWLOCATION => false,
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    $errorMsg = curl_error($ch);
    curl_close($ch);
    http_response_code(503);
    echo "<!DOCTYPE html><html><head><title>Kids School - App Server Starting</title>";
    echo "<style>body{font-family:system-ui,sans-serif;text-align:center;padding:50px;background:#f8fafc;color:#1e293b;}h1{color:#e11d48;}.card{background:white;padding:30px;border-radius:12px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);max-width:600px;margin:0 auto;}code{background:#e2e8f0;padding:4px 8px;border-radius:4px;font-family:monospace;}</style></head><body>";
    echo "<div class='card'>";
    echo "<h1>🏫 Kids School Application</h1>";
    echo "<p>The Next.js backend server is starting or offline on port <code>$nodePort</code>.</p>";
    echo "<hr style='border:none;border-top:1px solid #e2e8f0;margin:20px 0;'>";
    echo "<p><strong>To start the application on your VPS:</strong></p>";
    echo "<p><code>cd /home/hsini/domains/kids.hsini.dev/ && ./start_vps.sh</code></p>";
    echo "<p><small style='color:#64748b;'>Status: $errorMsg</small></p>";
    echo "</div>";
    echo "</body></html>";
    exit;
}

$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$responseHeaders = substr($response, 0, $headerSize);
$responseBody = substr($response, $headerSize);

http_response_code($httpCode);

foreach (explode("\r\n", $responseHeaders) as $header) {
    if (!empty($header) && strpos($header, 'HTTP/') !== 0 && strpos(strtolower($header), 'transfer-encoding:') !== 0) {
        header($header, false);
    }
}

echo $responseBody;
