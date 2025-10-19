import {Markup, Telegraf} from "telegraf";
import {message} from "telegraf/filters"

export const SECRET_HASH = process.env.TELEGRAM_BOT_SECRET!!
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || `https://${process.env.NEXT_PUBLIC_VERCEL_URL!!}`
const WEBHOOK_URL = `${BASE_PATH}/api/telegram-hook?secret_hash=${SECRET_HASH}`
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!!
const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => {
    ctx.reply(
        "Let's get started ;)",
        Markup.inlineKeyboard([Markup.button.webApp("View Store", BASE_PATH)]),
    )
});
bot.help((ctx) => ctx.reply("Test /start or /menu command!"))
bot.command('menu', (ctx) =>
    ctx.setChatMenuButton({
        text: "Store",
        type: "web_app",
        web_app: {url: BASE_PATH},
    }))
bot.on(message("text"), (ctx) => ctx.reply("Hi, I`m Mini Woo. It`s nice to meet you!:) /help"));

export function initWebhook() {
    return bot.telegram.setWebhook(WEBHOOK_URL)
}

export default bot
