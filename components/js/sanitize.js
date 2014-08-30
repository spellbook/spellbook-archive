this.Spellbook.sanitize = function(string) {
  return string.replace(/(<([^>]+)>)/ig, '');
};
