// Lab: Assign
const obj = {
  name: 'Hon',
  age: 29,
  height: 175,
  weight:67,
}

let source = {};

source = Object.assign({}, obj);
console.log(obj);

// Ex1
let obj = {};

obj.name = "Sonter";
obj.surname = "Pakorn";
obj.name = "Boy";
delete obj.name;

// Ex2
function isEmpty(obj) {
  Object.keys(obj).length == 0 ? false : true;
}