this.Spellbook.Helpers.uid = function(length) {
  var id;
  if (length == null) {
    length = 10;
  }
  id = '';
  while (id.length < length) {
    id += Math.random().toString(36).substr(2);
  }
  return id.substr(0, length);
};
