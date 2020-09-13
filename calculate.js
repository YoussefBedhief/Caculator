// Select elements
let calculateElement = document.querySelector('.calculator .value')
let equalElement = document.querySelector('.calculator .equal');
let removeElement = document.querySelector('.calculator .remove');
let buttonElement = document.querySelector('.toogle-btn');
let sciElement = document.querySelectorAll('.calculator span.sci');


//Add active class to the toogle 
buttonElement.addEventListener('click', function(){
    buttonElement.classList.toggle('active');
    if(buttonElement.classList.contains('active')){
        calculateElement.classList.add('active');
        for(var i=0; i <sciElement.length; i++){
            sciElement[i].style.transition = "all 1s linear";
            sciElement[i].style.display = "block";
        }
    }else{
        calculateElement.classList.remove('active');
        for(var i=0; i <sciElement.length; i++){
            sciElement[i].style.display = "none";
        }
    }
});




// Write the result
equalElement.addEventListener('click', function(){
    calc.txt.value = eval(calc.txt.value);
});

// Backspace function 
removeElement.addEventListener('click', function(){
    calc.txt.value = calc.txt.value.slice(0, -1);
});


//Factorial function
function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }
