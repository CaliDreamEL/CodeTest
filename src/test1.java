import java.util.Scanner;

public class test1  {
    public static void main(String[] args) {
        int count=0;
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2  = sc.nextInt();
        for(int i=num1;i<=num2;i++){
        if(i%3==0&&i%5==0){
            count++;
        }
        }
        System.out.println(count);
    }
}
/*
* 范围怎么判断
* 统计数字数量就自增
*
*
* */
