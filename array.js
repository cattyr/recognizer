Webcam.set({
width:350,
height:350,
image_formate:'png',
png_quality: 90,
})

camera=document.getElementById("camera")

Webcam.attach("camera")
function capture(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="res" src="'+data_uri+'"/>'
    })
    
}
hi=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_PRh2fCId/",model_loaded)

function model_loaded(){
    console.log("MODEL IS LOADED")

}

function identify(){
    img=document.getElementById("res")
  hi.classify(img,gotresult)
}

function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
       document.getElementById("object").innerHTML = result[0].label
       document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(1);
    }
}