//JSON
const data = {
    nama: "Reno",
    age: "20"
};

//cara menarik data JSON ke JS
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json();
    })


//localStorage
localStorage.setItem("nama", "Reno"); //Menyimpan Data
const nama = localStorage.getItem("nama"); //Mengambil Data

//sessionStorage
sessionStorage.setItem("hobi", "Coding"); //Menyipan Data
const hobi = sessionStorage.getItem("hobi"); //Mengambil Data

//Untuk melihat aktivitas user (jika website sudah dideploy)
const cookies = document.cookie = "nama=Reno; expires=Fri, 31 Dec 2026 23:59:59 GMT; path"