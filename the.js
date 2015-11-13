// всё, что может пригодиться

function choice(seq) {
  return seq[Math.round(Math.random() * (seq.length - 1))];
}

function shuffle(seq) {
  var counter = seq.length, temp, index;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = seq[counter];
    seq[counter] = seq[index];
    seq[index] = temp;
  }
}

function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
    s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

(function (d, w, c) {
  (w[c] = w[c] || []).push(function() {
    try {
      w.yaCounter25470476 = new Ya.Metrika({
        id:25470476,
        webvisor:true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        trackHash:true});
    } catch(e) { }
  });
  var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () { n.parentNode.insertBefore(s, n); };
  s.type = "text/javascript";
  s.async = true;
  s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
  if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
  } else { f(); }
})(document, window, "yandex_metrika_callbacks");
