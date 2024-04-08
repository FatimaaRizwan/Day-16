var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var price1 = [1000, 1500, 2000];
var price2 = [1500, 2500, 3500];
var pricee3 = [250, 500, 750];
var prices4 = [700, 1400, 2100];
var combinedPrices = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], price1, true), price2, true), pricee3, true), prices4, true).sort(function (a, b) { return a - b; }); //prices will be shown combined in ascending order.
console.log(combinedPrices);
