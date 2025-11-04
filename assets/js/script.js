const fullname = document.querySelector("#fullname");
const fullnamePrev = document.querySelector("#fullnamePreview");
const umur = document.querySelector("#umur");
const umurPrev = document.querySelector("#umurPreview");
const jenisKelamin = document.querySelector("#jenisKelamin");
const jenisKelaminPrev = document.querySelector("#jenisKelaminPreview");
const noTel = document.querySelector("#noHp");
const noTelPrev = document.querySelector("#noTelePreview");
const alamat = document.querySelector("#alamat");
const alamatPrev = document.querySelector("#alamatPreview");
const noRek = document.querySelector("#noRek");
const noRekPrev = document.querySelector("#noRekPreview");
const cabang = document.querySelector("#cabang");
const cabangPrev = document.querySelector("#cabangPreview");
const joinDate = document.querySelector("#joinDate");
const joinDatePrev = document.querySelector("#joinDatePreview");
const rating = document.querySelector("#rating");
const ratingKepuasan = document.querySelector("#ratingKepuasanPreview");
const teksKepuasan = document.querySelector("#teksKepuasan");
const tipeNasabah = document.querySelector("#tipeNasabah");
const tipeNasabahPrev = document.querySelector("#tipeNasabahFlag");
const statusNasabah = document.querySelector("#statusNasabah");
const statusPrev = document.querySelector("#statusFlag");
const profilePict = document.querySelector("#profilePict");
const btnProfil = document.querySelector("#btnProfil");
const imgProfil = document.querySelector("#imgProfilPict");
const profilActive = document.querySelector("#profilActive");
const profilInactive = document.querySelector("#profilInactive");


fullname.addEventListener("input", function(){
    fullnamePrev.textContent = fullname.value;
});

umur.addEventListener("input", function(){
    umurPrev.textContent = umur.value
});

jenisKelamin.addEventListener("change", function(){
    jenisKelaminPrev.textContent = jenisKelamin.value;
});

noTel.addEventListener("input", function(){
    noTelPrev.textContent = noTel.value;
});

alamat.addEventListener("input", function(){
    alamatPrev.textContent = alamat.value;
});

noRek.addEventListener("input", function(){
    noRekPrev.textContent = noRek.value;
});

cabang.addEventListener("change", function(){
    cabangPrev.textContent = cabang.value;
});

joinDate.addEventListener("input", function(){
    joinDatePrev.textContent = joinDate.value;
});


rating.addEventListener("input", function(){
    const ratVal = rating.value;
    ratingKepuasan.setAttribute("value", ratVal);

    let textKepuasan = "";

    if (ratVal >= 0 & ratVal <=20) {
        textKepuasan = "Sangat Buruk";
    } else  if (ratVal >= 21 & ratVal <=40) {
        textKepuasan = "Buruk";
    } else  if (ratVal >= 41 & ratVal <=60) {
        textKepuasan = "Cukup baik";
    } else  if (ratVal >= 61 & ratVal <=80) {
        textKepuasan = "Baik";
    } else {
        textKepuasan = "Sangat Baik";
    }
   
    teksKepuasan.textContent = textKepuasan;
});


function initial(){
    rating.value="80";
    ratingKepuasan.setAttribute("value", rating.value);
    teksKepuasan.textContent = "Baik";
}

initial();

tipeNasabah.addEventListener("change", function(){
    switch (tipeNasabah.value) {
        case "Silver":
            tipeNasabahPrev.style.backgroundColor="#8FABD4";
            break;
        case "Gold":
            tipeNasabahPrev.style.backgroundColor="#F3C623";
            break;
        case "Platinum":
            tipeNasabahPrev.style.backgroundColor="#1A3D64";
            break;
        case "Diamond":
            tipeNasabahPrev.style.backgroundColor="rgba(53, 220, 239, 1)";
            break;
        default:
            break;
    }
    
    tipeNasabahPrev.textContent = tipeNasabah.value;
});

btnProfil.addEventListener("click", function(){
    profilePict.click();

    profilePict.addEventListener("change", function(){
        if (profilePict.files[0] != ""){
            profilInactive.classList.remove("show");
            profilInactive.classList.add("hide");

            profilActive.classList.remove("hide");
            profilActive.classList.add("show");
            imgProfil.src = window.URL.createObjectURL(profilePict.files[0]);
        }
    });
});

statusNasabah.addEventListener("change", function(){
   if(statusNasabah.value == "inactive"){
        statusPrev.style.backgroundColor = "#ba2020";
        statusPrev.textContent = "Tidak Aktif";
   } else {
        statusPrev.style.backgroundColor = "#33A1E0";
        statusPrev.style.color = "#ffff";
        statusPrev.textContent = "Aktif";
   }
});
