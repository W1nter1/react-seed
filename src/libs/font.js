(function (d, w) {
  const dl = d.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = dl.clientWidth;
      if (!clientWidth) return;
      dl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
  if (!d.addEventListener) return;
  w.addEventListener(resizeEvt, recalc, false);
  d.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);