import java.util.Scanner;

public class test5 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        double a=sc.nextDouble();
        area(a);
    }
    public  static void area(double a)
        {
        double b=a*a*3.1415;
        System.out.println(b);
        }
}
