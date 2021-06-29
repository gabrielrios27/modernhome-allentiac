
const templateSource=document.getElementById("producto").innerHTML;
const template= Handlebars.compile(templateSource);
const context = {
	galeria:[
		{
		  tipo: "p7", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"extreme roble tívoli SP027 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble belluno",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p7", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"extreme roble toscana SP026 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble alessandria",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p7", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"extreme roble treviso SP028 (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble vicenza",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p7", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"extreme roble sienna SP025 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble verona",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		
		{
		  tipo: "p8", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"click planck egeo VM1097 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"phoenix",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p8", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"click plank arabia VM6154 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"charlotte",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p8", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"click plank atenea VM6726 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"denver",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p8", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"click plank caspien VM6046 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"dakota",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"harmony amber SP008 (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"thairé brown",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"harmony bisque  SP005 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"thairé taupe",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"harmony mocha SP007 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"thairé black",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"harmony silver SP006 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"thairé grey",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p5", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"lounge roble brandy SP033 (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble lyon",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p5", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"lounge roble long island SP035 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble niza",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p5", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"lounge roble sheridans SP034 (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble marsella",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"magical gris acero SP021 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"silver trey",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"magical gris platino SP022 (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"silver soft",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"magical hierro antiguo SP024 (5).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"antique",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"magical oro suave SP023 (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"sunset",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"pinar pino bergen SP011 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"pino rafina",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"pinar pino helsinski SP010  (6).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"pino megara",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"pinar pino odense SP012 (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"pino delfos",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"pinar pino visby SP009  (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"pino sunión",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p6", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"rustic roble camel SP004 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble montalcino",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p6", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"rustic roble fox SP001 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble arezzo",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p6", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"rustic roble millenium SP002 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble florencia",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p6", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"rustic roble umber SP003 (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble siena",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p4", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"sense nogal otranto  SP013 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"nogal rodas",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p4", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"sense roble atrani SP016 (1).jpeg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble naplia",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p4", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"sense roble nesso SP014 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble canea",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p4", // p1= magical , p2= harmony , p3= pinar  ,p4=sense, p5=lounge, p6=rustic, p7=extreme, p8= click planck
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"sense roble varenna SP015 (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"roble praga",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		}
		

	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













