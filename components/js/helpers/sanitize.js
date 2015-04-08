this.Spellbook.Helpers.sanitize = function(string) {
  return string.replace(/(<([^>]+)>)/ig, '');
};
