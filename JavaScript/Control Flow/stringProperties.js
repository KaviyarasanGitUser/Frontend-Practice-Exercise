const product = {
  name: "Coffee",
  price: 10,
  quantity: 100,
  brand: "Nestle",
};

showStringProperties(product);

function showStringProperties(object) {
  for (let key in object) {
    if (typeof object[key] === "string") {
      console.log(`${key} ${product[key]}`);
    }
  }
}
