const mineflayer = require('mineflayer')
const http = require('http')

// Render'ın uyumaması için gereken web sunucusu
http.createServer((req, res) => {
    res.write("Bot Aktif ve Sunucuda!");
    res.end();
}).listen(8080);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'ryodann.falixsrv.me', // Buraya FalixNodes IP'ni yaz
        port: 49319,                // Portun farklıysa düzelt
        username: 'Bot_724', 
        version: '1.21.1'
    })

    bot.on('spawn', () => console.log('Bot sunucuya girdi!'))
    bot.on('end', () => {
        console.log('Bağlantı koptu, 10 saniye sonra tekrar denenecek...')
        setTimeout(createBot, 10000)
    })
    bot.on('error', err => console.log('Hata oluştu:', err))
}

createBot()
