// FIND THE NTH FIBONACCI NUMBER IN A FIBONACCI SEQUENCE

class Hello {
    public static void main(String[] args){
        System.out.print(fibo(9));
    }

    public static int fibo(int n){
        if(n <= 1){
            return n;
        }
        return fibo(n - 1) + fibo(n - 2);
    }
}