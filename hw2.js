Array.prototype.includeCi = function(kucukBuyuk) {
    return this.find((item)=> item.toLowerCase() === kucukBuyuk.toLowerCase()) ? true :  false;}
const arr = [ "RONALDO", "ronaldo","RoNaLdO"];
console.log(arr.includeCi("ronaldo"))