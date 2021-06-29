
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
		  nombreImagen:"adoquin recto grande 40x40 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"adoquin recto grande 40x40",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"adoquin recto chico 40x40 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"adoquin recto chico 40x40",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"adoquin circular grande 40x40 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"adoquin circular grande 40x40",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"adoquin circular chico 40x40 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"adoquin circular chico 40x40",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p4", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"garden 33x33 (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"garden 33x33",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"laja san juan 40x40 (8) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"laja san juan 40x40",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= Adoquín Recto , p2= Adoquín Circular , p3= Tipo Laja  ,p4=Garden
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"laja san luis 40x40 (5).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"laja san luis 40x40",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		}
		


	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













