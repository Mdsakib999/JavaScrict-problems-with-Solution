// Use add and multiplication to calculate wood requirements


function woodCount(chair, bed, table) {
    let chairWood = chair * 3;
    let bedWood = bed * 5;
    let tableWood = table * 10;

    let total = chairWood + bedWood + tableWood;

    return total;
}

let givenWood = woodCount(0, 3, 0);

console.log(givenWood)