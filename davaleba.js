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
