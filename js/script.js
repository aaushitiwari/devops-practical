const wordText = document.querySelector(".word");
hintText= document.querySelector(".hint span");
userWord= document.querySelector("input");
refreshBtn= document.querySelector(".refresh");
checkBtn =document.querySelector(".check-word")

let correctWord;
const game = () => {
    let randomObj =words[Math.floor(Math.random() * words.length)]; //getting random objects from the words 
    let wordArray= randomObj.word.split("");//slippting the random word
    for(let i=wordArray.length-1; i>0;i--)
    {
        let j=Math.floor(Math.random() * (i+1));//getting random numbers
        //shufftling the wordArray letters randomly
        let temp=wordArray[i];
        wordArray[i]=wordArray[j];
        wordArray[j]=temp;
    }
    wordText.innerText = wordArray.join("");//passing the shuffled word as wordText
    hintText.innerText=randomObj.hint;//passing the random object hint as hint text
    correctWord = randomObj.word.toLowerCase();//passing random word to correct word
   
}
game();

const checkWord = () =>{
    let userWord = inputField.value.toLocaleLowerCase();
    if(userWord !=correctWord) return alert("oops wrong answer");
    if(!userWord) return alert("pls enter the word");
    alert("Congrats correct answer");
    game();
}


refreshBtn.addEventListener("click", game);
checkBtn.addEventListener("click",checkWord);
