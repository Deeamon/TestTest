module.exports = function getZerosCount(number, base) {
  
let s = [];
// console.log('vh', s);
s[0] = "+";
s[1] = 0;
for(let i = 2; i <= number; i++){
  s[i] = 1; 
}

let w = [];
for(let i = 0; i <= number; i++){
  w[i] = [];
  for (let j = 0; j <= number; j++){
    w[i][j] = 0;
  }
  
}
// console.log("vh!", w);
for(let i = 2; i <= number; i++){

  // console.log('vhod ', s);
  for ( let k = i; k <= number; k++){
     
    if (s[k] == 1) { 
      // w[k][k] = 1;    
       for ( let l =  k; l <= number; l+=k){
         s[l] = 0;
        //  console.log('s[l:] ', l);
         let t = l;
         let acc = 0;
         while( t % k == 0){
           acc++;
           t = t/k;
          //  console.log("t: ", t);
         }
        //  console.log("acc: ==========> ", acc);
         w[k][l] = acc;
       }
      //  console.log('s: ', s);
      //  console.log('w: ', w);
 
     }
   }
} 

// console.log("ends: ",s);

let prostChicla = [];
prostChicla[0] = 0;
let k = 0;
for ( let i = 1; i <= number; i++){
  if(s[i] == 1){ 
    prostChicla[k] = i; 
    k++;
  }
  else{continue;}
}
// console.log("ends [prost]: ",prostChicla);

let st = [];
for (let i = 0; i <= number; i++){
  st[i] = w[i].reduce( (acc, item) => acc+item);
  // console.log("st:" + i + "===>" + st[i]);

}
// console.log(st);


function getSimpleNum(base, arr2){
  let a = 2;
  while( a <= base){
    if( base % a == 0){
      if ( a != base){
        arr2.push(a);
        getSimpleNum(base/a, arr2); 
        return arr2;
      }else{ arr2.push(a);}
      
    }
    
    a++;
  }
  return arr2;
}

let arr = getSimpleNum(base,[]);
let arr2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(let i = 0;i<arr.length;i++) {
  let simpleNumber = arr[i];
  arr2[simpleNumber]++;
}
console.log(arr2);
let x=1;
for(let i=0;i<arr2.length;i++){
  if(arr2[i]==1){
    x = st[i];
  }
}
// console.log(x);
return x;

}

