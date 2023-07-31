const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const axios = require('axios');


// Crie uma instância do bot com o token fornecido pelo BotFather
const bot = new TelegramBot('6146765362:AAHuBU3fDgf8mhO-kfOOfG-mYW2Gn6G68ao', { polling: true });

// Lista de IDs permitidos
const idsPermitidos = [5373344632];

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username;
  
  
  let start = `Eae, ${username}. Aqui é a mensagem de start\n\nSeu ID: ${chatId}`;

  bot.sendMessage(chatId, start)
      
});




// Lidar com o comando '/busca'
bot.onText(/\/busca (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const pattern = match[1];

  if (idsPermitidos.includes(chatId)) {
    
  // Lógica para realizar a pesquisa no arquivo TXT
  // Abra o arquivo, leia as linhas e faça o processamento necessário
  // Exemplo: ler o arquivo 'dados.txt' e buscar linhas que correspondem ao padrão
    const filePath = 'dados.txt';

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        bot.sendMessage(chatId, 'Erro ao achar a palavra..');
        return;
      }

      const lines = data.split('\n');
      const matchingLines = lines.filter((line) => line.includes(pattern));

      if (matchingLines.length === 0) {
        bot.sendMessage(chatId, 'Nenhum resultado.');
        return;
      }

      const result = matchingLines.join('\n');
      const documentOptions = {
        filename: 'resultado.txt',
        contentType: 'text/plain',
      };

      fs.writeFile('resultado.txt', result, (err) => {
        if (err) {
          console.error(err);
          bot.sendMessage(chatId, 'Erro no servidor interno do envio');
          return;
        }

        bot.sendDocument(chatId, 'resultado.txt',{caption: `Lista de resultado: ${matchingLines.length}`}, documentOptions)
          .catch((err) => {
            console.error(err);
            bot.sendMessage(chatId, 'Ocorreu um erro ao enviar o Resultado.');
          });
      });


    });
  } else {
      // Ignora a mensagem se o ID não estiver na lista permitida
      bot.sendMessage(chatId, `SEU ID NÃO ESTÁ NA LISTA \n\nSeu id: ${chatId}`);
      console.log(`Mensagem ignorada do ID não permitido: ${chatId}`);
  }
});