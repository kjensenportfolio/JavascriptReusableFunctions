

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

function getViewportHeight() {
       if (window.innerHeight)
       {
               return window.innerHeight;
       }
       else if (document.body && document.body.offsetHeight)
       {
               return document.body.offsetHeight;
       }
       else
       {
               return 0;
       }
}

var tellMeTheSizes=function() {
       document.getElementById("viewportwidth").innerHTML = getViewportWidth() + "px";
       document.getElementById("viewportheight").innerHTML = getViewportHeight() + "px";
       document.getElementById("resolutionheight").innerHTML = screen.height + "px";
       document.getElementById("resolutionwidth").innerHTML = screen.width + "px";
}

window.onload=function() {
       tellMeTheSizes();
}

window.onresize=function() {
       tellMeTheSizes();
}

window.onmousemove=function(event)
{
       ev = event || window.event;
       document.getElementById("mousetop").innerHTML = ev.pageY + "px";
       document.getElementById("mouseleft").innerHTML = ev.pageX + "px";
}
