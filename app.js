const userChoiceDisplay = document.createElement('p')
const computerChoiceDisplay = document.createElement('div')
const resultDisplay =document.createElement('h1')
const game = document.getElementById('game')
game.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)
let userChoice
let computerChoice
const choices =['Schere','Stein','Papier', 'Echse', 'Spock']
const handleClick = (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = `Spieler: ${e.target.id}`
    computerAusgabeGenerieren()
    ergebnisBerechnen()


}
for (i = 0; i < choices.length; i++){
 const button =document.createElement('button')
 button.id = choices[i]
 button.innerHTML =choices[i]
 button.addEventListener('click', handleClick)
 game.appendChild(button)
}

const computerAusgabeGenerieren =() => {
    const randomChoice = choices[Math.floor(Math.random()*choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer: ' + computerChoice
}

const ergebnisBerechnen = () =>{
    console.log(userChoice+computerChoice)
    switch(userChoice + computerChoice){
        case'SchereStein':
        case'SchereSpock':
        case'SteinPapier':
        case'SteinSpock':
        case'PapierSchere':
        case'PapierEchse':
        case'EchseStein':
        case'EchseSchere':
        case'SpockEchse':
        case'SpockPapier':
        
        resultDisplay.innerHTML ='Du hast verloren!'
        break
        case'SteinSchere':
        case'SteinSEchse':
        case'ScherePapier':
        case'SchereEchse':
        case'PapierStein':
        case'PapierSpock':
        case'EchsePapier':
        case'EchseSpock':
        case'SpockStein':
        case'SpockSchere':

        resultDisplay.innerHTML = 'Du hast gewonnen!'
        break
        case'PapierPapier':
        case'SteinStein':
        case'SchereSchere':
        case'SpockSpock':
        case'EchseEchse':
        resultDisplay.innerHTML = 'Unentschieden!'
        break
    }
}