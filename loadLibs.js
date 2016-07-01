var jq = document.createElement("script");

jq.addEventListener("load", proceed); // pass my hoisted function
jq.src = "//cdn.rawgit.com/dwachss/bililiteRange/master/bililiteRange.js";
document.querySelector("head").appendChild(jq);

function proceed () {
   console.log('billiRange() carregado');

   var sk = document.createElement("script");
   sk.addEventListener("load", fim); // pass my hoisted function
   sk.src = "//cdn.rawgit.com/dwachss/bililiteRange/master/jquery.sendkeys.js";
   document.querySelector("head").appendChild(sk);

   function fim() {
      console.log('sendKeys() carregado');
      
   }
}