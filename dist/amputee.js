/*!
 * amputee
 * A super-small, non-dependent JavaScript framework that allows you to slice up your HTML in separate files.
 * https://github.com/johnie/amputee#readme
 * @author Johnie Hjelm <johnie@hjelm.im>
 * @version 1.0.2
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
  while (amputee.length) {
    var src = "";
    if (amputee[0].hasAttribute("src")) {
      src += httpGet(amputee[0].getAttribute("src"));
      var htmlNode = document.createElement("span");
      htmlNode.innerHTML = src;
      amputee[0].parentNode.replaceChild(htmlNode, amputee[0]);
    } else {
      throw "amputee: " + amputee[0] + " has no src location.";
    }
  }
})();