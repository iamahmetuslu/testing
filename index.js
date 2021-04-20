const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); 
 res.write('Merhaba Dünya!  -Botabi.xyz-');
 res.write('Uygulama çalıştırıldı.. Marsa yolculuk için geri sayım başlasın.!');
 res.end();
});
server.listen(3000, () => {
 console.log('Uygulama çalıştırıldı...');
});

const Discord=require("discord.js");
const client=new Discord.Client();


client.once('ready', () => { //Client hazır olduğunda
    console.log('Bot hazır!'); //Konsola "Bot hazır!" yazdır
    client.user.setActivity("Botabi.xyz |", { //Bot hesabının aktivitesini "Bu bot da Discord'a katıldı" olarak ayarla.
    type: "LISTENING" //Aktivite tipi: Oynuyor
  });
});


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('ready', () => {
  console.log(`Botabi Sunucuya girdi herkes sakin olsun! ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('as kardeşim');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.channel.send('selam :blush:');
  }
  if (msg.content.toLowerCase() === 'naber') {
    msg.channel.send('iyiyim sen :blush:');
  }
  if (msg.content.toLowerCase() === 'yarramı ye') {
    msg.channel.send('onu sadece olcay yer :sunglasses:');
  }
  if (msg.content.toLowerCase() === 'oyun') {
    msg.channel.send('kanka oynadığımız oyunlar Valorant, LoL, CS, GTA Online, TFT ama önerin varsa söyle oynarız :wink:');
  }
  if (msg.content.toLowerCase() === 'ne oynuyonuz') {
    msg.channel.send('kanka oynadığımız oyunlar Valorant, LoL, CS, GTA Online, TFT ama önerin varsa söyle oynarız :wink:');
  }
  if (msg.content.toLowerCase() === 's.a') {
    msg.channel.send('as kardeşim');
  }
  if (msg.content.toLowerCase() === 'twitch') {
    msg.channel.send('https://www.twitch.tv/raptens');
  }
  if (msg.content.toLowerCase() === 'pvp') {
    msg.channel.send('@Hakan#1847 a sor');
  }
  if (msg.content.toLowerCase() === 'yarramı ye') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'amk') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'amcık') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'sikik') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'şerefsiz') {
    msg.author.send('sakin ol seni izliyorum');
  }
  if (msg.content.toLowerCase() === 'oç') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'orospu') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'piç') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'gavat') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'yarrak') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'ananı sikerim') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'ibne') {
    msg.author.send('sakin ol seni izliyorum..');
  }
  if (msg.content.toLowerCase() === 'piç kurusu') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'annesiz') {
    msg.author.send('sunucuda küfür edilmesi yasak. Uyarıldın!');
  }
  if (msg.content.toLowerCase() === 'aq') {
    msg.author.send('sakin ol seni izliyorum.');
  }
   if (msg.content.toLowerCase() === 'selam naber') {
    msg.channel.send('iyiyim sen :blush:');
  }
   if (msg.content.toLowerCase() === 'nabıyonuz') {
    msg.channel.send('oyun, sohbet falan');
  }
   if (msg.content.toLowerCase() === 'selamm') {
    msg.channel.send('selaammm :blush:');
  }
  if (msg.content.toLowerCase() === 'süpersin') {
    msg.react("🤩")
    msg.channel.send('her zaman 😎');
  }
  if (msg.content.toLowerCase() === 'adam') {
    msg.react("☺️")
    msg.channel.send('o senin adamlığın  😉 ');
  }
  if (msg.content.toLowerCase() === 'teşekkürler') {
    msg.react("😁")
    msg.channel.send('rica ederim 😁');
  }
  if (msg.content.toLowerCase() === 'saol') {
    msg.react("😇")
    msg.channel.send('ne demek  😇 ');
  }
  if (msg.content.toLowerCase() === 'olcay') {
    msg.channel.send('rahatsız bir kardeşimizdir');
  }
  
});
   


    

























































client.login(process.env.TOKEN);