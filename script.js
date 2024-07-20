const disRules = document.querySelector(".rule_btn");
const ruleCont = document.querySelector(".rules_container");
const cancleBtn = document.querySelector(".cancle_btn");




var randomNumber = Math.floor(Math.random()*3);
console.log(randomNumber);

const con=document.querySelectorAll(".con");
const line =document.querySelectorAll(".line");
let computer=document.querySelectorAll(".computer");
let user= document.querySelector(".user");
let machine=document.querySelector(".machine");
let winModal=document.querySelector(".win-modal")
let loseModal=document.querySelector(".lose-modal")
let tieModal=document.querySelector(".tie-modal")
console.log(computer);
let play=document.querySelector(".play");
let play1=document.querySelector(".play1");
let replay=document.querySelector(".replay");
let random=Math.floor(Math.random()*3);

let score=JSON.parse(localStorage.getItem("userScore"));
let upscore=document.getElementById("Upoints")

let shade1=document.querySelector(".shade1");
let shade2=document.querySelector(".shade2");
let shade3=document.querySelector(".shade3");
if(score){
    upscore.innerText=score;
}
let count=0;
let computerScore=JSON.parse(localStorage.getItem("comScore"));
let comScore=document.getElementById("Cpoints")
if(computerScore){
    comScore.innerText=computerScore;
}
let count2=0;

const updateNextBtnVisibility = () => {
    if (score > computerScore) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
};

updateNextBtnVisibility();  
        con.forEach((element ,index)=> {
            element.addEventListener("click" , ()=>{
                user.style.opacity="1"
                con.forEach(item=> {
                    item.style.display="none";
                });
                line.forEach(item=>{
                    item.style.display="none"
                })
                element.style.display="block";
                element.classList.add("show");
                setTimeout(() => {
                    machine.style.opacity="1"
                    setTimeout(() => {
                        computer[random].style.display="block";
                    }, 20);
                    setTimeout(()=>{
                        if(index==0 && random==2|| index==1 & random==0 || index==2 && random==1){
                            winModal.style.display="grid";
                            shade1.classList.add("color1")
                            shade2.classList.add("color2")
                            shade3.classList.add("color3")
                            count=score;
                            count++;
                            upscore.innerText=count;
                            localStorage.setItem("userScore", JSON.stringify(count))
                        }else if(index==0 && random==1|| index==1 & random==2 || index==2 && random==0){
                            loseModal.style.display="grid";
                            shade1.classList.add("color4");
                            shade2.classList.add("color5");
                            shade3.classList.add("color6");
                            count2=computerScore;
                            count2++;
                            comScore.innerText=count2;
                            localStorage.setItem("comScore", JSON.stringify(count2))
                        }else{
                            tieModal.style.display="grid"
                        }
                            updateNextBtnVisibility();  
                    },100)
                },10);
            })
        });

play.addEventListener("click", ()=>{
    window.location.reload()
})

play1.addEventListener("click", ()=>{
    window.location.reload()
})

replay.addEventListener("click", ()=>{
    window.location.reload()
})
let column1=document.querySelector(".diOutput");
let column2=document.querySelector(".game-con");
let column3=document.querySelector(".winner-screen")
nextBtn.addEventListener("click", () => {
    nextBtn.style.display = "none";
    column1.style.display="none";
    column2.style.display="none";  
    loseModal.style.display="none";
    column3.style.display="grid";

});

let winnerPlayButton=document.querySelector(".winnerPlayBtn")
winnerPlayButton.addEventListener("click",()=>{
    window.location.reload()
})
cancleBtn.addEventListener("click",()=>{
    ruleCont.style.display = "none"

})


disRules.addEventListener("click",()=>{
    ruleCont.style.display = "block";
})



