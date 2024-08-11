let sum = document.querySelector(".sum");
let num = document.querySelector(".num");
let sub = document.querySelector(".sub");
let n = 1;

// sum counter
sum.addEventListener("click",function(){
   n++;
   num.textContent = "0" + n;

   if(n > 9){
      num.textContent = n;
   }
})
// subtraction counter
sub.addEventListener("click",function(){
   n--;
   num.textContent = n;

   if(n <= 9){
      num.textContent = "0" + n
   }

   if(n <= 1 ){
      n = 1
      num.textContent = "0" + n;
   }
})