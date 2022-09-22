public class HolaMundo {
    public static void main(String [] args){
        int[] numeros = {3,4,78,3,2,98};
        seleccion(numeros);
    }

    public static void seleccion(int[] arr) {
        int pivote  = 0;
        int temp = 0;
        int aux = 0;
        int min = 0;

        for(pivote = 0; pivote < numeros.length(); pivote++) {
            min = pivote;
            for(aux=pivote; aux< numeros.length(); aux++) {
                if(arr[aux]<arr[min]){
                    min = aux;
                }
            }
            temp = arr[pivote];
            arr[pivote] = arr[min];
            arr[min] = temp;
        }
    }
    }

