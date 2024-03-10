//this is the function of the javscript that we are using on the button click in our html file
function submitForm() {
    //it takes the value of the tag which has ID name "motherboard" and storing it in the variable
    const Motherboard = document.getElementById('motherboard').value;
    //it takes the value of the tag which has ID name "cpu" and storing it in the variable
    const cpu = document.getElementById('cpu').value;
    //it takes the value of the tag which has ID name "gpu" and storing it in the variable
    const gpu = document.getElementById('gpu').value;
    //it takes the value of the tag which has ID name "ram" and storing it in the variable
    const ram = document.getElementById('ram').value;
    //it takes the value of the tag which has ID name "hard_drive" and storing it in the variable
    const hard_drive = document.getElementById('hard_drive').value;
    //it takes the value of the tag which has ID name "monitor" and storing it in the variable
    const monitor = document.getElementById('monitor').value;
    //it takes the value of the tag which has ID name "other_components" and storing it in the variable
    const Other_Components = document.getElementById('other_components').value;

    //here m using back ticks to inject the variables that we stored above in the string dynamically
    //and storing that string in the variable
    const submitted_form = 
    `Your Order:
    Motherboard: ${Motherboard} 
    CPU: ${cpu}
    GPU: ${gpu}
    RAM: ${ram}
    Hard Drive: ${hard_drive} 
    Monitor: ${monitor}
    Other components: ${Other_Components}`;
    //here im using alert function which gives an output as a pop up window 
    //this is built in function of javascript, and im passing the string as the parameter so it will show all the values in pop-up window
    alert(submitted_form);
}