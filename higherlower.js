let num = 0;
let uL = 0;
const guess_list = [];
function create_upper(nu){
    return Math.floor(Math.random() * nu) + 1;
}

function upper_limit(){
    let msg = "Enter Upper Limit";
    let x = "-2";
    while (x<1 || isNaN(x)) {
        x = prompt(msg,"20");
        msg = "Incorrect Value, Enter Upper Limit"; 
        if (/^\d+\.\d+$/.test(x) && parseFloat(x)>1){
            x = Math.round(parseFloat(x));            
        }      
    }
    uL = x;
    num = create_upper(uL);
    console.log(uL);
    console.log(num);
    document.getElementById("header_info").innerHTML = `Guess a number between 1 and ${uL}`
}

function do_guess() {
    
    let guess = document.getElementById("guess").value;

    let message = document.getElementById("message");

    if (!(/^\-?\d+\.\d+$/.test(guess)) && !(/^\-?\d+$/.test(guess))){
        message.innerHTML = "That is not a number!";
        return;
    }
    let gue = parseFloat(guess);
    if (gue<1 || gue>uL){
        message.innerHTML = "That number is not in range, try again.";
        return;
    }

    if(guess_list.includes(gue)){
        message.innerHTML = "Number has been guessed.";
        return; 
    }
    guess_list.push(gue);

    if(gue == num) {
        message.innerHTML = `You got it! It took you ${guess_list.length} tries and your guesses were ${guess_list.join(", ")}.`;
        return;
    }
    else if (gue > num) {
        message.innerHTML = "No, try a lower number.";
    }
    else {
        message.innerHTML = "No, try a higher number.";
    }
}