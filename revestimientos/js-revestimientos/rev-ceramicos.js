
const templateSource=document.getElementById("producto").innerHTML;
const template= Handlebars.compile(templateSource);
const context = {
	galeria:[
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-24x95 , p1-m3=sim-mad-15x90, p1-m4=sim-mad-15x60, p1-m5=sim-mad-otros
		  							//p2-m1=sat-60x120, p2-m2=sat-60x60, p2-m3=sat-58x58, p2-m4=sat-otros
		  							// p3-m1=brill-pulido,  p3-m2=brill-esmaltado 
		  							// p4-m1=rustico
		  nombreImagen:"orion clasic (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"orion clasic",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"fenix chocolate (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"fenix chocolate",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"stella blanco-negro (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"stella blanco-negro",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"cross line azul (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"cross line azul",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"miramar blanco brillante (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"miramar blanco brillante",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"subway negro mate (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"subway negro mate",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"subway blanco brillo (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"subway blanco brillo",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"subway rojo brillo (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"subway rojo brillo",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"subway azul brillante (3).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"subway azul brillante",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"subway liso blanco (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"subway liso blanco",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"pontevedra (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"pontevedra",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"cartagena (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"cartagena",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"dalvick (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"dalvick",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"friso (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"friso",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"muralla gris (2).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"muralla gris",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"muralla ocre (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"muralla ocre",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"muralla mix (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"muralla mix",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"jamaica (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"jamaica",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"ribasso nature (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"ribasso nature",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"ribasso mix (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"ribasso mix",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"ribasso gris (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"ribasso gris",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= brillante , p2= mate , p3= rustico ,p4=..
		  nombreImagen:"tabarca (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"tabarca",
		  
		  medida: "p1-m1", 
		}


	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













