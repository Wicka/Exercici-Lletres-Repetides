
/*
 * FASE 1
● Crea una taula (char[]) amb el teu nom on cada posició correspongui a una lletra.
● Fes un bucle que recorri aquesta taula i mostri per consola cadascuna de les lletres.
 */

function Fase1() {

	
        var nom = new Array(6);
        var nomSenser = new Array(3);

		nom [0]='E';
		nom [1]='s';
		nom [2]='t';
		nom [3]='h';
		nom [4]='e';
		nom [5]='r';
    
        nomSenser[0]=nom;
       
        for ( let i=0; i<nomSenser.length; i++) {		  //BUCLE PARA RECORRER ARRAY BIDIMENSIONAL
			
			for (let j=0; j<nomSenser[i].length; j++) {   //BUCLE PARA RECORRER EL ARRAY GUARDADO EN POSICION i DEL ARRAY BIDIMENSIONAL
            
                document.getElementById("resultado").innerHTML+=nomSenser[i][j] +"<br>";
			}							
		}
}

/*
*FASE 2
●	Canvia la taula per una llista (List<Character>)
●	Al bucle, si la lletra és una vocal 
	imprimeix a la consola: ‘VOCAL’. 
	Sinó, imprimeix: ‘CONSONTANT’.
●	Si trobes un numero, mostra per pantalla: 
	‘Els noms de persones no contenen números!’.
*/

function Fase2() {

		var nom=['E','2','t','h','e','r']; //DECLARO  LISTA E INICIO MI LISTA 
		
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




