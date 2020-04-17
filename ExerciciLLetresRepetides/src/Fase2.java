import java.util.*;


/*FASE 2
●	Canvia la taula per una llista (List<Character>)
●	Al bucle, si la lletra és una vocal 
	imprimeix a la consola: ‘VOCAL’. 
	Sinó, imprimeix: ‘CONSONTANT’.
●	Si trobes un numero, mostra per pantalla: 
	‘Els noms de persones no contenen números!’.
*/

public class Fase2 {

	public static void main(String[] args) {
		
 	 /* ANOTACION PARA MI SI QUISIERA ENTRADA DE DATOS USARIA SCANNER

		
		DECLARACION EN EL CASO DE QUERER OBTENER EL NOMBRE POR CONSOLA CON SKANNER
	
		String nombre, cognom1, cognom2;  
		int i=0;
		Scanner entrada = new Scanner(System.in);		

		System.out.println("Introduce tu Nombre: \n");					
		
		//RECOJO VALOR POR CONSOLA CON OBJETO SCANNER entrada
		 * 
		nombre = entrada.next();		

		//BUCLE DONDE RECORRO EL STRING nombre PARA GUARDARLO EN LA LISTA
		
		for(i =0; i<nombre.length(); i++) {			
			nombreEntero.add(nombre.charAt(i));
		}	
		
		//AÑADO UN ESPACIO BLANCO EN LA LISTA 
			 
		nombreEntero.add(' ');			

		//REPITO LO MISMO PARA LOS APELLIDOS
		
		System.out.println("Introduce tu Primer Apellido: \n");
		cognom1 = entrada.next();				
		for(i =0; i<cognom1.length(); i++) {			
			nombreEntero.add(cognom1.charAt(i));
		}		
		nombreEntero.add(' ');
		System.out.println("Introduce tu Segundo Apellido: \n");
		cognom2 = entrada.next();			
		for(i =0; i<cognom2.length(); i++) {			
			nombreEntero.add(cognom2.charAt(i));
		}		
		
		//MUESTRO LA LISTA ENTERA EN  CONSOLA
		 
		System.out.println("EL nombre Introducido es : " + nombreEntero + "\n");				
		*/
		
		
		List <Character> nom = new ArrayList<Character>(); //DECLARO MI OBJETO LISTA
		
		nom.add('E');		//INICIO MI LISTA 
		nom.add('s');
		nom.add('t');
		nom.add('h');
		nom.add('e');
		nom.add('r');
		
	
		for(Character car:nom) {   //RECORRO LISTA POR CADA ELEMENTO Character
			
			if (Character.isDigit(car)) {	
				//COMPRUEBO EL OBJETO char DE LA LISTA NOM PARA SABER SI ES UN NUMERO
				
				System.out.println("Els noms de persones no contenen números!");
				//MUESTRO MSJ DE QUE SE TRATA DE UN NUMERO 
			}
			else {		//SI NO ES UN NUMERO EL CARACTER ENTRO EN EL ESLE
				
					car=Character.toLowerCase(car);  //TRASFORMO EN MINUSCULA PARA COMPARAR LETRAS
			
					if (car =='a'||car=='e'||car=='i'||car=='o'||car=='u') {
						//VERIFICO SI EL Character SE TRATA DE ALGUNA VOCAL
						System.out.print("'VOCAL'");
					}
					else if (car!=' '){
						//VERIFICO SI EL Character NO SE TRATA ESPACIO EN BLANCO
						//SI ENTRO SE TRATARA DE UNA CONSONANTE
						//PUES CUANDO ENTRO AQUI YA VERIFIQUE NO NO FUERA NUMERO NI VOCAL NI ESPACIO BLANCO
						System.out.print("'CONSONANT'");			
					}
			}
		}		
			
	}		
}

