var xhr = new XMLHttpRequest();
xhr.open('GET', '/projects/');
xhr.send(null);

xhr.onreadystatechange = function() {
    var DONE = 4; // readState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.

};
