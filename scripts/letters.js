---
---

$(function() {
  var numTypefaces = {{ site.static_files.size }};

  var paths = [];
  {% for font in site.static_files %}
    paths.push("{{ font.path }}");
  {% endfor %}

  var names = [];
  for (i=0; i < numTypefaces; i++) {
    var name = paths[i].replace('/fonts/', '');
    name = name.substr(0, name.indexOf('.'));
    names.push(name);
  }

  var typefaces = new Array;
  for (i = 0; i < numTypefaces; i++) {
    typefaces[i] = {
        name: names[i],
        path: paths[i]
    }
  }

  var letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  var typefaceId = getRandomInt(0, parseInt(numTypefaces));
  var letterId = getRandomInt(0, letters.length);
  $('body').css('font-family', names[typefaceId]);
  $('body').css('font-size', $('.wrapper').height() * .9);
  $('.letter').html(letters[letterId]);
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
