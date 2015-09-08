/**
 * amputee.js
 *
 * Copyright © 2015 | Johnie Hjelm <johnie@hjelm.im
 */

// Get all amputee elements
const amputee = document.getElementsByTagName('amputee');

/**
 * Ajax function
 *
 * @return {string}
 * @throws Will throw an error if the file does not exist.
 */
const httpGet = url => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send(null);

  if (xhr.status === 200) {
    return xhr.responseText;
  } else {
    throw `amputee: Could not fetch file: ${url}`;
  }
};

/**
 * Main amputee function
 *
 * @return {mixed}
 */
;(() => {

  for (var i = 0; i < amputee.length; i++) {

    var src = '';

    if ( amputee[i].hasAttribute('src') ) {
      
      // Append the data to src
      src += httpGet(amputee[i].getAttribute('src'));
      
      // Create a div for each amputee
      var htmlNode = document.createElement('span');

      // Put src inside of htmlNode
      htmlNode.innerHTML = src;

      // Replace htmlNode with amputee response
      amputee[i].parentNode.replaceChild(htmlNode, amputee[i]);

    } else {
      throw `amputee: ${amputee[i]} has no src location.`;
    }

  }

})();
