package Atividade_Alessandro.back_end;

import java.util.ArrayList;
import java.util.Collections;

public class ArraysDinamicos {
    public static void main(String[] args) {
        //Criando um array dinâmico
        ArrayList<Integer> numeros = new ArrayList<>();

        numeros.add(5);
        numeros.add(2);
        numeros.add(9);
        numeros.add(7);
        numeros.add(1);

        //Usando um loop for ou foreach para imprimir o array
        System.out.println("Elementos do array numeros:");
        for (Integer item : numeros) {
            System.out.println(item);
        }

        //ordenando o array usando o método sort()
        Collections.sort(numeros);
        System.out.println("Ordenando os elementos do array números: "+numeros);

        //buscando o número 9 no array
        int numero = Collections.binarySearch(numeros, 9);
        System.out.println("Número 9 encontrado no indice: "+numero+ ", Considerando começar pelo indice 0");

        //criando um novo Array chamado "maiores" e adicionando os 3 maiores números do array numeros
        ArrayList<Integer> maiores = new ArrayList<>(numeros.subList(numeros.size() - 3, numeros.size()));

        System.out.println("Números do array maiores:");
        for (Integer item : maiores) {
            System.out.println(item);
        }

        boolean iguais = numeros.equals(maiores);
        System.out.println("Os arrays são iguais? " +iguais);

        Collections.sort(numeros, Collections.reverseOrder());
        System.out.println("Array numeros em ordem decrescente:" +numeros);


        
    }


}
