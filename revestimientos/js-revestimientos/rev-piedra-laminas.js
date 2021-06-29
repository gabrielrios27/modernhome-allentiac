
const templateSource=document.getElementById("producto").innerHTML;
const template= Handlebars.compile(templateSource);
const context = {
	galeria:[
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  medida: "p1-m1", //p1-m1= sim-mad-23x120 , p1-m2=sim-mad-24x95 , p1-m3=sim-mad-15x90, p1-m4=sim-mad-15x60, p1-m5=sim-mad-otros
		  							//p2-m1=sat-60x120, p2-m2=sat-60x60, p2-m3=sat-58x58, p2-m4=sat-otros
		  							// p3-m1=brill-pulido,  p3-m2=brill-esmaltado 
		  							// p4-m1=rustico
		  nombreImagen:"arenisca 7.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"arenisca",
		  
		  // paginaCaracteristicas:"vidrio brillante rojo",  //nombre de pagina, sin .html
		  // alt:"vidrio brillante rojo", //descripcion de la imagen
		  
		},
		
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"oro7 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"oro",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"fuego  (4).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"fuego",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"gris evora44.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"gris evora",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"argenta logo.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"argenta",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"negro profundo7 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"negro profundo",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"crepusculo  (5).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"crepusculo",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"ARENISCA TRASLUCIDA -rr2.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"arenisca traslucida",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"BLANCO ALBA  022.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"blanco alba",
		  
		  medida: "p1-m1", 
		},
		
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"CALIFORNIA 2.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"california",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"metal44.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"metal",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"negro445.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"negro",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"OXIDO 1-1.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"oxido",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"PLATTA 1.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"plata",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"rosea466.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"rosea",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p1", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"VERDE MAR 1.jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"verde mar",
		  
		  medida: "p1-m1", 
		},
		{
		  tipo: "p2", // p1= clasica , p2= traslucida, p3=marmol ,p4=---
		  nombreImagen:"verde mar traslucida1 (1).jpg", //colocar extencion .jpg .png .svg
		  nombreProducto:"verde mar traslucida",
		  
		  medida: "p1-m1", 
		}
	
	

	]
  
};


const compiledHtml=template(context);
document.getElementById("gallery").innerHTML=compiledHtml;













