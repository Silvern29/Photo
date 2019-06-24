function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '#himmel-pin',
    triggerHook: 0,
  })
    .setPin('#himmel-pin')
    // .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '#hotel-pin',
    triggerHook: 0,
  })
    .setPin('#hotel-pin')
    // .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '#hobby-pin',
    triggerHook: 0,
  })
    .setPin('#hobby-pin')
    // .addIndicators()
    .addTo(controller);
}

if (document.documentElement.clientWidth > 822) {
  splitScroll();
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var cStatus;

if (document.documentElement.clientWidth >= 822) {
  cStatus = 'large';
} else if (document.documentElement.clientWidth < 822) {
  cStatus = 'small';
}

let cReload = () => {
  var myUrl = window.location;
  window.location.replace(myUrl);
}

window.onresize = function() {
  if ((cStatus != 'small' && document.documentElement.clientWidth < 822) || (cStatus != 'large' && document.documentElement.clientWidth >= 822)) {
    cReload();
  }
}

// const mq = window.matchMedia( "(min-width: 840px)" );
// window.onresize = function() {
//   if (mq.matches) {
//     splitScroll();
//   }
// }

