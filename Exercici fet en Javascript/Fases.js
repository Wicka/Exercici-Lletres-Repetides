
//
// FASE 1
//● Crea una taula (char[]) amb el teu nom on cada posició correspongui a una lletra.
//● Fes un bucle que recorri aquesta taula i mostri per consola cadascuna de les lletres.
// 

function Fase1() {

	
    let nom = new Array(6);
    let iCont=nom.length;

	nom [0]='E';
	nom [1]='s';
	nom [2]='t';
	nom [3]='h';
	nom [4]='e';
	nom [5]='r';
    
	document.getElementById("resultado").innerHTML="";	//LIMPIO PANTALLA EN EL DOC HTML

    for ( let i=0; i<iCont; i++) {		  //BUCLE PARA RECORRER ARRAY BIDIMENSIONAL
      
        document.getElementById("resultado").innerHTML+=nom [i] +"<br>";
	}
}

//
// FASE 2
//●	Canvia la taula per una llista (List<Character>)
//●	Al bucle, si la lletra és una vocal 
//	imprimeix a la consola: ‘VOCAL’. 
//	Sinó, imprimeix: ‘CONSONTANT’.
//●	Si trobes un numero, mostra per pantalla: 
//	‘Els noms de persones no contenen números!’.
//



function Fase2() {

		let  nom=['E','2','t','h','e','r']; //DECLARO  LISTA E INICIO MI LISTA 
	
		document.getElementById("resultado").innerHTML="";	//LIMPIO PANTALLA EN EL DOC HTML
	
        for(i=0; i<nom.length; i++ ) {   //RECORRO LISTA POR CADA ELEMENTO Character
            
            let car=nom[i];

	    if (!isNaN(car)) {	
				//COMPRUEBO EL OBJETO char DE LA LISTA NOM PARA SABER SI ES UN NUMERO
                
                document.getElementById("resultado").innerHTML+="<br>" + "Los nombres de personas no contienen numeros";
                //MUESTRO MSJ DE QUE SE TRATA DE UN NUMERO 
			}
			else {		//SI NO ES UN NUMERO EL CARACTER ENTRO EN EL ESLE
				
				car=car.toLowerCase();  //TRASFORMO EN MINUSCULA PARA COMPARAR LETRAS
			
				if (car =='a'||car=='e'||car=='i'||car=='o'||car=='u') {    
					//VERIFICO SI EL Character SE TRATA DE ALGUNA VOCAL
                    document.getElementById("resultado").innerHTML+="<br>" + "VOCAL";
	            }
				else if (car!=' '){
			    	//VERIFICO SI EL Character NO SE TRATA ESPACIO EN BLANCO
			    	//SI ENTRO SE TRATARA DE UNA CONSONANTE
			    	//PUES CUANDO ENTRO AQUI YA VERIFIQUE NO NO FUERA NUMERO NI VOCAL NI ESPACIO BLANCO
                    document.getElementById("resultado").innerHTML+="<br>" + "CONSONANT";
				}
			}
		}	
}		

//
// FASE 3
//●	Emmagatzemar en un Map tant les lletres de la llista 
//   com el nombre de vegades que apareixen
//



