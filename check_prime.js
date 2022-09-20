function checkPrimeNumber(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  }
  return false;
}
let res=checkPrimeNumber(31);

if(res==true){
    console.log("Prime");
}else{
    console.log("Not Prime");
}
