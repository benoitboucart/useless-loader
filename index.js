module.exports = function uselessLoader(source, map) {
  console.log("Hello from the useless laoder!");
  this.callback(null, source, map);
};
