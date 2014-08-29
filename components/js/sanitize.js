this.Spellbook.sanitize = function(str) {
  return str.replace(/(<([^>]+)>)/ig, "");
};
