const display = document.getElementById('display');

let arr = ['+', '-', '/', '*']
function appendToDisplay(input){
    let val = display.value;
    // if(val.includes('.')) return;
    let lastChar = val[val.length - 1];
    if(arr.includes(input) && arr.includes(lastChar)){
        console.log('present', val)
        val = val.toString().slice(0, val.length - 1);
        val += input;
        display.value = val;
    }
    else{
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    if(display.value.length > 0){
        display.value = eval(display.value).toString();
    }
}
function deleteInput(){
   display.value = display.value.toString().slice(0,-1);

}