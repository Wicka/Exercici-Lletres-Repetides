
/*
 * FASE 1
● Crea una taula (char[]) amb el teu nom on cada posició correspongui a una lletra.
● Fes un bucle que recorri aquesta taula i mostri per consola cadascuna de les lletres.
 */

public class Fase1 {

	public static void main(String[] args) {
	
		char [][] nom = {				    ///DECLARO E INICIO MAPA	
				{'E','s','t','h','e','r',' '},
				{'M','e','s','a',' '},
				{'P','a','r','e','j','a'}
				};
		/*	
		char [][] nom = new char[1][5];  //OTRA MANERA DECLARAR E INICIAR MAPA
		
		nom [0][0]='E';
		nom [0][1]='s';
		nom [0][2]='t';
		nom [0][3]='e';
		nom [0][4]='r';
*/		
		
		System.out.println("Recorro la Tabla por caracter ");
		
		for ( int i=0; i<nom.length; i++) {		  //BUCLE PARA RECORRER LINEAS
			
			for (int j=0; j<nom[i].length; j++) { //BUCLE PARA RECORRER COLUMNAS
				
				System.out.print("'" + nom[i][j]); //MUESTRO CONSOLA CADA VALOR QUE HAY EN EL MAPA [i][J]
			}									   //CONCATENO ' PARA MOSTRAR LOS CARACTERES		
		}

			System.out.println("");     //SALTO LINEA 
	
			System.out.println("Recorro la Tabla por lineas");
			
		for (char[] elemento: nom) {		//BUCLE FOR EACH ARRAY EN LA TABLA 
			System.out.println(elemento);	//POR LO QUE MOSTRARA CADA FILA DE LA TABLA ENTERA
		}									//NO CADA ELEMENTO
	}
}



