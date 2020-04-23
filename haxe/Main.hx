class FibonacciCalculator {
  public var count:Int = 0;

  var cache:Map<Int, Int> = [0 => 0, 1 => 1];

  public function new() {

  }

  private function fib(number:Int):Int {
    this.count++;
    if (this.cache[number] != null) {
      return this.cache[number];
    }
    var result = fib(number - 1) + fib(number -2);
    this.cache[number] = result;
    return result;
  }

  public function calculate(number:Int):Int {
    return fib(number);
  }
}

class Main {
  static public function main():Void {
    var input:String = null;
    var stdin = Sys.stdin();
    while (true)
    {
        Sys.println("Please enter Fibonacci number:");
        Sys.print(">>> ");
        input = stdin.readLine();
        break;
    }

    var number = Std.parseInt(input);
    var calculator = new FibonacciCalculator();

    trace("Fibonacci number is " + calculator.calculate(number));
    trace("Count " + calculator.count);
  }
}
