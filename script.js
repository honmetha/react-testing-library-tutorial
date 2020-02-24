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
  return (Object.keys(obj).length == 0 ? true : false); 
}

// Ex3
"No Error"

// Ex4: Hon
function sum(obj) {
  let sum = 0;
  for (i = 0; i < Object.keys(obj).length; i++) {
    sum = sum + obj[Object.keys(obj)[i]];
  }
  return sum;
}

// Ex4: Sonter
function sum(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}

// Ex5
function multiplyNumeric(obj, times) {
  for (let key in obj) {
    if (typeof (obj[key]) == "number") {
      obj[key] *= times
    }
  }
  return obj;
}