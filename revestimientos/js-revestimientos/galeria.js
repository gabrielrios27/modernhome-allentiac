
$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});


function filtro2all() {
   document.getElementById('filtro-2-p1').style.display='none';
   document.getElementById('filtro-2-p1').style.opacity='0';
   document.getElementById('filtro-2-p1').style.transition='0.5s';
   document.getElementById('boton-p1').style.boxShadow='none';
   document.getElementById('boton-p1').style.fontWeight="400";

   document.getElementById('filtro-2-p2').style.display='none';
   document.getElementById('filtro-2-p2').style.opacity='0';
   document.getElementById('filtro-2-p2').style.transition='0.5s';
   document.getElementById('boton-p2').style.boxShadow='none';
   document.getElementById('boton-p2').style.fontWeight="400";

   document.getElementById('filtro-2-p3').style.display='none';
   document.getElementById('filtro-2-p3').style.opacity='0';
   document.getElementById('filtro-2-p3').style.transition='0.5s';
   document.getElementById('boton-p3').style.boxShadow='none';
   document.getElementById('boton-p3').style.fontWeight="400";

   document.getElementById('filtro-2-p4').style.display='none';
   document.getElementById('filtro-2-p4').style.opacity='0';
   document.getElementById('filtro-2-p4').style.transition='0.5s';
   document.getElementById('boton-p4').style.boxShadow='none';
   document.getElementById('boton-p4').style.fontWeight="400";

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
   var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='inline';
     }
}

function filtro2p1() {
   document.getElementById('filtro-2-p1').style.display='flex';
   document.getElementById('filtro-2-p1').style.opacity='1';
   document.getElementById('filtro-2-p1').style.transition='0.5s';

 
   document.getElementById('filtro-2-p2').style.display='none';
   document.getElementById('filtro-2-p2').style.opacity='0';
   document.getElementById('filtro-2-p2').style.transition='0.5s';
   document.getElementById('boton-p2').style.boxShadow='none';
   document.getElementById('boton-p2').style.fontWeight="400";
  
   document.getElementById('filtro-2-p3').style.display='none';
   document.getElementById('filtro-2-p3').style.opacity='0';
   document.getElementById('filtro-2-p3').style.transition='0.5s';
   document.getElementById('boton-p3').style.boxShadow='none';
   document.getElementById('boton-p3').style.fontWeight="400";
 
   document.getElementById('filtro-2-p4').style.display='none';
   document.getElementById('filtro-2-p4').style.opacity='0';
   document.getElementById('filtro-2-p4').style.transition='0.5s';
   document.getElementById('boton-p4').style.boxShadow='none';
   document.getElementById('boton-p4').style.fontWeight="400";

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='inline';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }

}
function botonp1() {
   document.getElementById('boton-p1').style.boxShadow="0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00";
   document.getElementById('boton-p1').style.fontWeight="600"; 
   
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='inline';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }

}

function filtro2p2() {
	document.getElementById('filtro-2-p2').style.display='flex';
   document.getElementById('filtro-2-p2').style.opacity='1';
   document.getElementById('filtro-2-p2').style.transition='0.5s';
   

   document.getElementById('filtro-2-p1').style.display='none';
   document.getElementById('filtro-2-p1').style.opacity='0';
   document.getElementById('filtro-2-p1').style.transition='0.5s';
   document.getElementById('boton-p1').style.boxShadow='none';
   document.getElementById('boton-p1').style.fontWeight="400";
  

   document.getElementById('filtro-2-p3').style.display='none';
   document.getElementById('filtro-2-p3').style.opacity='0';
   document.getElementById('filtro-2-p3').style.transition='0.5s';
   document.getElementById('boton-p3').style.boxShadow='none';
   document.getElementById('boton-p3').style.fontWeight="400";
   

   document.getElementById('filtro-2-p4').style.display='none';
   document.getElementById('filtro-2-p4').style.opacity='0';
   document.getElementById('filtro-2-p4').style.transition='0.5s';
   document.getElementById('boton-p4').style.boxShadow='none';
   document.getElementById('boton-p4').style.fontWeight="400";

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='inline';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
   
}
function botonp2() {
   document.getElementById('boton-p2').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-p2').style.fontWeight="600";
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='inline';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
}
function filtro2p3() {
	document.getElementById('filtro-2-p2').style.display='none';
   document.getElementById('filtro-2-p2').style.opacity='0';
   document.getElementById('filtro-2-p2').style.transition='0.5s';
   document.getElementById('boton-p2').style.boxShadow='none';
   document.getElementById('boton-p2').style.fontWeight="400";
   

   document.getElementById('filtro-2-p1').style.display='none';
   document.getElementById('filtro-2-p1').style.opacity='0';
   document.getElementById('filtro-2-p1').style.transition='0.5s';
   document.getElementById('boton-p1').style.boxShadow='none';
   document.getElementById('boton-p1').style.fontWeight="400";
   

   document.getElementById('filtro-2-p3').style.display='flex';
   document.getElementById('filtro-2-p3').style.opacity='1';
   document.getElementById('filtro-2-p3').style.transition='0.5s';
  
   // document.getElementById('boton-p3').style.boxShadow='none';
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='inline';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
   

}
function botonp3() {
   document.getElementById('boton-p3').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-p3').style.fontWeight="600";
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='inline';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
}