function Fase3() {

	
		//DECLARACION ARRAYLIST		
        let nom= ['E','s','t','h','e','r'];
        let cognom1=['M','e','s','a'];
        let cognom2=['P','a','r','e','j','a']; 
        //DECLARACION DE UN ARRAY DE ARRAYS		
  //      let nombreEntero=[nom,cognom1,cognom2];
		
		let i,iCont=0;
		var letras;
		var nombre="";
		var cant;
		var Mapa = new Map();

		document.getElementById("resultado").innerHTML="";	//LIMPIO PANTALLA EN EL DOC HTML

		for (i=0; i< nom.length; i++){			//RECORRO ARRAY nom Y GUARDO EN STRING nombre
			nombre += nom[i];        
		}
		for (i=0; i< cognom1.length; i++){	    //RECORRO ARRAY cognom1 Y GUARDO CONCATENANDO EN STRING nombre
			nombre += cognom1[i];        
		}
		for (i=0; i< cognom2.length; i++){	    //RECORRO ARRAY cognom2 Y GUARDO CONCATENANDO EN STRING nombre
			nombre += cognom2[i];        
		}

		nombre=nombre.toLowerCase();		//UNA VEZ COMPLETO EL STRING nombre LO PASO A MINUSCULAS 
		//cant=0;

		for (i=0; i<nombre.length-1; i++){		//RECORRO EL STRING nombre 
			
			letras=nombre[i];					//GUARDO EL CARACTER DEL STRING letras QUE USARE COMO CLAVE EN EL MAPA
		
			cant=Mapa.get(letras);		//GUARDO EL VALOR DEL MAPA DE LA CLAVE letras QUE CONTIENE EL CARACTER DEL STRING nombre[i] EN POSICIO i EN VAR cant
			
			if(isNaN(cant)){	//SI cant NO GUARDA UN NUMERO ES QUE NO EXISTE LA CLAVE letras EN EL MAPA Y LO INICIO CON cant=0
				cant=0;
			}
			cant=cant+1;		//SI NO ENTRO EN EL IF ANTERIOR QUIERE DECIR QUE HABIA UN VALOR POR LO QUE LE SUMO UNO MAS PUES HAY OTRO CARACTER IGUAL AL QUE DE LA KEY
			Mapa.set(letras,cant);	//GUARDO EL VALOR cant ACTUALIZADO CON SU SUMA
		}		         

		for (var [letras,cant] of Mapa){		//RECORRO EL MAPA PARA MOSTRAR EN PANTALLA CADA KEY CON SU VALOR

			document.getElementById("resultado").innerHTML+="<br>" + "Letra : "+ letras+ " se Repite : "+cant;	
		}
     
}


//FASE 4
//●	Crea una altra llista amb el teu cognom on cada posició 
//	correspongui a una lletra.
//●	Fusiona les dues llistes en una sola. 
//	A més, afegeix una posició amb un espai buit 
//	entre la primera i la segona. És a dir, 
//	partim de la llista name i surname i 
//	al acabar l’execució només tindrem una que es dirà fullName.
//	FullName: [‘N’, ‘A’, ‘M’, ‘E’, ‘ ‘, ‘S’, ‘U’, ‘R‘, ‘N’, ‘A’, ‘M’, ‘E’]
//


function Fase4() {

		
		//DECLARO TES LISTAS DIFERENTES
		
        let nom=[], cognom=[], fullname=[];
		
		document.getElementById("resultado").innerHTML="";	//LIMPIO PANTALLA EN EL DOC HTML

		nom.push('E');		//RELLENO LA LISTA CON EL NOMBRE
		nom.push('s');
		nom.push('t');
		nom.push('h');
		nom.push('e');
		nom.push('r');
				
		cognom.push('M');	//RELLENOS OTRA LISTA CON EL APELLIDO
		cognom.push('e');
		cognom.push('s');
		cognom.push('a');
        
        let car,i,iCont;
        iCont=nom.length;

		for (i=0; i<iCont; i++) {			//POR CADA ELEMENTO DE LA LISTA NOM REPETIRE EL BUCLE
           
            car=nom[i];
            car=car.toUpperCase(); //PASO A MAYUSCULAS LOS ELEMENTOS 
			fullname.push(car);				//AÑADO A LA LISTA FINAL LOS ELEMENTOS DE LA LISTA NOM			
		}
		
		fullname.push(' ');			//AÑADO UN ESPACIO A LA LISTA FINAL
        
        iCont=cognom.length;

		for (i=0; i<iCont; i++) {		//RECORRO AHORA LA OTRA LISTA COGNOM
            car=cognom[i];
            car=car.toUpperCase();	//IDEM A LO ANTERIOR PASO A MAYUSCULAS
			fullname.push(car);				//IDEM AÑADO A LA LISTA FINAL
		}
		
        document.getElementById("resultado").innerHTML+="<br>" + fullname;
        //MUESTRO EN CONSOLA LA LISTA FINAL
	
	
}

