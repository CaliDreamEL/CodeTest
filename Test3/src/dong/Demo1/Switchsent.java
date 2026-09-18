package dong.Demo1;
import java.util.Scanner;


public class Switchsent {
    public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    System.out.println("输入星期数");
    int week=sc.nextInt();
    switch(week){
        case 1:
            System.out.println("jogging");
            break;
        case 2:
            System.out.println("swiming");
            break;
        case 3:
            System.out.println("running");
            break;
        case 4:
            System.out.println("climbing");
            break;
        case 5:
            System.out.println("boxing");
            break;
        case 6:
            System.out.println("eating");
            break;
        case 7:
            System.out.println("dating");
        break;
            default:
    System.out.println("NOTHING");
    break;
    }
    }
}
