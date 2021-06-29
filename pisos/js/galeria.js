
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
   document.getElementById('filtro-2-porc-sim-mad').style.display='none';
   document.getElementById('filtro-2-porc-sim-mad').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-mad').style.transition='0.5s';
   document.getElementById('boton-porc-sim-mad').style.boxShadow='none';
   document.getElementById('boton-porc-sim-mad').style.fontWeight="400";

   document.getElementById('filtro-2-porc-sim-cem').style.display='none';
   document.getElementById('filtro-2-porc-sim-cem').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-cem').style.transition='0.5s';
   document.getElementById('boton-porc-sim-cem').style.boxShadow='none';
   document.getElementById('boton-porc-sim-cem').style.fontWeight="400";

   document.getElementById('filtro-2-porc-brill').style.display='none';
   document.getElementById('filtro-2-porc-brill').style.opacity='0';
   document.getElementById('filtro-2-porc-brill').style.transition='0.5s';
   document.getElementById('boton-porc-brill').style.boxShadow='none';
   document.getElementById('boton-porc-brill').style.fontWeight="400";

   document.getElementById('filtro-2-porc-rust').style.display='none';
   document.getElementById('filtro-2-porc-rust').style.opacity='0';
   document.getElementById('filtro-2-porc-rust').style.transition='0.5s';
   document.getElementById('boton-porc-rust').style.boxShadow='none';
   document.getElementById('boton-porc-rust').style.fontWeight="400";

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

