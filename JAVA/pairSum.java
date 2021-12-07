import java.util.*;

class HelloWorld {
    public static void main(String[] args) {
              int[] array = {1,2,3,4,5};
        int size = array.length;
        int targetSum = 5;
    pairSum(array, size, targetSum);
    }
    
    public static void pairSum(int[] arr, int size, int targetSum){

        for(int i = 0; i< size; i++){
            for(int j = i + 1; j < size; j++){
                if(arr[i] + arr[j] == targetSum){
                   System.out.println("(" + arr[i] + "," + arr[j] + ")" );
                }
            }
        }
    }
}