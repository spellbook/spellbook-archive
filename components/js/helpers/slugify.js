this.Spellbook.Helpers.slugify = function(string) {
  return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
};
