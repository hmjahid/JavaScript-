const shop = new Map([
    ["potato", 16],
    ["rice", 90],
    ["oil", 180],
    ["soap", 60]
]);

let shoppingCart = 0;

shoppingCart += shop.get("potato");
console.log(shoppingCart);

shoppingCart += shop.get("rice");
console.log(shoppingCart);

shoppingCart += shop.get("oil");
shoppingCart += shop.get("soap");
console.log(shoppingCart);


shop.set("chili", 150);
shop.delete("chili");
console.log(shop.has("chili"));
console.log(shop.has("rice"));
console.log(shop.size);

shop.forEach((value, key) => console.log(`${key} $${value}`));