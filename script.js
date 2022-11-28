function changeImage(){
  var image = document.getElementById ('myImage');
  if (image.src.match("lampon")){
    image.src ="assets/lampoff.jpg";
  }
  else{
    image.src="assets/lampon.jpg";
  }
  
}

