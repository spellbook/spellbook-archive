this.Spellbook.slugify = function(string) {
  return string.toLowerCase().replace(/[^\w ]+/g, '').replace(/\s+/g, '-');
};
