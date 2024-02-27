let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const compgenerated = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx];
}

const draw = () =>{
    console.log("draw match");
    msg.innerText = "Draw match!"
    msg.style.backgroundColor = "black";
}

const playgame =(userchoice) =>{
    //userchoice
    console.log("user choice = ",userchoice);
    //computerchoice
    let compchoice = compgenerated();
    console.log("computer choice = ",compchoice);

    if(userchoice === compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice === "rock"){
            //paper,scissors
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            //rock,scissors
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            //rock,paper
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
} 

const showWinner =(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";             
        console.log(" You Win! ");
    }else{
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText = `You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red"; 
        console.log(" You Lost! ")
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        let userchoosen=choice.getAttribute("id");
        let userchoice=playgame(userchoosen);
    });
}
);