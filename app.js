/*counter */
let valueDisplays = document.querySelectorAll(".count");
let interval = 5000 ;

valueDisplays.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function(){
        startValue +=1
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter)
        }
    },duration)
})


/*child and adult age test*/
function handleFrom(){
let inputs = document.getElementById('input').value;
let displayText = document.getElementById('show-text')
let child = document.getElementById('child')
let child1 = document.getElementById('child1')

 if(inputs<=18){
    displayText.innerHTML=" Sorry You Are Child"
    displayText.style.color="red"
    child.classList.add('child1')
    child1.classList.remove('child3')
 }else{
    displayText.innerHTML=" Congratulations You Are Adult"
    displayText.style.color="green"
    child.classList.remove('child1')
    child1.classList.add('child3')
    
 }
 let inputsa = document.getElementById('input').value=""
 child.classList.add('child')
}

