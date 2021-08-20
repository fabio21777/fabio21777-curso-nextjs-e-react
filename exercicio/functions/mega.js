function mega(qtd = 6, numbers = []){
    if (qtd < 6 && qtd > 60){
       throw "invalidation input "
   }
   if (numbers.length === qtd){
       return (numbers.sort((n1,n2) =>n1-n2))
   }

   const randomNumber = parseInt(Math.random() * 60) + 1
   if(!numbers.includes(randomNumber)){
       return mega(qtd,[...numbers,randomNumber])
   }
   else{
       mega(qtd, numbers)
   }

} 

console.log(mega(15))