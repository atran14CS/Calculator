public class calculator {
    private int num1;
    private int num2;
    
    public calculator(int x, int y) {
        num1 = x;
        num2 = y;

    }

    public int add(int num1, int num2) {
        return num1 + num2;
    }

    public int subtract(int num1, int num2) {
        return num1 - num2;
    }

    public int mutiply(int num1, int num2) {
        return num1 * num2;
    }

    public int divide() {
        return num1 / num2;
    }

    public static void main(String args[]) {
        System.out.println("hello world!");
        int x = 2;
        int y = 3;
        calculator calculate = new calculator(x, y);
        int value = calculate.add(2, 3);
        System.out.println(value);
    }

}