function filtro2p4() {
	document.getElementById('filtro-2-p2').style.display='none';
   document.getElementById('filtro-2-p2').style.opacity='0';
   document.getElementById('filtro-2-p2').style.transition='0.5s';
   document.getElementById('boton-p2').style.boxShadow='none';
   document.getElementById('boton-p2').style.fontWeight="400";
   

   document.getElementById('filtro-2-p1').style.display='none';
   document.getElementById('filtro-2-p1').style.opacity='0';
   document.getElementById('filtro-2-p1').style.transition='0.5s';
   document.getElementById('boton-p1').style.boxShadow='none';
   document.getElementById('boton-p1').style.fontWeight="400";
   

   document.getElementById('filtro-2-p3').style.display='none';
   document.getElementById('filtro-2-p3').style.opacity='0';
   document.getElementById('filtro-2-p3').style.transition='0.5s';
   document.getElementById('boton-p3').style.boxShadow='none';
   document.getElementById('boton-p3').style.fontWeight="400";

   document.getElementById('filtro-2-p4').style.display='flex';
   document.getElementById('filtro-2-p4').style.opacity='1';
   document.getElementById('filtro-2-p4').style.transition='0.5s';
   // document.getElementById('boton-p4').style.boxShadow='none';

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='inline';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
   
}
function botonp4() {
   document.getElementById('boton-p4').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-p4').style.fontWeight="600";
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='inline';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
}

// ----------------------seleccion-responsive------------------------------------------------------

function filtro2allresp() {
   document.getElementById('filtro-2-p1-resp').style.display='none';
   document.getElementById('filtro-2-p1-resp').style.opacity='0';
   document.getElementById('filtro-2-p1-resp').style.transition='0.5s';
   document.getElementById('boton-p1-resp').style.boxShadow='none';
   document.getElementById('boton-p1-resp').style.fontWeight="400";

   document.getElementById('filtro-2-p2-resp').style.display='none';
   document.getElementById('filtro-2-p2-resp').style.opacity='0';
   document.getElementById('filtro-2-p2-resp').style.transition='0.5s';
   document.getElementById('boton-p2-resp').style.boxShadow='none';
   document.getElementById('boton-p2-resp').style.fontWeight="400";

   document.getElementById('filtro-2-p3-resp').style.display='none';
   document.getElementById('filtro-2-p3-resp').style.opacity='0';
   document.getElementById('filtro-2-p3-resp').style.transition='0.5s';
   document.getElementById('boton-p3-resp').style.boxShadow='none';
   document.getElementById('boton-p3-resp').style.fontWeight="400";

   document.getElementById('filtro-2-p4-resp').style.display='none';
   document.getElementById('filtro-2-p4-resp').style.opacity='0';
   document.getElementById('filtro-2-p4-resp').style.transition='0.5s';
   document.getElementById('boton-p4-resp').style.boxShadow='none';
   document.getElementById('boton-p4-resp').style.fontWeight="400";

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='inline';
     }
   

}

function filtro2p1resp() {
   document.getElementById('filtro-2-p1-resp').style.display='flex';
   document.getElementById('filtro-2-p1-resp').style.opacity='1';
   document.getElementById('filtro-2-p1-resp').style.transition='0.5s';

 
   document.getElementById('filtro-2-p2-resp').style.display='none';
   document.getElementById('filtro-2-p2-resp').style.opacity='0';
   document.getElementById('filtro-2-p2-resp').style.transition='0.5s';
   document.getElementById('boton-p2-resp').style.boxShadow='none';
   document.getElementById('boton-p2-resp').style.fontWeight="400";
  
   document.getElementById('filtro-2-p3-resp').style.display='none';
   document.getElementById('filtro-2-p3-resp').style.opacity='0';
   document.getElementById('filtro-2-p3-resp').style.transition='0.5s';
   document.getElementById('boton-p3-resp').style.boxShadow='none';
   document.getElementById('boton-p3-resp').style.fontWeight="400";
 
   document.getElementById('filtro-2-p4-resp').style.display='none';
   document.getElementById('filtro-2-p4-resp').style.opacity='0';
   document.getElementById('filtro-2-p4-resp').style.transition='0.5s';
   document.getElementById('boton-p4-resp').style.boxShadow='none';
   document.getElementById('boton-p4-resp').style.fontWeight="400";

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='inline';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
   
}
function botonp1resp() {
   document.getElementById('boton-p1-resp').style.boxShadow="0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00";
   document.getElementById('boton-p1-resp').style.fontWeight="600";
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='inline';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     } 
}

