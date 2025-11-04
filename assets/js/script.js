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