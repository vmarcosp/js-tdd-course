const FizzBuzz = (number) => {
  if (number === 0) return number;
  if (number % 5 === 0 && number % 3 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number;
};

export default FizzBuzz;
