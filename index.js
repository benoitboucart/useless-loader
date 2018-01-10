const DOMParser = require('xmldom').DOMParser;

module.exports = function uselessLoader(source, map) {
  console.log("Hello from the useless laoder!");

  var re = /<\/body>(?![\s\S]*<\/body>[\s\S]*$)/i;
  const output = source.replace(re, '<div style="position: fixed; bottom: 0; left:0; right:0; background: red; color: #FFF; padding: 10px;"><marquee>VEEL SUCCES MET HET EXAMEN!</marquee></div></body>')

  this.callback(null, output, map);
};
