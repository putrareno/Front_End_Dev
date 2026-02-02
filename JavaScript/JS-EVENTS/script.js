const button = document.getElementById('tekan');
button.addEventListener('click', function(){
    console.log('Hallo');
});


const allert = document.getElementById('tekan');
allert.addEventListener('click', function(){
    alert('Login Berhasil');
});


const promp = document.getElementById('tekan');
promp.addEventListener('click', function(){
    prompt('Masukkan alamat email anda: ');
});

//DOM (memanipulasi teks HTML)
const paragraph = document.getElementById('myParagraph');
paragraph.textContent = 'Ini teks HTML dengan JavaScript';