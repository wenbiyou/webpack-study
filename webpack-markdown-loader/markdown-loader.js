const marked = require("marked");

function getHtml(source) {
  const html = marked(source);
  return html;
}

module.exports = getHtml;
