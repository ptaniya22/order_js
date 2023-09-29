let order = receipt();
let sum = 0;
let tempStr = '';

for (let key in order) {
  tempStr = tempStr + key + ' ' + order[key].info + ', ';
  sum += order[key].price;
}
console.log(`Your order is ${tempStr}`);
console.log(`| Your order price is ${sum}`);
