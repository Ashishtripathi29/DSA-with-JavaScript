// this function is permutaion that means all the posible substring of string 
// by this fuction we print all the possible substring of string 

public class permutaion {
     static void printPerm(String str,String permutaion){

        if(str.length()==0) {
            System.out.println(permutaion); 
            return;
        }
        for(int i=0;i<str.length();i++){
            char newChar=str.charAt(i);
            String newSubString=str.substring(0, i)+str.substring(i+1);
            printPerm(newSubString, permutaion+newChar);
        }
     }
    public static void main(String args[]) {
        printPerm("abc","");
    }
}
