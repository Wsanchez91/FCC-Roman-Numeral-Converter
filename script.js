const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    if(number.value === ''){
      output.textContent = "Please enter a valid number";
  }});