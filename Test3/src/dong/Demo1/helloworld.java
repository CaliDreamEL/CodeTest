
package dong.Demo1;
import java.util.Scanner;
public class helloworld {
    static void main() {
        String name ="wangdong";
        System.out.println(name);
        int age = 18;
        System.out.println(age);
        char gender = '男';
        System.out.println(gender);
        double height = 180.3;
        System.out.println(height);
        boolean flag = true;
        System.out.println(flag);
        System.out.println("请输入第一个数字");
        Scanner data = new Scanner(System.in);
        int n1 = data.nextInt();
        System.out.println("请输入第二个数字");
        int n2 = data.nextInt();
        System.out.println(n1+n2);

    }
}
