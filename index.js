//alert("Hello");
var mySVG = document.getElementById("svg-object");
var svgDoc;
mySVG.addEventListener("load",function() {
     svgDoc = mySVG.contentDocument;
     console.log(svgDoc);
     let svgtag = svgDoc.getElementsByTagName("svg")[0];
     console.log(svgtag);
     let container = document.getElementById("map-container");
     svgtag.setAttribute("width", container.clientWidth);
     svgtag.setAttribute("height", container.clientHeight);
    
     makeInteractive("vn");
     makeInteractive("ph");
     //childs = vnmap.getElementByTagName("path");

      
}, false);


function makeInteractive(countryName){
    let infoBoxId = countryName+"-info";
    let country = svgDoc.getElementById(countryName);
    country.setAttribute("fill", "blue");


    country.addEventListener("mouseover", function() {
        country.setAttribute("fill", "black");
        let infobox = document.getElementById(infoBoxId);
        infobox.style.display = "block";


        country.onmousemove = function (e) {
          console.log(e);
          var x = e.clientX,
              y = e.clientY;
          infobox.style.top = (y + 10) + 'px';
          infobox.style.left = (x + 10) + 'px';
      };

    });

    country.addEventListener("mouseout", function() {
        country.setAttribute("fill", "blue");
        let infobox = document.getElementById(infoBoxId);
        infobox.style.display = "none";
    });

    country.addEventListener("click", () => {
      alert(countryName);
    });
}