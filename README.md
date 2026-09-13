# Bush Canteen

Premium Ghanaian restaurant POS and operations dashboard with a responsive frontend, local REST API, order persistence, and printable receipts.

## Features

- Responsive POS experience for phones, tablets, and desktop screens
- Ghanaian local menu with restaurant photography and category filtering
- Cart with quantity controls, order type, staff, and customer/table reference
- Kitchen Display, packaging stickers, financial reports, history, and admin tabs
- Express backend with menu, health, order, and receipt endpoints
- Server-side menu price validation before an order is saved
- JSON order persistence in `data/orders.json`
- Print-ready HTML receipts generated from saved orders
- Premium glass interface with subtle reveal and hover motion

## Stack

- Frontend: semantic HTML, CSS, vanilla JavaScript, Lucide icons
- Backend: Node.js 18+, Express
- Storage: JSON files for a zero-setup local deployment

## Run Locally

1. Install Node.js 18 or newer.
2. Open a terminal in this folder.
3. Install dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000).

For development with automatic server restarts:

```bash
npm run dev
```

Do not open `BushCanteen.html` directly for ordering. Use the Express URL so the frontend can reach the API.

## API Reference

### `GET /api/health`

Returns service status.

```json
{"status":"ok","service":"bush-canteen-api"}
```

### `GET /api/menu`

Returns the server-approved menu and prices.

### `GET /api/orders`

Returns saved orders, newest first.

### `POST /api/orders`

Creates and persists a paid order. Prices are always resolved from the server menu.

Example request:

```json
{
  "items": [{"id":"banku-tilapia","quantity":1}],
  "paymentMethod":"Cash",
  "orderType":"Eat-In",
  "customerRef":"Table 4",
  "staff":"Isaac Asamoah"
}
```

Example response fields:

```json
{
  "order": {"id":"BC-1234","status":"Paid","total":65},
  "receiptUrl":"/api/orders/BC-1234/receipt"
}
```

### `GET /api/orders/:id/receipt`

Returns a print-ready HTML receipt and opens the browser print dialog when loaded.

## Project Layout

```text
BushCanteen.html       Responsive restaurant dashboard shell
index.css              Glass/premium responsive design system
app.js                 Menu, cart, navigation, checkout and API client
server.js              Express server and REST API
data/menu.json         Server-approved menu and pricing
data/orders.json       Local order persistence
IMAGES OF THE FOODS/  Menu photography
LOGO/                  Bush Canteen restaurant logo
package.json           Node scripts and dependencies
```

## Production Notes

This starter backend intentionally uses JSON storage for easy local use. Before public deployment, move orders to PostgreSQL or another transactional database, add authentication and roles, validate payment through a payment provider, protect admin routes, and store secrets in environment variables.

## GitHub Checklist

- Keep `data/orders.json` out of public repositories if it contains real customer information.
- Add environment-specific configuration through `.env` files that are ignored by Git.
- Run `npm install` and `npm start` after cloning.
- Deploy the Node server and serve the dashboard from the same origin so `/api` routes work without CORS configuration.
