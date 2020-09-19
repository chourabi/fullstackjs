

var checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", ()=>{
    checkAge()
});


var input = document.getElementById("ageInput");

input.addEventListener("keyup",(e)=>{
    

    if (e.target.value === "") {
        checkBtn.setAttribute("disabled",true);
    } else {
        checkBtn.removeAttribute("disabled");
    }

})


function checkAge (){
    var input = document.getElementById("ageInput");
    var val = input.value;
    //    border-color: red;
    val = Number.parseInt(val);
    
    if ( val === ""  ||  isNaN(val)  ) {
        input.style.borderColor = "red"
    }else{
        input.style.borderColor = "black";

        if ( val > 18 ) {
            alert("ok");
        } else {
            alert("sorry, :(");
        }

    }

}


/***************************************** */


var array = [1,2,3,4,5,6,7];

for (var i =0; i < array.length; i++) {
   // console.log(array[i]);
}

array.forEach(element => {
   // console.log(element);
});


array.map(  async (element)=>{
  // await console.log(element);
})

while ( false ) {
    console.log("i'm still false");
}

do {
    
} while (false);







/************************************ */


var x =7;
switch (x) {
    case 1:
        console.log("traintment...");    
    break;

    case 2:
        console.log("traintment...");    
    break;

    case 3:
        console.log("traintment sur 3...");    
    break;


}


/*if (condition) {
    
} else if(...) {
    
}
else if(...) {
    
}
else if(...) {
    
}
else if(...) {
    
}
else if(...) {
    
}
else if(...) {
    
}
else if(...) {
    
}
else if(...) {
    
}else{

}*/


/*
var json = '{ name:"test" }';

try {
    var newJSON = JSON.parse(json);
} catch (error) {
    console.log(error);
    alert("something went wrong while trying to get the data.")
}
*/

/*

window.document.forms[0].onsubmit = (event)=>{
   

    /** i can test my inputs here * 
    var myInput = event.target['myInput'].value;
    if (myInput.length < 10) {
       event.preventDefault(); 
    
    }

}*/


console.log( Math.random()*100 );




