public class test2 {
    public static void main(String[] args) {
        double mountain= 8844430;
        double paper= 0.1;
        int count=0;
        while(mountain>paper){
            paper=paper*2;
            count++;
        }
        System.out.print(count);
    }
}
