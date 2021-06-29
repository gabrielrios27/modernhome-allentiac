
const templateSource=document.getElementById("producto").innerHTML;
const template= Handlebars.compile(templateSource);
const context = {
	galeria:[
		/*{
		  tipo: "p2", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"california beige 51x51  (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"california beige 51x51",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		/*{
		  tipo: "p1", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"parquet cerezo 35x60 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"parquet cerezo 35x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		/*{
		  tipo: "p2", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"alisado gris 51x51 (5).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"alisado gris 51x51",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		/*{
		  tipo: "p1", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"parquet castaño 40x40 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"parquet castaño 40x40",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		/*{
		  tipo: "p1", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"parquet alamo 40x40 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"parquet alamo 40x40",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		{
		  tipo: "p3", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"arizona claro 36x36 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"arizona claro 36x36",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		/*{
		  tipo: "p2", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"cordillera cobre 50x50 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"cordillera cobre 50x50",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		{
		  tipo: "p1", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"legno nogal 30x45 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"legno nogal 30x45",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"linea venecia 43x43 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"línea venecia 43x43",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"barcelos rojo 36x36 (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"barcelos rojo 36x36",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		/*{
		  tipo: "p3", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"modena 36x36 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"modena 36x36",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		{
		  tipo: "p2", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"cadiz gris 36x36 (2) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"cadiz gris 36x36",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		/*{
		  tipo: "p4", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"porfido marron 46x46 (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"porfido marron 46x46",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		{
		  tipo: "p4", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"porfido rojo  46x46 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"porfido rojo  46x46",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"portland gris 51x51 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"portland gris 51x51",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		}
		/*{
		  tipo: "p2", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"portland negro 51x51 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"portland negro 51x51",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		/*{
		  tipo: "p1", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"taracea tiza 45x45 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"taracea tiza 45x45",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/
		/*{
		  tipo: "p1", // p1= simil madera , p2= simil cementicio , p3= simil marmol y diseños ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"tongoy caramel 46x46 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"tongoy caramel 46x46",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		}*/



	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













