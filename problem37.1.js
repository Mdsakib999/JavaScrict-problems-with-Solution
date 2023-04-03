// Discunt in tickte price.

/* 
First 100 tickte is 100tk
(101 -200) tickte is 90tk
200+ tickte is 70tk

Return the total cost of tickte
*/


function discuntTickte(tickteQuantity) {

    const first100 = 100;
    const secendst100 = 90;
    const restTickte = 70;

    if(tickteQuantity <= 100) {
        var price = first100 * tickteQuantity;

        return price;
    }

    else if(tickteQuantity <= 200) {
        var f_100 = 100 * first100;
        var restTickte_price = (tickteQuantity - 100) * secendst100;
        var price = f_100 + restTickte_price

        return price;
    }

    else{
        var f_100 = 100 * first100;
        var s_100 = 100 * secendst100;
        var restTickte_price= (tickteQuantity - 200) * restTickte;

        var price = f_100 + s_100 + restTickte_price;

        return price;
    }
}

let tickte = discuntTickte(350);

console.log("Total tickte price =",tickte);