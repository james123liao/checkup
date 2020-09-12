
var mathTutorLinks = []
function sendMathZoom(){
    var zoomMathLink = document.getElementById("zoomMeeting").value;
    document.getElementById("mathLink").innerHTML = zoomMathLink;
    mathTutorLinks.push(zoomMathLink)
  } 
//checks if there are tutors available
if (length(mathTutorLinks) > 0){
    tutorAvailable == True
}
else{
    tutorAvailble == False
}

//sends zoom links to students
if(tutorAvailable == True){
    sendMathZoom();
    
}