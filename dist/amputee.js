/*!
 * amputee
 * A super-small, non-dependent JavaScript framework that allows you to slice up your HTML in separate files.
 * https://github.com/johnie/amputee#readme
 * @author Johnie Hjelm <johnie@hjelm.im>
 * @version 1.0.0
 * Copyright 2015. MIT licensed.
 */
"use strict";

var amputee = document.getElementsByTagName("amputee");

var httpGet = function httpGet(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send(null);
  if (xhr.status === 200) {
    return xhr.responseText;
  } else {
    throw "amputee: Could not fetch file: " + url;
  }
};

(function() {
  for (var i = 0; i < amputee.length; ) {
    var src = "";
    if (amputee[i].hasAttribute("src")) {
      src += httpGet(amputee[i].getAttribute("src"));
      var htmlNode = document.createElement("span");
      htmlNode.innerHTML = src;
      amputee[i].parentNode.replaceChild(htmlNode, amputee[i]);
    } else {
      throw "amputee: " + amputee[i] + " has no src location.";
    }
  }
})();