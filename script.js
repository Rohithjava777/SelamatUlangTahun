const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
let countDown = new Date('May 19, 2026 00:00:00').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;
    
    document.getElementById('name').innerText = "Dharani's";
    document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {

      timer.classList.add('d-none');
      confetti();
      clearInterval(x);
      _slideQuestion();
    }

  }, second)

const _slideOne = function () {
  const tap = document.getElementById('tap');
  const slideOne = document.getElementById('slideOne');
  slideOne.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      _slideTwo();
    })
  }, 7000);
};

const _slideTwo = function () {
  const slideOne = document.getElementById('slideOne');
  const tap = document.getElementById('tap');
  const slideTwo = document.getElementById('slideTwo');

  setTimeout(function () {
    slideOne.classList.replace('animate__slideInDown', 'animate__backOutDown');
    tap.classList.add('d-none');
    setTimeout(function () {
      slideOne.classList.add('d-none');
    }, 1000);
  }, 1000);

  slideTwo.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideTwo.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
      slideTwo.classList.remove('animate__delay-2s', 'animate__slow');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideTwo.remove();
        _slideLuck();
      }, 1000);
    })
  }, 40000);
};

const _slideLuck = function () {
  const slideLuck = document.getElementById('slideLuck');
  slideLuck.classList.remove('d-none');
  const bar = document.getElementById('luckBar');
  let width = 0;
  let interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        slideLuck.classList.replace('animate__fadeIn', 'animate__fadeOut');
        setTimeout(() => {
          slideLuck.remove();
          _slidePookie();
        }, 1000);
      }, 3000);
    } else {
      width++;
      bar.style.width = width + '%';
      bar.innerText = width + '%';
    }
  }, 120);
};

const _slidePookie = function () {
  const tap = document.getElementById('tap');
  const slidePookie = document.getElementById('slidePookie');

  slidePookie.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slidePookie.classList.replace('animate__fadeIn', 'animate__fadeOut');
      tap.classList.add('d-none');
      setTimeout(function () {
        slidePookie.remove();
        _slidePhotos();
      }, 1000);
    }, { once: true })
  }, 5000);
};

const _slidePhotos = function () {
  const tap = document.getElementById('tap');
  const slidePhotos = document.getElementById('slidePhotos');

  slidePhotos.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slidePhotos.classList.replace('animate__zoomIn', 'animate__fadeOut');
      tap.classList.add('d-none');
      setTimeout(function () {
        slidePhotos.remove();
        _slideFour();
      }, 1000);
    }, { once: true })
  }, 3000);
};

const _slideQuestion = function () {
  const slideQuestion = document.getElementById('slideQuestion');
  slideQuestion.classList.remove('d-none');
  
  const options = document.querySelectorAll('.q-option');
  options.forEach(opt => {
    opt.addEventListener('click', function () {
      if (this.dataset.correct === "true") {
        slideQuestion.classList.replace('animate__fadeIn', 'animate__fadeOut');
        setTimeout(function () {
          slideQuestion.remove();
          _slideOne();
        }, 1000);
      } else {
        alert("AYYY YOU ARE NOT DHARANI");
      }
    });
  });
};

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * 500);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
};

const _slideFour = function () {
  const slideFour = document.getElementById('slideFour');
  const btnNo = document.getElementById('no');
  const btnYes = document.getElementById('yes');
  
  slideFour.classList.remove('d-none');

  btnNo.addEventListener('click', function () {
    slideFour.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideFour.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideFour.remove();
      setTimeout(() => {
        const slideNo = document.getElementById('slideNo');
        slideNo.classList.remove('d-none');
        
        const btnFinalYes = document.getElementById('finalYes');
        btnFinalYes.addEventListener('click', function () {
          slideNo.classList.replace('animate__fadeIn', 'animate__bounceOut');
          setTimeout(function () {
            slideNo.remove();
            setTimeout(() => {
              const slideYes = document.getElementById('slideYes');
              slideYes.classList.remove('d-none');
              confetti();
            }, 500);
          }, 1000);
        });
        
      }, 500);
    }, 1000);
  });

  btnYes.addEventListener('click', function () {
    slideFour.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideFour.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideFour.remove();
      setTimeout(() => {
        const slideYes = document.getElementById('slideYes');
        slideYes.classList.remove('d-none');
        confetti();
      }, 500);
    }, 1000);
  });
};

const _slideSix = function () {
  const slideSix = document.getElementById('slideSix');
  if (slideSix) slideSix.classList.remove('d-none');
};


new TypeIt("#text1", {
  strings: [
    "Happy Birthday bbg 🥰<br><br>",
    "I don’t even know where to start because you became such an important part of my life so naturally.<br><br>",
    "Thank you for always listening to me.<br>",
    "Like genuinely listening.<br>",
    "No matter how random, annoying, frustrated, or confused I sound, you still sit there and hear me out every single time.<br><br>",
    "And honestly, your yapping?<br>",
    "One of my favorite things ever.<br>",
    "I can literally listen to you talk for hours and still not get bored.<br><br>",
    "You made so many normal days feel better without even realizing it.<br>",
    "Sometimes one conversation with you is enough to fix my mood completely.<br><br>",
    "I know I don’t say these things directly much,<br>",
    "but I’m really grateful for you bbg.<br>",
    "Like really grateful.<br><br>",
    "Please stay the same okay<br>",
    "Keep talking too much, keep caring too much, keep being you. cause thats you know bbg<br><br>",
    "Happy Birthday once again"
  ],
  startDelay: 4000,
  speed: 45,
  waitUntilVisible: true
}).go();



new TypeIt("#thanks", {
  strings: ["Thank you."],
  startDelay: 2000,
  speed: 150,
  loop: false,
  waitUntilVisible: true,
}).go();



'use strict';

var onlyOnKonami = false;

function confetti() {
  // Globals
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 2000
  var isRunning = true

  setTimeout(() => {
    isRunning = false
  }, runFor);

  // Settings
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pointer = 0;

  var particles = 150,
    spread = 20,
    sizeMin = 5,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .13,
    dyMax = .18,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function () {
      return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
    },
    function () {
      var black = 200 * random() | 0;
      return color(200, black, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, 200, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, black, 200);
    },
    function () {
      return color(200, 100, 200 * random() | 0);
    },
    function () {
      return color(200 * random() | 0, 200, 200);
    },
    function () {
      var black = 256 * random() | 0;
      return color(black, black, black);
    },
    function () {
      return colorThemes[random() < .5 ? 1 : 2]();
    },
    function () {
      return colorThemes[random() < .5 ? 3 : 5]();
    },
    function () {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];

  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }


  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti

      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
        count = 0;

      (function addConfetto() {

        if (onlyOnKonami && ++count > particles)
          return timer = undefined;

        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);

          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);


      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function (event) {
    pointer = konami[pointer] === event.which ?
      pointer + 1 :
      +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });

  if (!onlyOnKonami) poof();
};
