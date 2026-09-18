package basic.cal;
import java.util.Scanner;
public class relationshippractice {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("请输入你的时髦度");
        int Myfashion=sc.nextInt();
        System.out.println("请输入女孩的时髦度");
        int Girlfashion=sc.nextInt();
        boolean result=Myfashion>Girlfashion;
        System.out.println(result);
    }
}
