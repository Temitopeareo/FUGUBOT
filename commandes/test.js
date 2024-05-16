"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello This is  *FUGU-BOT* \n\n ' + "The Following is *FUGU-BOTRepo.*";
    let d = ' https://github.com/Temitopeareo/FUGUBOT';
    let varmess = z + d;
    var img = 'https://imgur.com/7doiWDc.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *ABRO-BOT* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *ABRO*'
      let varmess=z+d
      var img='https://imgur.com/7doiWDc.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
