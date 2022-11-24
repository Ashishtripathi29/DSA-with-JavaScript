public class recusion1{

    static void fib(int first , int second ,int num){
              if(num==0){
                return;
              }
            int c=first+second;
           
            System.out.println(c);
            fib(second,c,num-1);

    }
    static int printNtermOfSqure(int x,int n){
            if(n==1){
                return 5;
            }
      return x* printNtermOfSqure(x, n-1);
      
    }
          public static void main(String args[]) {
            int a=0;
            int b=1;
            System.out.println(a);
            System.out.println(b);
            int n=20;
            fib(a,b,n-2);
            int res=printNtermOfSqure(5, 5);
            System.out.println(res);

          }
}