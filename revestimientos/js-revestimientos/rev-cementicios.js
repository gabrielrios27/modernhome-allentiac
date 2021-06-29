
const templateSource=document.getElementById("producto").innerHTML;
const template= Handlebars.compile(templateSource);
const context = {
	galeria:[
		{
		  tipo: "p1", // p1= laja cortada , p2= encastrable , p3= muros ,p4=..
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-24x95 , p1-m3=sim-mad-15x90, p1-m4=sim-mad-15x60, p1-m5=sim-mad-otros
		  							//p2-m1=sat-60x120, p2-m2=sat-60x60, p2-m3=sat-58x58, p2-m4=sat-otros
		  							// p3-m1=brill-pulido,  p3-m2=brill-esmaltado 
		  							// p4-m1=rustico
		  nombreImagen:"pirka andina (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"pirka andina",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= , p2=  , p3= ,p4=..
		  nombreImagen:"pirka atermica (99).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"pirka atermica",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= , p2=  , p3= ,p4=..
		  nombreImagen:"white stone (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"white stone",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= , p2=  , p3= ,p4=..
		  nombreImagen:"kubic (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"kubic",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= , p2=  , p3= ,p4=..
		  nombreImagen:"kubilic blanco (5).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"kubilic blanco",
		  
		  medida: "p1-m1", 
		}
		

	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













