n=["k|","k|","k","ke","ke|","ke|","kel","kel","kel|","kele|","kele","kele","kele|","kele|","kele","kele","kele|","kele|","kele","kele","kele|","kele|","kele","kel","kel|","kel|","ke","ke","ke|","k|","k","k","|","|","","繁","繁|","繁|","繁星","繁星","繁星|","繁星|","繁星","繁星","繁星|","繁星|","繁","繁","繁|","|","",""];
var i=0
var xh=setInterval(function (){
   $("#name").text(n[i]);
   i++
   if(i>n.length){
       i=0
   }
},150);