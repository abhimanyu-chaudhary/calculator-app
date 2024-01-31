let result = document.getElementById('resultBox');
let buttons = document.querySelectorAll('button');
let sound = new Audio('click.wav')

let string = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        sound.play();
        if(e.target.innerHTML == '='){
            string = eval(string);
            result.value = string; 
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            result.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            result.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            result.value = string;
        }
    })
})