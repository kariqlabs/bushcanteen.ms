# Bush Canteen POS

A browser-based point-of-sale prototype for a Ghanaian restaurant. The project pairs a responsive menu and cart interface with a small Express API for menu data, order records, and printable receipts.

> **Prototype only:** This repository is for local evaluation and learning. It is not ready for production use or real customer/payment records. See [Security and Limitations](#security-and-limitations).

## Capabilities

- Browse a menu of Ghanaian dishes, continental dishes, and drinks.
- Search and filter menu items, build a cart, and choose order metadata.
- Create an order using menu IDs; the server looks up menu records and calculates line totals.
- Store orders in a local JSON file and retrieve them from the API.
- Generate a printable HTML receipt for a saved order.

Kitchen tickets, inventory, expense reporting, staff administration, user authentication, and payment-provider integration are not implemented by the current Express API. Dashboard areas that suggest these functions should be treated as prototype UI, not operational controls.

## Technology

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Backend:** Node.js 18+, Express 4
- **Persistence:** Local JSON files

## Run Locally

### Requirements

- Node.js 18 or newer
- npm

### Setup

```bash
git clone https://github.com/kariqlabs/bushcanteen.ms.git
cd bushcanteen.ms
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Do not open `BushCanteen.html` directly; the frontend needs the Express server for API requests.

For automatic restarts while developing:

```bash
npm run dev
```

## API

The API reference is available in [API.md](API.md).

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | Return service health |
| `GET` | `/api/menu` | Return the menu and prices |
| `GET` | `/api/orders` | Return saved orders, newest first |
| `POST` | `/api/orders` | Create and persist an order |
| `GET` | `/api/orders/:id/receipt` | Return a printable receipt |

Example request with synthetic data:

```json
{
  "items": [{ "id": "banku-tilapia", "quantity": 1 }],
  "paymentMethod": "Cash",
  "orderType": "Eat-In",
  "customerRef": "Sample Table 4",
  "staff": "Counter Operator"
}
```

The current server requires a non-empty `items` array and a valid menu item ID. It normalizes invalid or missing quantities to at least one. The server marks created orders `Paid` based on the submitted request; it does not verify that a payment occurred.

## Project Structure

```text
BushCanteen.html       POS dashboard markup
index.css              Responsive interface styles
app.js                 Menu, cart, navigation, and API client
server.js              Express routes and receipt rendering
data/menu.json         Menu records and prices
data/orders.json       Local order persistence
API.md                 API endpoint notes
bar/                   Drink photography
continental dishes/    Food photography
IMAGES OF THE FOODS/   Food photography
LOGO/                  Restaurant logo asset
```

## Security and Limitations

- There is no authentication or role-based authorization. The order-list endpoint exposes saved records to anyone who can reach the server.
- Payment methods are recorded as order fields; no bank, Mobile Money, or card transaction is verified.
- Orders are stored by rewriting a JSON file. This is not transactional storage and does not provide safe multi-user concurrency, automated backups, or recovery guarantees.
- The current receipt builder inserts order fields into HTML without escaping. Do not submit untrusted or real personal data.
- The server is configured for local development and does not provide HTTPS or production access controls.
- `tests/test_backend.py` targets a separate Python backend, not this Express API; automated Node API tests are not currently configured.

Before any real deployment, add authentication and authorization, integrate verified payments, use durable transactional storage, escape all rendered data, configure HTTPS, establish backups and retention, and add automated tests for successful and failed requests.

## Project Status

Local prototype. No production deployment or payment integration is provided by this repository.
