import java.util.ArrayList;
import java.util.List;

class test{
    public static void main(String[] args){
        double[] arr = {0, 34, 55, 72, 13, 44};
        double max = arr[0];
        double max2= arr[1];
        for(int i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max2 = max;
                max = arr[i];
            }
            else if(arr[i] > max2){
                max2 = arr[i];
            }
        }
        System.out.print("Max 2 :" + max2);
    }
}