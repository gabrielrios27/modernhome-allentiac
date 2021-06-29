
const templateSource=document.getElementById("producto").innerHTML;
const template= Handlebars.compile(templateSource);
const context = {
	galeria:[
		{
		  tipo: "p1", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"co-extruded antique (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"co-extruded antique",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"co-extruded lapacho (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"co-extruded lapacho",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"co-extruded silver (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"co-extruded silver",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"co-extruded teka (5) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"co-extruded teka",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"composite bambu ranurado (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"composite bambu ranurado",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		}


	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













