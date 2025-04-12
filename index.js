const button=document.querySelectorAll('button')
const inputValue=document.getElementById('result')


for(let i=0;i<button.length;i++){
       const buttontext=()=>{
        const buttonvalue=button[i].textContent
        if (buttonvalue==='C'){
        clearResult()    
        }
        else if(buttonvalue==='='){
            calResult()
        }
        else{
            appenedValue(buttonvalue)
        }
    }

    button[i].addEventListener('click',buttontext)

}

function clearResult(){
  inputValue.value='';
}
function calResult(){
inputValue.value=eval(inputValue.value)
}
function appenedValue(value){
  inputValue.value+=value
}