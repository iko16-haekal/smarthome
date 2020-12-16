const Kendali = use("App/Models/Kendali");
const { Telegraf } = require("telegraf");
const bot = new Telegraf("1364757531:AAG__GdpyYT5_qpQJSox34TbZyh8FMblxx8");
const ip = require("ip");
console.log(ip.address());
bot.start((ctx) => ctx.reply("hai"));
bot.hears("nyalain lampu 1", async (ctx) => {
  const kendali = await Kendali.find(1);
  kendali.CH_1 = 1;
  await kendali.save();
  ctx.reply("berhasil menyalakan lampu");
});

bot.hears("Nyalain lampu 1", async (ctx) => {
  const kendali = await Kendali.find(1);
  kendali.CH_1 = 1;
  kendali.save();
  ctx.reply("berhasil menyalakan lampu");
});
bot.hears("matiin lampu 1", async (ctx) => {
  const kendali = await Kendali.find(1);
  kendali.CH_1 = 0;
  await kendali.save();
  ctx.reply("berhasil menyalakan lampu");
});
bot.hears("Matiin lampu 1", async (ctx) => {
  const kendali = await Kendali.find(1);
  kendali.CH_1 = 0;
  kendali.save();
  ctx.reply("berhasil menyalakan lampu");
});
bot.launch();
