class Hello {
    public static void main(String[] args){
        System.out.println(setBits(7,7));
    }
    
    public static int setBits(int num1, int num2){
        int count = 0;
        while(num1 != 0){
            if((num1&1)==1){
                count++;
            }
            
            num1 = num1 >> 1;
        }
        while(num2 != 0){
            if((num2&1)==1){
                count++;
            } 
            num2 = num2 >> 1;
        }
        return count;
    }
}