

<script type="text/javascript">

/*
* *  Basic Location * * 
*/
function getBasicLocation() {
return this.location.origin;
}

function getCurrentSubPath() {
return this.location.pathname;
}

function getDocumentImages() {
  this.window.document.im
}


/*
* *  Window Sizing * * 
*/

//source: 
function getViewportWidth() {
 if (window.innerWidth) {
         return window.innerWidth;
 } else if (document.body && document.body.offsetWidth) {
         return document.body.offsetWidth;
 } else {
         return 0;
 }
}
