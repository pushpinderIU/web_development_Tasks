
//As to prime numbers are those which can divisble by 1 or then own number.
// first we declare a function and give it a parameter named as NUMBER
function prime_number(number) {

    // first we check if the number is greater than 1, because prime number are greater than 1
    if (number >= 2) {

         // Loop from 2 to the square root of the number
        for (let i = 2; i <= Math.sqrt(number); i++) {
            // we only need to check upto the square root of the number 
           //becasue if n is divisible by a number greater than its square root
           // then the number should also divisble by smaller number than it.
  
    
           // here we are checking if the number is divisble by 2 to upto its number's square root than its not a prime number
           if (number % i === 0) {
              // here i'm consoling the statement that number isn't prime and returning false.
              console.log("The given number isn't a prime number");
              return false;
           }
        }
    }

    
    else{
        //as we checked above that number should be greater than 2, and here its returning false ,
        //if the number is 1 which is not prime number
        return false;
    }

    //if the given number is not divisble , then it is a prime number
    //here im consoling that the number is prime and returning true
    console.log("The given number is a prime number");
    return true;
}

// giving the number to check if it's the prime number or not.
const num = 88;
//calling the function and providing the number as a parameter.
prime_number(num)
