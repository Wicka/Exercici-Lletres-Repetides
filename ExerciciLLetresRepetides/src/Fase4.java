import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/*FASE 4
●	Crea una altra llista amb el teu cognom on cada posició 
	correspongui a una lletra.

●	Fusiona les dues llistes en una sola. 
	A més, afegeix una posició amb un espai buit 
	entre la primera i la segona. És a dir, 
	partim de la llista name i surname i 
	al acabar l’execució només tindrem una que es dirà fullName.

	FullName: [‘N’, ‘A’, ‘M’, ‘E’, ‘ ‘, ‘S’, ‘U’, ‘R‘, ‘N’, ‘A’, ‘M’, ‘E’]
*/

public class Fase4 {

	public static void main(String[] args) {
		
		//DECLARO TES LISTAS DIFERENTES
		List <Character> nom = new ArrayList<Character>();
		List <Character> cognom = new ArrayList<Character>();
		List <Character> fullname = new ArrayList<Character>();
	
		
		nom.add('E');		//RELLENO LA LISTA CON EL NOMBRE
		nom.add('s');
		nom.add('t');
		nom.add('h');
		nom.add('e');
		nom.add('r');
				
		cognom.add('M');	//RELLENOS OTRA LISTA CON EL APELLIDO
		cognom.add('e');
		cognom.add('s');
		cognom.add('a');
		
		for (Character car : nom) {			//POR CADA OBJETO Character DE LS LISTA NOM REPETIRE EL BUCLE
			car=Character.toUpperCase(car); //PASO A MAYUSCULAS LOS Characters 
			fullname.add(car);				//AÑADO A LA LISTA FINAL LOS Characters DE LA LISTA NOM			
		}
		
		fullname.add(' ');			//AÑADO UN ESPACIO A LA LISTA FINAL
		
		for (Character car : cognom) {		//RECORRO AHORA LA OTRA LISTA COGNOM
			car=Character.toUpperCase(car);	//IDEM A LO ANTERIOR PASO A MAYUSCULAS
			fullname.add(car);				//IDEM AÑADO A LA LISTA FINAL
		}
		
		System.out.println(fullname);	//MUESTRO EN CONSOLA LA LISTA FINAL
	
	}
}
