 
function random(){
    var qoute = ["“Be the change that you wish to see in the world.”" , "“If you tell the truth, you don't have to remember anything.”" 
    ,"”Always forgive your enemies; nothing annoys them so much.”" ,
    "Live as if you were to die tomorrow. Learn as if you were to live forever.”"];
 

var result = Math.floor( Math.random() * qoute.length);
 document.getElementById("quote").innerHTML= qoute[result]
}
 