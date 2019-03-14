
var i = 100;
function makeProgress(){
a = 100;
if(i == a){
$(".progress-bar").css("width", i + "%").text(i);
}
// Wait for sometime before running this script again
setTimeout("makeProgress()", 50);
}
makeProgress();
