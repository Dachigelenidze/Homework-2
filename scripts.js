let obj = {
    berlin: 'germany',
   Tbilisi: 'georgia',
   Kiev: 'ukraine'
   }

   for (let key in obj) {
    if (key == 'Tbilisi') {
        console.log(key +  " " +  'is' + " " + obj.Tbilisi)  
    }
}



        
    
        
მეორე
   for ( let i = 5; i < 100; i++ ) {
    console.log (i);
  }

მესამე
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for(let c = 0; c < array1.length; c++){

if( array1[c] > 1 && array1[c] < 10 )
    console.log(c);
}

მეოთხე

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let a of array2) 
        if (a == 5) {
            console.log('არის') 
        }
        


მეხუთე

let array3= [1, 2, 3, 4, 5]
let sum = 0;
for (let d = 0; d < array3.length; d++) {
    
    sum += array3[d]
    // sum= sum+ array3[d]
}
console.log(sum);




მეექვსე
    let array4 = [1, 2, 3, 7, 6, 9 ];
let sum1 = 0;
for (let number of array4) {
    sum1 += number;
}
average = sum1 / array4.length;
console.log(average);

მეშვიდე

let userName = 27
switch(userName) {
        case 5:
            console.log('რიცხვი არის 5');
        break;
        case 10:
            console.log('რიცხვი არის 10');
        break;
        default:
            console.log('სხვა რიცხვი');
    }


მერვე

let numbers = [1, 2, 3, 7, 6, 9];

for (let item of numbers) {
    if (item == 7) {
        continue
    }
    console.log(item);
}