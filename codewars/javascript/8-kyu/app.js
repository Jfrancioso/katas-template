//write a function that turns a positive number into a negative number
//function makeNegative(num) {
   // return -Math.abs(num);
      
  //  }

//

//find the smallest integer in an array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = Infinity;
      for (let i = 0; i < args.length; i++){
        if (args[i] < min){
          min = args[i]
        }
      }
      return min;
    }
  }