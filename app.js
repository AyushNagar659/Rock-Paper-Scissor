let userscore = 0;
let compscore = 0;

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () =>{
    const option = ["rock","paper","scissors"];
    const ranidx =  Math.floor(Math.random() * 3);
    return option[ranidx];
}

const Playgame = (userchoice) =>{
    const compchoice = gencompchoice();
    if(userchoice === compchoice)
    {
        msg.innerText = "Its a Draw!";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        let userwin = true;
        if(userchoice === "rock")
        {
            userwin = compchoice == "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice == "scissors" ? false : true;
        }
        else{
            userwin = compchoice == "rock" ? false : true;
        }

        showWinner(userwin, userchoice, compchoice);
    }    
};

const showWinner = (userwin,userchoice, compchoice) =>{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        Playgame(userchoice);
    });
});
