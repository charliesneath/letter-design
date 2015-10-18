---
---

var numTypefaces = {{ site.static_files.size }};
var paths = [];
var names = [];
var typefaces = new Array;
var letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

$(function() {
  init();

  $('#letter').click(function() {
    nextLetter();
  });
})

function init() {
  {% for font in site.static_files %}
    paths.push("{{ font.path }}");
  {% endfor %}

  for (i=0; i < numTypefaces; i++) {
    var name = paths[i].replace('/fonts/', '');
    name = name.substr(0, name.indexOf('.'));
    names.push(name);
  };

  for (i = 0; i < numTypefaces; i++) {
    typefaces[i] = {
        name: names[i],
        path: paths[i]
    };
  };
  nextLetter();
};

function nextLetter() {
  // Pick a typeface.
  var typefaceId = getRandomInt(0, parseInt(numTypefaces));
  // Pick a letter.
  var letterId = getRandomInt(0, letters.length);
  $('body').css('font-family', names[typefaceId]);
  $('body').css('font-size', $('.wrapper').height() * .8);
  $('#letter').html(letters[letterId]);
  $('#typeface').html(names[letterId]);
  window.clearTimeout(nextLetter);
  var switchLetter = window.setTimeout(nextLetter, 60000);
}

// Get random number.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
