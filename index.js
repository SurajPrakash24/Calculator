let screen= document.getElementById('inputbox');
button=document.querySelectorAll('button');
buttonLen=document.querySelectorAll('button').length;
let screenValue = '';
for(var i=0; i<buttonLen; i++){
    button[i].addEventListener('click',function(){
        buttonText = this.innerText;
        
        if(buttonText =='C'){
            screenValue = "";
            screen.value=screenValue;
        }
        else if(buttonText == '='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
