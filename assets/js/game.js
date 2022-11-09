// On recupere le choix

var nb_played = 0;
let print_nb_played = document.querySelector("#game_played");

var nb_win = 0;
let print_win = document.querySelector("#game_win");

let print_result = document.querySelector("#game_result");

var game_choice = {pierre:"feuille" , feuille:"ciseaux", ciseaux:"pierre"};


function reset_game(){
    nb_played = 0;
    nb_win = 0;
}


function game_play(choice){
    nb_played++;
    tab_choice = ["pierre", "feuille", "ciseaux"];
    bot_choice = tab_choice[Math.floor(Math.random()*3)];

    if(bot_choice == choice){
        print_result.textContent = "tie"
    }else if(bot_choice == game_choice[choice]){
        print_result.textContent = "bot win"
    }else{
        print_result.textContent = "player win"
        nb_win++;
    }

    print_win.textContent = "nb game gagné : " + nb_win;
    print_nb_played.textContent = "nb game joué : "  + nb_played;
    print_vs(choice, bot_choice);
}

function print_vs(choice, botchoice){

    let player_img = document.querySelector("#player");
    let bot_img = document.querySelector("#bot");

    player_img.src = "images/"+choice+".jpg"
    bot_img.src = "images/"+botchoice+".jpg"

}

