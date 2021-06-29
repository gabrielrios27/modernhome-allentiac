
const templateSource=document.getElementById("producto").innerHTML;
const template= Handlebars.compile(templateSource);
const context = {
	galeria:[
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"cleveland taupe 23x120 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"cleveland taupe 23x120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p2-m2", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"amalia 60x60 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"amalia 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m4", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"muse gris 50X100 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"muse gris 50X100",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"belfort roble 23x120 (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"belfort roble 23x120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"bernes caoba 23X120 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"bernes caoba 23X120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p2-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"cavan calacatta 75x75 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"cavan calacatta 75x75",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"casterly caoba 23x120 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"casterly caoba 23x120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p4", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p4-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"irati beige 33x33 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"iratí beige 33x33",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"cleveland haya 23x120 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"cleveland haya 23x120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
// 		{
// 		  tipo: "p4", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
// 		  medida: "p4-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
// 		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
// 		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
// 		  							// p4-m1=rustico
// 		  nombreImagen:"hojas beige 33x33 (3).jpg", //colocar extencion .jpg .png .svg
// 		  nombreProducto:"hojas beige 33x33",
		  
// 		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
// 		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
// 		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"cleveland roble 23x120 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"cleveland roble 23x120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m2", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"limerick taupe 75x75 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"limerick taupe 75x75",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m3", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"artec snow 60x60 (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"artec snow 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"davos gris 23x120 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"davos gris 23x120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p2-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"linea amur 60x60 (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"línea amur 60x60 - 2 modelos",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m2", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"linea balane 75x75 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"línea balane 75x75 - 2 modelos",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m2", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"linea basic 75x75 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"línea basic 75x75 - 2 modelos",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m3", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"linea espanol roble (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"línea español roble - 2 modelos",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m2", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"linea lakeland 15x90 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"línea lakeland 15x90 - 2 modelos",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p2-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"linea marble brillante 60x60 (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"línea marble brillante 60x60 - 3 modelos",
		 
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m3", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"mitta antracita 60x60 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"mitta antracita 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m3", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"mitta beige 60x60 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"mitta beige 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m3", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"mitta gris 60x60 (6).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"mitta gris 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m4", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"muse hueso 50x100 (2) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"muse hueso 50x100",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p2-m2", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"negro brillante 60x60 (3) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"negro brillante 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p2-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"onix beige 60x60 (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"onix beige 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},{
		  tipo: "p2", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p2-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"onix greige 60x60 (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"onix greige 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p2", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p2-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"onix grey 60x60 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"onix grey 60x60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
// 		{
// 		  tipo: "p4", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
// 		  medida: "p4-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
// 		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
// 		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
// 		  							// p4-m1=rustico
// 		  nombreImagen:"pedrisco oza 33x33 (1).jpg", //colocar extencion .jpg .png .svg
// 		  nombreProducto:"pedrisco oza 33x33",
		  
// 		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
// 		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
// 		},
		{
		  tipo: "p4", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p4-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"posada nature 15x31 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"posada nature 15x31",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
// 		{
// 		  tipo: "p4", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
// 		  medida: "p4-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
// 		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
// 		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
// 		  							// p4-m1=rustico
// 		  nombreImagen:"tala urkiola 33x33 (1).jpg", //colocar extencion .jpg .png .svg
// 		  nombreProducto:"tala urkiola 33x33",
		  
// 		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
// 		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
// 		},

		/*{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"urban light grey 80X80 (3) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"urban light grey",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},*/

		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m2", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"vermont roble 15x90 (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"línea vermont 15x90 - 4 modelos",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},

		{
		  tipo: "p3", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p3-m3", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"viena gris 60x60 (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"viena gris 60X60",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"adobery wengue 23x120 (1) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"adobery wengue 23x120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= simil madera , p2= brillantes , p3= satinados ,p4=rusticos
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-15x90 , p1-m3=sim-mad-otros, p1-m4=.., p1-m5=...
		  							// p2-m1=brill-esmaltado,  p2-m2=brill-pulido
		  							//p3-m1=sat-60x120, p3-m2=sat-75x75, p3-m3=sat-60x60, p3-m4=sat-otros
		  							// p4-m1=rustico
		  nombreImagen:"adobery taupe 23x120 (2) - copia.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"adobery taupe 23x120",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		}



	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













