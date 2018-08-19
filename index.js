function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten() {
  var lessKittens = kittens.slice(0, kittens.length -1);
  return lessKittens;
}

  1) Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
     ReferenceError: removeLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:61:7)

var iceCreams = ["chocolate", "vanilla", "raspberry"]
 
iceCreams.slice(0, iceCreams.length - 1) // ["chocolate", "vanilla"]
 
iceCreams // ["chocolate", "vanilla", "raspberry"]
