
let image = document.getElementById('image');
let images = ['logo1.png','logo3.png']
setInterval(function(){
 let random = Math.floor(Math.random() * 2);
 image.src = images[random];
},300);