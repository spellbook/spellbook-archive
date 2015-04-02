this.Spellbook.Helpers.randomizer = function(collection) {
  var randomNumber;
  randomNumber = Math.floor(Math.random() * collection.length);
  return collection[randomNumber];
};
