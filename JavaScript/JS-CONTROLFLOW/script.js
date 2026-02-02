//kondisional statement

//If-esle
let nilai= 100;
if(nilai < 0 || nilai > 100){
    console.log('ERRORR')
}else if(nilai >= 90){
    console.log('Kamu mendapatkan nilai A')
}else if(nilai >= 80){
    console.log('Kamu mendapatkan nilai B')
}else if(nilai >= 70){
    console.log('Kamu mendapatkan nilai C')
}else{
    console.log('Kamu mendapatkan nilai D')
}

//Switch-case
let s = 4; 
switch(s){
    case 0:
        console.log('Apel');
        break;
    case 1:
        console.log('Mangga')
        break;
    case 2:
        console.log('Stroberry')
        break;
    case 3:
        console.log('Cerry')
        break;
    case 4:
        console.log('Manggis')
        break;
    case 5:
        console.log('Melon')
        break;
    case 6:
        console.log('Nanas')
        break;
}

//Loop for
for(let i=1; i<=6; i++){
    console.log('Angka ' + i)
}

//Loop for in
const animal = {nama: "jeje", jenis: "kucing persia", warna: "Oyen"};
for(const key in animal){
    console.log(key, animal[key]); //key = variable nya, animal[key] = isinya
}

//Loop for of
const semuaBuah = ['Apel', 'Mangga', 'Nanas', 'Durian'];
for(const buah of semuaBuah){
    console.log(buah);
}

//Loop while (ngecek kondisi terlebih dahulu baru di print)
let k = 1;
while(k <= 7){
    console.log('murid ' + k);
    k++;
}

//Loop do while (print terlebih dahulu baru ngecek kondisi)
let y = 1;
do{
    console.log('kampus ' + y);
    y++;
}while(y<=5);