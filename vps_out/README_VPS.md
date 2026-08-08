# VPS Deployment Guide - Kids School (Next.js Standalone)

This `vps_out` folder contains all configured production build files, static web root assets, reverse proxy setup, and PM2 process configurations required to host the Kids School Next.js project on your VPS server.

---

## 📂 Security Architecture: `public_html/` vs Outside Files

- **`public_html/` (Public Web Root)**:
  - **`.htaccess`**: Apache reverse proxy rules pointing non-static requests to `http://127.0.0.1:3000`.
  - **`_next/static/`**: Compiled production CSS, JavaScript chunks, and static assets.
  - **`images/`, `favicon.ico`, `HSINI.jfif`, `robots.txt`, `sitemap.xml`**: Public media assets.

- **Outside `public_html/` (Node.js Application Server)**:
  - **`server.js`**: Next.js standalone Node server entry point.
  - **`.next/`**: Server chunks, pages manifest, and standalone modules.
  - **`dev.db`**: SQLite database file.
  - **`prisma/`**: Prisma schema and migration configurations.
  - **`ecosystem.config.js`**: PM2 process manager configuration.
  - **`start_vps.sh`**: One-click startup shell script.

---

## 🚀 Quick VPS Deployment Steps

### Step 1: Upload Files
Upload `vps_out.zip` to your domain directory on the VPS (e.g. `/home/hsini/domains/kidsshool.hsini.dev/`):
```bash
cd /home/hsini/domains/kidsshool.hsini.dev/
unzip vps_out.zip
```

### Step 2: Configure Web Server Web Root
Ensure your Virtualmin / Apache / Nginx **DocumentRoot** points to:
`/home/hsini/domains/kidsshool.hsini.dev/public_html`

### Step 3: Start Node.js Application Server
Run the startup script or PM2 command on the server:
```bash
chmod +x start_vps.sh
./start_vps.sh
```

Or manually using PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
```

### Step 4: Verify Application Status
Check PM2 logs and process status:
```bash
pm2 status
pm2 logs kidsshool
```
