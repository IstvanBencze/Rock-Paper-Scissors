const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const result_div = document.getElementById('result');
const user_score = document.getElementById('user_score');
const computer_score = document.getElementById('computer_score');
const restart_div = document.getElementById('restart-btn');

var user_current_score = 0;
var computer_current_score = 0;


function userChoice() {
    rock_div.addEventListener('click', () => evaluation('Rock'));
    paper_div.addEventListener('click', () => evaluation('Paper'));
    scissors_div.addEventListener('click', () => evaluation('Scissors'));
    restart_div.addEventListener('click', () => restart());
}
userChoice();

function evaluation(user_current_choice) {
    var computer_current_choice = computerChoice();
    var chosen = user_current_choice + computer_current_choice;
    if ((chosen == "Rockscissors") || (chosen == "Paperrock") || (chosen == "Scissorspaper")) {
        win(user_current_choice, computer_current_choice)
    } else if ((chosen == "Rockrock") || (chosen == "Paperpaper") || (chosen == "Scissorsscissors")) {
        draw(user_current_choice, computer_current_choice)
    } else {
        lost(user_current_choice, computer_current_choice)
    }
}

function win(user_current_choice, computer_current_choice) {
    result_div.innerHTML = user_current_choice + " won against " + computer_current_choice + "!"
    user_current_score++;
    user_score.innerHTML = user_current_score;
}

function draw(user_current_choice, computer_current_choice) {
    result_div.innerHTML = user_current_choice + " and " + computer_current_choice + " are the same, draw!"
}

function lost(user_current_choice, computer_current_choice) {
    result_div.innerHTML = user_current_choice + " lost against " + computer_current_choice + "!"
    computer_current_score++;
    computer_score.innerHTML = computer_current_score;
}

function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    var options = ["rock", "paper", "scissors"]
    return options[number];
}

function restart() {
    user_current_score = 0;
    user_score.innerHTML = user_current_score;
    computer_current_score = 0;
    computer_score.innerHTML = computer_current_score;
    result_div.innerHTML = "Choose an option:";
}