
import java.util.*;

/*
 * FASE 3
●	Emmagatzemar en un Map tant les lletres de la llista 
   com el nombre de vegades que apareixen
*/
public class Fase3 {

	public static void main(String[] args) {
	
		//DECLARACION DE UNA ARRAYLIST		
		List <Character> nombreEntero = new ArrayList<Character>();
		
		//DECLARACION DE UN MAPA
		HashMap<Character,Integer > Letras = new HashMap<Character, Integer>();
		
		
		int cuenta=0;
		nombreEntero.add('E');		
		nombreEntero.add('s');
		nombreEntero.add('t');
		nombreEntero.add('h');
		nombreEntero.add('e');
		nombreEntero.add('r');
		nombreEntero.add(' ');
		nombreEntero.add('M');
		nombreEntero.add('e');
		nombreEntero.add('s');
		nombreEntero.add('a');
		nombreEntero.add(' ');
		nombreEntero.add('P');
		nombreEntero.add('a');
		nombreEntero.add('r');
		nombreEntero.add('e');
		nombreEntero.add('j');	
		nombreEntero.add('a');
	
		for (int i = 0; i < nombreEntero.size(); i++) {				//RECORRO LO LARGO DE LA LISTA (SIZE)
			
			char car = Character.toLowerCase(nombreEntero.get(i)); // PASO LOS EMENTOS TODOS A MINUSCULA PARA IGUALAR LETRAS
			
			System.out.print(car);
		
			if ( car!=' ') { 					//SI EL ELEMENTO ES UN ESPACIO NO DEBO CONTARLO
				
				if(Letras.containsKey(car) ) {  //SI LA PRIMARYKEY CONTIENE EL ELEMENTO QUE LE PASO EN car ENTRA
		
					cuenta=Letras.get(car);  //GUARDO EN CUENTA EL VALOR QUE CORRESPONDE A LA KEY QUE LE PASO POR VARIABLE car
					cuenta ++;				 //INCREMENTO EN UNO MAS CUENTA
					Letras.put(car, cuenta); //SOBREESCRIBO EL VALOR DE LA KEY car CON EL NUEO VALOR SUMADO 	
					
				}else {
					Letras.put(car, 1);			//SI LA KEY NO SE REPITE SIMPLEMENTE LE PONGO VALOR 1 PUES ES LA PRIMERA VEZ QUE ENCUENTO ESA LETRA	
				}		
			}
		}
		
		System.out.println();
		System.out.println(Letras);				//IMPRIMO MAPA TAL CUAL...SALE EN LLAVES
		System.out.println(Letras.entrySet());	 // IMPRIMO MAPA Y SALE ENTRE CORCHETES --- A MIRARMELO MEJOR !!
		
	}

}
