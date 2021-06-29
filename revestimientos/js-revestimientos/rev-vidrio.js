
const templateSource=document.getElementById("producto").innerHTML;
const template= Handlebars.compile(templateSource);
const context = {
	galeria:[
		{
		  tipo: "p1", // p1= Liso brillante , p2= diseños , p3=... ,p4=..
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-24x95 , p1-m3=sim-mad-15x90, p1-m4=sim-mad-15x60, p1-m5=sim-mad-otros
		  							//p2-m1=sat-60x120, p2-m2=sat-60x60, p2-m3=sat-58x58, p2-m4=sat-otros
		  							// p3-m1=brill-pulido,  p3-m2=brill-esmaltado 
		  							// p4-m1=rustico
		  nombreImagen:"vidrio brillante rojo (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante rojo",
		  
		  // paginaCaracteristicas:"vidrio brillante rojo",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio brillante turquesa (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante turquesa",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio brillante negro (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante negro",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio brillante lemon (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante lemon",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio brillante chocolate (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante chocolate",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio nata brillante  (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante nata",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio ultra blanco brillante 1 g (5).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante ultra blanco",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio verde wity brillante 1 g (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante verde wity",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio azul dazzle brillante22.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante azul dazzle",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio marquina .jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio marquina",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio carrara (11).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio carrara",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio cuccina black 1 (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio cuccina",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio leño mirror gris 1 (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio leño mirror gris",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio brillante vison(11).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante vison",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio brillante white (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio brillante white",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio oxido (5).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio oxido",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio opacid mirror gris (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio opacid mirror gris",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= diseños , p3=... ,p4=..
		  nombreImagen:"vidrio opacid mirror bronce (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"vidrio opacid mirror bronce",
		  
		  medida: "p1-m1", 
		}
		

	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













