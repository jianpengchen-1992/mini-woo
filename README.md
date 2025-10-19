# Mini Woo: Telegram Product Catalog

Mini Woo is a [Telegram Mini App](https://core.telegram.org/bots/webapps) starter kit that lets your customers browse your product catalog inside Telegram. This version ships with an in-repo catalog so you can launch a beautiful browsing experience without running WooCommerce or exposing external APIs.

![Brief video](./.github/mini-woo.gif "Short video showing opening the shop, browsing products, adding to cart, and paying with Telegram.")

It uses [Next.js](https://nextjs.org/), a React framework for building fast and scalable web applications, together with the Telegram [Bot API](https://core.telegram.org/bots/api). Products and categories are stored locally in [`src/data/catalog.ts`](./src/data/catalog.ts), making it easy to edit the catalog and redeploy.

## Requirements

- Telegram Bot
- Node.js (Latest LTS version recommended)

## Getting Started

1. Prepare Environment Variables
2. Deploy
3. Init Telegram Bot API Webhook

### Environment Variables

Set the following environment variables:

- `NEXT_PUBLIC_BASE_PATH` – The base URL of your deployment. For example, if you deploy on Vercel, it might be `https://mini-woo-<your-username>.vercel.app`.
- `TELEGRAM_BOT_TOKEN` – The access token you receive from [@BotFather](https://t.me/BotFather) when you create your Telegram bot.
- `TELEGRAM_BOT_SECRET` – A password you choose to secure the webhook endpoints.

### Deploy

Deploy your app on a platform or server of your choice.

#### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). You need to fork this repository first.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#### Deploy on Server

If you prefer to deploy your app on your own server, copy `example.env` to `.env` in the root of the project and fill in the variables. Then run the following commands:

```bash
npm run build

npm run start
```

This builds and starts your app on the port specified by the `PORT` variable in `.env`.

#### Run Locally for Development

Set environment variables and run:

```bash
npm run dev
```

You can use a tunnelling service such as [ngrok](https://ngrok.com/) to expose your local instance to Telegram while developing.

### Init Telegram Bot API Webhook

This is the last step! Set up a webhook for your Telegram bot to receive updates from Telegram. Make a POST request to the following URL:

```bash
curl -X POST https://<your-deployment-url>/api/telegram-hook/init?secret_hash=<the-secret-password-from-env-var>
```

Replace `<your-deployment-url>` with the base URL of your deployment and `<the-secret-password-from-env-var>` with the value of `TELEGRAM_BOT_SECRET` in your environment variables or `.env`.

## Customising the catalog

Products and categories are defined in [`src/data/catalog.ts`](./src/data/catalog.ts). Update the arrays in that file to match your own catalog:

- Add or remove categories by editing `catalogCategories`.
- Each product inside `catalogProducts` references one or more category IDs and includes descriptions, pricing, and image URLs.

The API routes automatically paginate and filter products based on the data in this file. After updating the catalog, redeploy the app and your Telegram mini app will display the new products immediately.

## Features

- [x] Show products list
- [x] Filter by category
- [x] Local, easily editable product data
- [ ] Support variable items
- [ ] Support search items
- [ ] Support shipping methods
- [ ] more...

## Learn More

To learn more, take a look at the following resources:

- [Telegram Mini App](https://core.telegram.org/bots/webapps) – Starting point to learn about Telegram web apps.
- [Telegram Bot API](https://core.telegram.org/bots/api) – Telegram Bot API full documentation.
- [Telegraf.js](https://telegraf.js.org/index.html) – Modern Telegram Bot API framework for Node.js.
- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – An interactive Next.js tutorial.

Your feedback and contributions are welcome!
