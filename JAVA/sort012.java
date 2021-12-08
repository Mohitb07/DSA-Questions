class HelloWorld {
    public static void main(String[] args) {
         int[] array = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
        int[] result = sortZeroOnesTwos(array);
        
        for(int i = 0; i < result.length; i++){
            System.out.println(result[i]);
        }
    }
       public static int[] sortZeroOnesTwos(int[] arr){
        int start = 0;
        int mid = 0;
        int end = arr.length - 1;

        while(mid <= end){
            if(arr[mid] == 0){
                int temp = arr[mid];
                arr[mid] = arr[start];
                arr[start] = temp;
                mid++;
                start++;
            }else if(arr[mid] == 1){
                mid++;
            }else {
                int temp = arr[mid];
                arr[mid] = arr[end];
                arr[end] = temp;
                end--;
            }
        }
        return arr;
    }
}