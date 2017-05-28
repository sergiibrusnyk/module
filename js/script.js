var animals = [{
    "name": "Żółta kaczka",
    "img": "img/duck.jpg",
    "link": "https://dribbble.com/shots/1668853-Yellow-Duck-vector-illustration"
  },
  {
    "name": "Czarny Kot",
    "img": "img/cat.png",
    "link": "https://dribbble.com/shots/773558-Jiji"
  }, {
    "name": "Niebieski leniwiec",
    "img": "img/sloth.gif",
    "link": "https://dribbble.com/shots/3047044-International-Sloth-Day"
  }
]


var generateResult = function(animal) {
  var app = $('.app');
  app.html('<h1>' + animal.name + '</h1><img src="' + animal.img + '" width="300"><a></a>');
  $('a').attr({
    href: animal.link,
    target: 'blank',
  });
  $('a').text('Zobać więcej')
}

$('input').change(function() {
  var sum = 0;
  var secondInputSelected;
  var fourthInputSelected;

  $('input:checked').each(function() {
    var val = parseInt($(this).val());
    sum = sum + val;

    if (val === 2) {
      secondInputSelected = true;
    } else if (val === 4) {
      fourthInputSelected = true;
    }

    if (sum < 3) {
      generateResult(animals[0]);
    } else if (sum === 3 || sum === 4) {
      generateResult(animals[1]);
    } else if (sum >= 5) {
      if (secondInputSelected && fourthInputSelected && sum === 6) {
        generateResult(animals[0]);
      } else {
        generateResult(animals[2]);
      }
    }
  });
});
