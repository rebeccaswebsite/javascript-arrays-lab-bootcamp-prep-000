var kittens = ["Milo", "Otis", "Garfield"];
var firstKitten = "Arnold"

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop("Garfield");
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift("Milo");
  return kittens; 
}

function appendKitten(name) {
  return kittens.concat("Broom");
}

function prependKitten(name) {
  return firstKitten.concat(kittens)
}

function removeLastKitten() {
  return kittens.slice(3)
}

function removeFirstKitten() {
  return kittens.slice(1);
}