function filtro2p2resp() {
	document.getElementById('filtro-2-p2-resp').style.display='flex';
   document.getElementById('filtro-2-p2-resp').style.opacity='1';
   document.getElementById('filtro-2-p2-resp').style.transition='0.5s';
   

   document.getElementById('filtro-2-p1-resp').style.display='none';
   document.getElementById('filtro-2-p1-resp').style.opacity='0';
   document.getElementById('filtro-2-p1-resp').style.transition='0.5s';
   document.getElementById('boton-p1-resp').style.boxShadow='none';
   document.getElementById('boton-p1-resp').style.fontWeight="400";
  

   document.getElementById('filtro-2-p3-resp').style.display='none';
   document.getElementById('filtro-2-p3-resp').style.opacity='0';
   document.getElementById('filtro-2-p3-resp').style.transition='0.5s';
   document.getElementById('boton-p3-resp').style.boxShadow='none';
   document.getElementById('boton-p3-resp').style.fontWeight="400";
   

   document.getElementById('filtro-2-p4-resp').style.display='none';
   document.getElementById('filtro-2-p4-resp').style.opacity='0';
   document.getElementById('filtro-2-p4-resp').style.transition='0.5s';
   document.getElementById('boton-p4-resp').style.boxShadow='none';
   document.getElementById('boton-p4-resp').style.fontWeight="400";

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='inline';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
   

}
function botonp2resp() {
   document.getElementById('boton-p2-resp').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-p2-resp').style.fontWeight="600";
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='inline';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
}
function filtro2p3resp() {
	document.getElementById('filtro-2-p2-resp').style.display='none';
   document.getElementById('filtro-2-p2-resp').style.opacity='0';
   document.getElementById('filtro-2-p2-resp').style.transition='0.5s';
   document.getElementById('boton-p2-resp').style.boxShadow='none';
   document.getElementById('boton-p2').style.fontWeight="400";
   

   document.getElementById('filtro-2-p1-resp').style.display='none';
   document.getElementById('filtro-2-p1-resp').style.opacity='0';
   document.getElementById('filtro-2-p1-resp').style.transition='0.5s';
   document.getElementById('boton-p1-resp').style.boxShadow='none';
   document.getElementById('boton-p1-resp').style.fontWeight="400";
   

   document.getElementById('filtro-2-p3-resp').style.display='flex';
   document.getElementById('filtro-2-p3-resp').style.opacity='1';
   document.getElementById('filtro-2-p3-resp').style.transition='0.5s';
  
   // document.getElementById('boton-p3').style.boxShadow='none';

   document.getElementById('filtro-2-p4-resp').style.display='none';
   document.getElementById('filtro-2-p4-resp').style.opacity='0';
   document.getElementById('filtro-2-p4-resp').style.transition='0.5s';
   document.getElementById('boton-p4-resp').style.boxShadow='none';
   document.getElementById('boton-p4-resp').style.fontWeight="400";

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='inline';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
   

}
function botonp3resp() {
   document.getElementById('boton-p3-resp').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-p3-resp').style.fontWeight="600";
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='inline';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
}

function filtro2p4resp() {
	document.getElementById('filtro-2-p2-resp').style.display='none';
   document.getElementById('filtro-2-p2-resp').style.opacity='0';
   document.getElementById('filtro-2-p2-resp').style.transition='0.5s';
   document.getElementById('boton-p2-resp').style.boxShadow='none';
   document.getElementById('boton-p2-resp').style.fontWeight="400";
   

   document.getElementById('filtro-2-p1-resp').style.display='none';
   document.getElementById('filtro-2-p1-resp').style.opacity='0';
   document.getElementById('filtro-2-p1-resp').style.transition='0.5s';
   document.getElementById('boton-p1-resp').style.boxShadow='none';
   document.getElementById('boton-p1-resp').style.fontWeight="400";
   

   document.getElementById('filtro-2-p3-resp').style.display='none';
   document.getElementById('filtro-2-p3-resp').style.opacity='0';
   document.getElementById('filtro-2-p3-resp').style.transition='0.5s';
   document.getElementById('boton-p3-resp').style.boxShadow='none';
   document.getElementById('boton-p3-resp').style.fontWeight="400";

   document.getElementById('filtro-2-p4-resp').style.display='flex';
   document.getElementById('filtro-2-p4-resp').style.opacity='1';
   document.getElementById('filtro-2-p4-resp').style.transition='0.5s';
   // document.getElementById('boton-p4').style.boxShadow='none';

   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='inline';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='none';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
   

}
function botonp4resp() {
   document.getElementById('boton-p4-resp').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-p4-resp').style.fontWeight="600";
   var x = document.getElementsByName("lightbox1");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].style.display='none';
     }
   var y = document.getElementsByName("lightbox2");
   var j;
   for (j = 0; j < y.length; j++) {
     y[j].style.display='inline';
     }
     var z = document.getElementsByName("lightboxall");
   var k;
   for (k = 0; k < z.length; k++) {
     z[k].style.display='none';
     }
}

