fetch("https://www.boredapi.com/api/activity")
.then(data=>data.json())
.then( boreData =>{
const boreTxt =boreData.activity ;
const BoreData =document.getElementById("Boreid");
BoreData.innerHTML=boreTxt;


})


