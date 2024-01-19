const xmlhttp = new XMLHttpRequest();
let h1 = document.getElementById("head");
let para = document.getElementById("demo");
let input =  document.getElementById("inp");
let btn =  document.getElementById("btn1");
let imgs =  document.getElementById("images");
let next = document.querySelector("#nxt");


xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    h1.innerHTML = myObj.Question1; 
   demo.innerHTML= myObj.text1;  
   imgs.src= myObj.image1;
}

xmlhttp.open("GET", "file.json");
xmlhttp.send();


Guess.addEventListener("click", function(){
    if(input.value == "Vinicius junior" || input.value == "Vinícius Júnior"|| input.value == "Vini" || input.value == "vinicius junior"){
        console.log(true);
        next.style.display= "block";
        demo.innerHTML= true;
        demo.style.backgroundColor="green";
        demo.style.color="white";
        demo.style.position="absolute";
        demo.style.left="185px";
        

    }else if(input.value === ""){
        demo.innerHTML= "Value is impty";
        demo.style.position="absolute";
        demo.style.left="150px";

    }else{
        demo.innerHTML = "false";
        demo.style.backgroundColor= "red";
        demo.style.color="white";
        demo.style.position="absolute";
        demo.style.left="185px";
    }
})





