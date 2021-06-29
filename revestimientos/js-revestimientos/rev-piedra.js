
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
		  nombreImagen:"laja cortada amarilla (5).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"laja cortada amarilla",
		  
		  // paginaCaracteristicas:"nombre del producto",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		{
		  tipo: "p1", // p1= laja cortada , p2= encastrable , p3= muros,p4=..
		  nombreImagen:"laja cortada san juan (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"laja cortada san juan",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p3", // p1= laja cortada , p2= encastrable , p3= muros,p4=..
		  nombreImagen:"muro fino (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"muro fino",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= laja cortada , p2= encastrable , p3= muros,p4=..
		  nombreImagen:"encastrable beige (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"encastrable beige",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= laja cortada , p2= encastrable , p3= muros,p4=..
		  nombreImagen:"encastrable negra (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"encastrable negra",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= laja cortada , p2= encastrable , p3= muros,p4=..
		  nombreImagen:"encastrable verde oxido (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"encastrable verde oxido",
		  
		  medida: "p1-m1", 
		}

	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













