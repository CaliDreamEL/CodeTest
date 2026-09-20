public class test6 {
    public static void main(String[] args) {
        double area1=GetArea(5,7);
        double area2=GetArea(7,9);
        if(area1>area2){
            System.out.println("1>2");
        }
        else {
            System.out.println("2>1");
        }
    }
    public static double GetArea(double len,double width){
        double area=len*width;
        return area;
    }
}
