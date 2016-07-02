$(document).ready(function(){
  var mq = window.matchMedia( "(min-width: 600px)" );

  if (mq.matches) {
    var list = document.getElementsByClassName('slider-item');

    for (var i = 0; i < list.length; i++) {
      var src = list[i].getAttribute('data-image-src');
      list[i].style.backgroundImage="url('" + src + "')";
    }
  }
});
