let price1=[1000,1500,2000];
let price2=[1500,2500,3500];
let pricee3=[250, 500, 750];
let prices4=[700,1400,2100];

let combinedPrices=[...price1, ...price2, ...pricee3, ...prices4].sort((a,b)=>a - b); //prices will be shown combined in ascending order.

console.log(combinedPrices);