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



window.onresize = function() {
  var myUrl = window.location;
  window.location.replace(myUrl)
}

if (document.documentElement.clientWidth > 822) {
  splitScroll();
}