function filtro2porcsimmad() {
   document.getElementById('filtro-2-porc-sim-mad').style.display='flex';
   document.getElementById('filtro-2-porc-sim-mad').style.opacity='1';
   document.getElementById('filtro-2-porc-sim-mad').style.transition='0.5s';

 
   document.getElementById('filtro-2-porc-sim-cem').style.display='none';
   document.getElementById('filtro-2-porc-sim-cem').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-cem').style.transition='0.5s';
   document.getElementById('boton-porc-sim-cem').style.boxShadow='none';
   document.getElementById('boton-porc-sim-cem').style.fontWeight="400";
  
   document.getElementById('filtro-2-porc-brill').style.display='none';
   document.getElementById('filtro-2-porc-brill').style.opacity='0';
   document.getElementById('filtro-2-porc-brill').style.transition='0.5s';
   document.getElementById('boton-porc-brill').style.boxShadow='none';
   document.getElementById('boton-porc-brill').style.fontWeight="400";
 
   document.getElementById('filtro-2-porc-rust').style.display='none';
   document.getElementById('filtro-2-porc-rust').style.opacity='0';
   document.getElementById('filtro-2-porc-rust').style.transition='0.5s';
   document.getElementById('boton-porc-rust').style.boxShadow='none';
   document.getElementById('boton-porc-rust').style.fontWeight="400";

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
function botonporcsimmad() {
   document.getElementById('boton-porc-sim-mad').style.boxShadow="0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00";
   document.getElementById('boton-porc-sim-mad').style.fontWeight="600"; 
   
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

function filtro2porcsimcem() {
	document.getElementById('filtro-2-porc-sim-cem').style.display='flex';
   document.getElementById('filtro-2-porc-sim-cem').style.opacity='1';
   document.getElementById('filtro-2-porc-sim-cem').style.transition='0.5s';
   

   document.getElementById('filtro-2-porc-sim-mad').style.display='none';
   document.getElementById('filtro-2-porc-sim-mad').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-mad').style.transition='0.5s';
   document.getElementById('boton-porc-sim-mad').style.boxShadow='none';
   document.getElementById('boton-porc-sim-mad').style.fontWeight="400";
  

   document.getElementById('filtro-2-porc-brill').style.display='none';
   document.getElementById('filtro-2-porc-brill').style.opacity='0';
   document.getElementById('filtro-2-porc-brill').style.transition='0.5s';
   document.getElementById('boton-porc-brill').style.boxShadow='none';
   document.getElementById('boton-porc-brill').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-rust').style.display='none';
   document.getElementById('filtro-2-porc-rust').style.opacity='0';
   document.getElementById('filtro-2-porc-rust').style.transition='0.5s';
   document.getElementById('boton-porc-rust').style.boxShadow='none';
   document.getElementById('boton-porc-rust').style.fontWeight="400";

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
function botonporcsimcem() {
   document.getElementById('boton-porc-sim-cem').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-porc-sim-cem').style.fontWeight="600";
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
function filtro2porcbrill() {
	document.getElementById('filtro-2-porc-sim-cem').style.display='none';
   document.getElementById('filtro-2-porc-sim-cem').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-cem').style.transition='0.5s';
   document.getElementById('boton-porc-sim-cem').style.boxShadow='none';
   document.getElementById('boton-porc-sim-cem').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-sim-mad').style.display='none';
   document.getElementById('filtro-2-porc-sim-mad').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-mad').style.transition='0.5s';
   document.getElementById('boton-porc-sim-mad').style.boxShadow='none';
   document.getElementById('boton-porc-sim-mad').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-brill').style.display='flex';
   document.getElementById('filtro-2-porc-brill').style.opacity='1';
   document.getElementById('filtro-2-porc-brill').style.transition='0.5s';
  
   // document.getElementById('boton-porc-brill').style.boxShadow='none';
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
function botonporcbrill() {
   document.getElementById('boton-porc-brill').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-porc-brill').style.fontWeight="600";
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

function filtro2porcrust() {
	document.getElementById('filtro-2-porc-sim-cem').style.display='none';
   document.getElementById('filtro-2-porc-sim-cem').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-cem').style.transition='0.5s';
   document.getElementById('boton-porc-sim-cem').style.boxShadow='none';
   document.getElementById('boton-porc-sim-cem').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-sim-mad').style.display='none';
   document.getElementById('filtro-2-porc-sim-mad').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-mad').style.transition='0.5s';
   document.getElementById('boton-porc-sim-mad').style.boxShadow='none';
   document.getElementById('boton-porc-sim-mad').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-brill').style.display='none';
   document.getElementById('filtro-2-porc-brill').style.opacity='0';
   document.getElementById('filtro-2-porc-brill').style.transition='0.5s';
   document.getElementById('boton-porc-brill').style.boxShadow='none';
   document.getElementById('boton-porc-brill').style.fontWeight="400";

   document.getElementById('filtro-2-porc-rust').style.display='flex';
   document.getElementById('filtro-2-porc-rust').style.opacity='1';
   document.getElementById('filtro-2-porc-rust').style.transition='0.5s';
   // document.getElementById('boton-porc-rust').style.boxShadow='none';

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
function botonporcrust() {
   document.getElementById('boton-porc-rust').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-porc-rust').style.fontWeight="600";
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
   document.getElementById('filtro-2-porc-sim-mad-resp').style.display='none';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.transition='0.5s';
   document.getElementById('boton-porc-sim-mad-resp').style.boxShadow='none';
   document.getElementById('boton-porc-sim-mad-resp').style.fontWeight="400";

   document.getElementById('filtro-2-porc-sim-cem-resp').style.display='none';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.transition='0.5s';
   document.getElementById('boton-porc-sim-cem-resp').style.boxShadow='none';
   document.getElementById('boton-porc-sim-cem-resp').style.fontWeight="400";

   document.getElementById('filtro-2-porc-brill-resp').style.display='none';
   document.getElementById('filtro-2-porc-brill-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-brill-resp').style.transition='0.5s';
   document.getElementById('boton-porc-brill-resp').style.boxShadow='none';
   document.getElementById('boton-porc-brill-resp').style.fontWeight="400";

   document.getElementById('filtro-2-porc-rust-resp').style.display='none';
   document.getElementById('filtro-2-porc-rust-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-rust-resp').style.transition='0.5s';
   document.getElementById('boton-porc-rust-resp').style.boxShadow='none';
   document.getElementById('boton-porc-rust-resp').style.fontWeight="400";

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

function filtro2porcsimmadresp() {
   document.getElementById('filtro-2-porc-sim-mad-resp').style.display='flex';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.opacity='1';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.transition='0.5s';

 
   document.getElementById('filtro-2-porc-sim-cem-resp').style.display='none';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.transition='0.5s';
   document.getElementById('boton-porc-sim-cem-resp').style.boxShadow='none';
   document.getElementById('boton-porc-sim-cem-resp').style.fontWeight="400";
  
   document.getElementById('filtro-2-porc-brill-resp').style.display='none';
   document.getElementById('filtro-2-porc-brill-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-brill-resp').style.transition='0.5s';
   document.getElementById('boton-porc-brill-resp').style.boxShadow='none';
   document.getElementById('boton-porc-brill-resp').style.fontWeight="400";
 
   document.getElementById('filtro-2-porc-rust-resp').style.display='none';
   document.getElementById('filtro-2-porc-rust-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-rust-resp').style.transition='0.5s';
   document.getElementById('boton-porc-rust-resp').style.boxShadow='none';
   document.getElementById('boton-porc-rust-resp').style.fontWeight="400";

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
function botonporcsimmadresp() {
   document.getElementById('boton-porc-sim-mad-resp').style.boxShadow="0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00";
   document.getElementById('boton-porc-sim-mad-resp').style.fontWeight="600";
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

function filtro2porcsimcemresp() {
	document.getElementById('filtro-2-porc-sim-cem-resp').style.display='flex';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.opacity='1';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.transition='0.5s';
   

   document.getElementById('filtro-2-porc-sim-mad-resp').style.display='none';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.transition='0.5s';
   document.getElementById('boton-porc-sim-mad-resp').style.boxShadow='none';
   document.getElementById('boton-porc-sim-mad-resp').style.fontWeight="400";
  

   document.getElementById('filtro-2-porc-brill-resp').style.display='none';
   document.getElementById('filtro-2-porc-brill-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-brill-resp').style.transition='0.5s';
   document.getElementById('boton-porc-brill-resp').style.boxShadow='none';
   document.getElementById('boton-porc-brill-resp').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-rust-resp').style.display='none';
   document.getElementById('filtro-2-porc-rust-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-rust-resp').style.transition='0.5s';
   document.getElementById('boton-porc-rust-resp').style.boxShadow='none';
   document.getElementById('boton-porc-rust-resp').style.fontWeight="400";

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
function botonporcsimcemresp() {
   document.getElementById('boton-porc-sim-cem-resp').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-porc-sim-cem-resp').style.fontWeight="600";
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
function filtro2porcbrillresp() {
	document.getElementById('filtro-2-porc-sim-cem-resp').style.display='none';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.transition='0.5s';
   document.getElementById('boton-porc-sim-cem-resp').style.boxShadow='none';
   document.getElementById('boton-porc-sim-cem').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-sim-mad-resp').style.display='none';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.transition='0.5s';
   document.getElementById('boton-porc-sim-mad-resp').style.boxShadow='none';
   document.getElementById('boton-porc-sim-mad-resp').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-brill-resp').style.display='flex';
   document.getElementById('filtro-2-porc-brill-resp').style.opacity='1';
   document.getElementById('filtro-2-porc-brill-resp').style.transition='0.5s';
  
   // document.getElementById('boton-porc-brill').style.boxShadow='none';

   document.getElementById('filtro-2-porc-rust-resp').style.display='none';
   document.getElementById('filtro-2-porc-rust-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-rust-resp').style.transition='0.5s';
   document.getElementById('boton-porc-rust-resp').style.boxShadow='none';
   document.getElementById('boton-porc-rust-resp').style.fontWeight="400";

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
function botonporcbrillresp() {
   document.getElementById('boton-porc-brill-resp').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-porc-brill-resp').style.fontWeight="600";
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

function filtro2porcrustresp() {
	document.getElementById('filtro-2-porc-sim-cem-resp').style.display='none';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-cem-resp').style.transition='0.5s';
   document.getElementById('boton-porc-sim-cem-resp').style.boxShadow='none';
   document.getElementById('boton-porc-sim-cem-resp').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-sim-mad-resp').style.display='none';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-sim-mad-resp').style.transition='0.5s';
   document.getElementById('boton-porc-sim-mad-resp').style.boxShadow='none';
   document.getElementById('boton-porc-sim-mad-resp').style.fontWeight="400";
   

   document.getElementById('filtro-2-porc-brill-resp').style.display='none';
   document.getElementById('filtro-2-porc-brill-resp').style.opacity='0';
   document.getElementById('filtro-2-porc-brill-resp').style.transition='0.5s';
   document.getElementById('boton-porc-brill-resp').style.boxShadow='none';
   document.getElementById('boton-porc-brill-resp').style.fontWeight="400";

   document.getElementById('filtro-2-porc-rust-resp').style.display='flex';
   document.getElementById('filtro-2-porc-rust-resp').style.opacity='1';
   document.getElementById('filtro-2-porc-rust-resp').style.transition='0.5s';
   // document.getElementById('boton-porc-rust').style.boxShadow='none';

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
function botonporcrustresp() {
   document.getElementById('boton-porc-rust-resp').style.boxShadow='0 0 0px 0px white, 0 0 2px 0px #FF9E00, 0 0 2px 0px #FF9E00';
   document.getElementById('boton-porc-rust-resp').style.fontWeight="600";
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

