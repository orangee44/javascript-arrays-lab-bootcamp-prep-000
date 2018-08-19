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
  var lessKittens = kittens.slice(1)
}

  1) Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
     ReferenceError: removeLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:61:7)

var cats = ["Milo", "Garfield", "Otis"]
 
cats.slice(1) // ["Garfield", "Otis"]
 
cats // ["Milo", "Garfield", "Otis"]

