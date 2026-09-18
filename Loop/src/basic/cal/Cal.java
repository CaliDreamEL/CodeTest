package basic.cal;
import java.util.Scanner;
public class Cal {
public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter the first number");
    int number =sc.nextInt();
    int ge=number%10;
    int shi=number/10%10;
    int bai=number/100;
    System.out.println(ge+" "+shi+" "+bai);
}
}
