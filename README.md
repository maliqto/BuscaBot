# Mago-Bot 🧙‍♂️

**Olá, o magobot é um bot no telegram onde busca dados dentro de um arquivo txt e te retorna o resultado, fiz esse bot na intenção de ajudar quem meche com arquivos grandes de texto e para evitar dando ctrl + f e pegando linha por linha**

OBS: COMO OS BOTS SÃO PÚBLICOS, ESSE BOT VOCÊ TERÁ QUE PERMITIR O ID DO USUÁRIO QUE PODERÁ USA-LO 

### Funcionamento 

Faça o download do bot usando: 
```powershell
git clone https://github.com/maliqto/BuscaBot.git
```
esté comando irá baixar os arquivos do bot diretamente do github

Em seguida execute o comando:
```node
npm i 
```
comando para instalar os packages necessários do arquivo **app.js** 

Após baixar todas as dependências, abra o arquivo ```app.js``` e troque as seguintes linhas:

```node
const bot = new TelegramBot('TOKEN_AKI', { polling: true });
```
Troque para seu token obtido na criação do [BotFather](https://t.me/botfather)

```node
const filePath = 'dados.txt';
```
troque o arquivo para seu arquivo txt que deseja fazer as buscas 

```node
const idsPermitidos = [ids];
```
ID'S dos usuários permitidos para usar os comandos

Após instalar e modificar tudo basta ir no seu ```terminal``` e dar o comando ```node app.js```

## Prints do bot online 

*Bloqueio de id's não permitidos*

![](https://files.catbox.moe/nalpvy.png)

*Comando /start*

![](https://files.catbox.moe/sjn0di.png)

*Comando /busca*

![](https://files.catbox.moe/w4qb5b.png)
