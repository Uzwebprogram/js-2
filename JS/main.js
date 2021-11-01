var teacher = Number(prompt ("O'qishda nechi ball to'pladiz"))
var ball = 80;
var ballmedium = 100 ;
var usd = 3000 ;
var usdmeduim = 2000 ;
var ballgold = 150;
var ballsuper = 200;

if (teacher < ball ) {
    alert("siz o'qishga kira olmadiz")
}else if(teacher >= ball && teacher < ballmedium) {
   let tolov = Number(prompt("siz super kantraktga kirdingiz tolovni dollarda kiriting"))
    if(usd == tolov){
      alert("sizning pulingiz yetdi")
    }else if(usd < tolov){
        alert ("bizga oshiqchasi kerak emas !😤")
    }else{
     alert("sizning mablag'ingiz yetmadi")
    }
}else if(teacher >= ballmedium && teacher < ballgold) {
    let tolov = Number(prompt("siz kantraktga kirdingiz tolovni dollarda kiriting"))
     if(usdmeduim == tolov){
       alert("sizning pulingiz yetdi")
     }else if(usdmeduim < tolov){
         alert ("bizga oshiqchasi kerak emas !😤")
     }else{
      alert("sizning mablag'ingiz yetmadi")
     }
 }else if (teacher <= ballsuper && teacher >= ballgold) {
    alert("siz o'qishga grand asosida qabul qilindingiz🤑")
}
