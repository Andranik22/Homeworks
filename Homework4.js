# Homeworks 
Xndir 1.
function newArr(arr){
   let result1 = [];
   let result2 = [];
   let result = [result1, result2];
  for (let i = 0; i < arr.length; i++){
   if (arr[i]%2 == 0) {
    result1.push(arr[i])
    } else { (arr[i]%2==1)
     result2.push(arr[i]) 
    }
   }
 return result
}
 
 Xndir 3.
function replaceCharacter(str , letter) {
 for (let i = 0; i < str.length; i++){
  str= str.replace(letter,"")
  }
   return str 
 }

 Xndir 4.
function newArr(arr){
  let result = [];
    for ( let i = 0; i < arr.length; i++ ){
     let isIn=false;
     for ( let j = i+1; j < arr.length; j++ ){  
   if ( arr[i]===arr[j] ) {
      isIn=true;
       break;
    }
  }
  if (!isIn) {
      result.push(arr[i]);
     } 
    }
return result;
}

 Xndir 5.
function replaceLetter(str , L1 , L2 ){
  for ( let i = 0; i < str.length; i++ ){
   str= str.replace(L1, L2)
  }
   return str
}
