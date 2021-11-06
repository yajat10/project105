Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    image_quality:90
})
camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='snapshot' src="+data_uri+">"
})
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VwfLsrNEl/",MoDeLlOaDeD())
function MoDeLlOaDeD(){
    console.log("Model loaded!!!!!");
}
 function identify(){
  img=document.getElementById("snapshot");
  classifier.classify(img,got_result())
 }
function got_result(error,result){
  if(error){
      console.log(error);
  }
  else{
      console.log(result);
      name_of_object=document.getElementById("face_name").innerHTML=result[0].label
      object_accuracy=document.getElementById("face_accuracy").innerHTML=result[0].confidence.toFixed(3)
  }
}