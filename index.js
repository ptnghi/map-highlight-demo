//alert("Hello");
var mySVG = document.getElementById("svg-object");
var svgDoc;
mySVG.addEventListener("load",function() {
     svgDoc = mySVG.contentDocument;
     console.log(svgDoc);
     var vnmap = svgDoc.getElementById("vn");
     vnmap.setAttribute("fill", "blue");
     console.log(vnmap);
     
     //childs = vnmap.getElementByTagName("path");

      vnmap.addEventListener("mouseover", function() {
          vnmap.setAttribute("fill", "black");
      });
      vnmap.addEventListener("mouseout", function() {
          vnmap.setAttribute("fill", "blue");
      });
}, false);