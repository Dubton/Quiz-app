class question{
    constructor(question, answer1, answer2, answer3, answer4){
        this.question=question;
        this.answer1=answer1;
        this.answer2=answer2;
        this.answer3=answer3;
        this.answer4=answer4;
    }
}

let question1=new question("What kind of Misting was Clubs?", "Tineye", "Smoker", "Soother", "Pewterarm");

let question2=new question("What kind of metal could Wayne burn with Allomancy?", "Atium", "Gold", "Bendalloy", "Aluminum");

let question3=new question("What name did Sazed take on after his ascension?", "Harmony", "Odium", "Vision", "Acceptance");

let question4=new question("Which metal can be burned alongside others to increase their potency?", "Cadmium", "Copper", "Nicrosil", "Duralumin");

let question5=new question("What book series do the previous questions refer to?", "The Stormlight Archive", "Lord of the Rings", "Mistborn", "The Wheel of Time");

let question6=new question("What bridgecrew did Kaladin serve in?", "Ten", "Two", "Four", "Six");

let question7=new question("Of what variety is Shallan's spren?", "Anger", "Cryptic", "Cultivation", "Creation");

let question8=new question("To what Radiant Order does Jasnah belong?", "Truthwatchers", "Willshapers", "Edgedancers", "Elsecallers");

let question9=new question("What is the name of Adolin's Sword's spren?", "Pattern", "Mayalaran", "Sylphrena", "Wendel");

let question10=new question("To what book series do the previous questions refer to?", "The Stormlight Archive", "Lord of the Rings", "Mistborn", "The Wheel of Time");

let questionOne=[question1.answer1, question1.answer2, question1.answer3, question1.answer4]

let questionTwo=[question2.answer1, question2.answer2, question2.answer3, question2.answer4]

let questionThree=[question3.answer1, question3.answer2, question3.answer3, question3.answer4]

let questionFour=[question4.answer1, question4.answer2, question4.answer3, question4.answer4]

let questionFive=[question5.answer1, question5.answer2, question5.answer3, question5.answer4]

let questionSix=[question6.answer1, question6.answer2, question6.answer3, question6.answer4]

let questionSeven=[question7.answer1, question7.answer2, question7.answer3, question7.answer4]

let questionEight=[question8.answer1, question8.answer2, question8.answer3, question8.answer4]

let questionNine=[question9.answer1, question9.answer2, question9.answer3, question9.answer4]

let questionTen=[question10.answer1, question10.answer2, question10.answer3, question10.answer4]

let cheatSheet=[question1.answer2, question2.answer3, question3.answer1, question4.answer4, question5.answer3, question6.answer3, question7.answer2, question8.answer4, question9.answer2, question10.answer1]

let answers=[]

let div=document.getElementById("question")

function setInput1(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionOne[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionOne[a]
    div.appendChild(document.createElement("br"))
}

function setInput2(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionTwo[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionTwo[a]
    div.appendChild(document.createElement("br"))
}

function setInput3(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionThree[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionThree[a]
    div.appendChild(document.createElement("br"))
}

function setInput4(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionFour[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionFour[a]
    div.appendChild(document.createElement("br"))
}

function setInput5(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionFive[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionFive[a]
    div.appendChild(document.createElement("br"))
}

function setInput6(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionSix[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionSix[a]
    div.appendChild(document.createElement("br"))
}

function setInput7(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionSeven[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionSeven[a]
    div.appendChild(document.createElement("br"))
}

function setInput8(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionEight[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionEight[a]
    div.appendChild(document.createElement("br"))
}

function setInput9(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionNine[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionNine[a]
    div.appendChild(document.createElement("br"))
}

function setInput10(a){
    div.appendChild(document.createElement("input"))
    document.getElementsByTagName("input")[a].setAttribute("type", "radio")
    document.getElementsByTagName("input")[a].setAttribute("name", "answers")
    document.getElementsByTagName("input")[a].setAttribute("id", `${a}`)
    document.getElementsByTagName("input")[a].setAttribute("value", questionTen[a])
    div.appendChild(document.createElement("label"))
    document.getElementsByTagName("label")[a].setAttribute("for", `${a}`)
    document.getElementsByTagName("label")[a].innerHTML=questionTen[a]
    div.appendChild(document.createElement("br"))
}

function startQuiz(){
    document.getElementById("quizStart").setAttribute("id", "submitAnswer")
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionTwo()")
    document.getElementById("submitAnswer").innerHTML="Submit Answer"
    div.appendChild(document.createElement("h2")).innerHTML=question1.question
    for(i=0;i<=3;i++){
        setInput1(i)
    }
}

function submitAnswer(){
    if(document.getElementById("0").checked===true){
        let selection=document.getElementsByTagName("input")[0].value
        answers.push(selection)
    }else if(document.getElementById("1").checked===true){
        let selection=document.getElementsByTagName("input")[1].value
        answers.push(selection)
    }else if(document.getElementById("2").checked===true){
        let selection=document.getElementsByTagName("input")[2].value
        answers.push(selection)
    }else if(document.getElementById("3").checked===true){
        let selection=document.getElementsByTagName("input")[3].value
        answers.push(selection)
    }else{
        alert("Pick an answer next time")
        Reset()
    }
}

function toQuestionTwo(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionThree()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question2.question
    for(i=0;i<=3;i++){
        setInput2(i)
    }
}

function toQuestionThree(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionFour()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question3.question
    for(i=0;i<=3;i++){
        setInput3(i)
    }
}

function toQuestionFour(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionFive()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question4.question
    for(i=0;i<=3;i++){
        setInput4(i)
    }
}

function toQuestionFive(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionSix()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question5.question
    for(i=0;i<=3;i++){
        setInput5(i)
    }
}

function toQuestionSix(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionSeven()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question6.question
    for(i=0;i<=3;i++){
        setInput6(i)
    }
}

function toQuestionSeven(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionEight()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question7.question
    for(i=0;i<=3;i++){
        setInput7(i)
    }
}

function toQuestionEight(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionNine()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question8.question
    for(i=0;i<=3;i++){
        setInput8(i)
    }
}

function toQuestionNine(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "toQuestionTen()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question9.question
    for(i=0;i<=3;i++){
        setInput9(i)
    }
}

function toQuestionTen(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "checkScore()")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.appendChild(document.createElement("h2")).innerHTML=question10.question
    for(i=0;i<=3;i++){
        setInput10(i)
    }
}

function checkScore(){
    submitAnswer()
    document.getElementById("submitAnswer").setAttribute("onclick", "Reset()")
    document.getElementById("submitAnswer").innerHTML="Reset to beginning"
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    let score=0
    for(i=0;i<=9;i++){
        if(cheatSheet[i]===answers[i]){
            score++
        }else{}
    }
    div.appendChild(document.createElement("p")).innerHTML=`Your score was ${score}/10`
}

function Reset(){
    document.location.reload(true)
}