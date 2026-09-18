import java.util.Scanner;

public class test3 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int original=a;/*保留原始数据，方便最后的对比*/
        int ge=0;
        int sum=0;
        while(a!=0){
            ge=a%10;/*获取个位上的数字*/
            a=a/10;/*去掉个位，保留前面的数字*/
            sum=sum*10+ge;/*拼凑回文数*/
        }
        System.out.println(sum);
        if(sum==original) {
            System.out.println(true);}
            else{ System.out.println(false);}


        }
    }

