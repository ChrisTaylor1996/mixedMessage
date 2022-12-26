function generateRandomNumber(num) {
  return Math.floor(Math.random() * num)
 
}
// object containing arrays 
const arrays = {
  positionInfo: ['striker', 'midfielder', 'defender', 'goalkeeper'],
  ability: ['well', 'brilliantly', 'poorly', 'terribly', 'ok'],
  advice: ['shout at the manager', 'score more goals', 'run down the wing', 'fight somebody', 'pass more']
}

//store user output as empty array
let personalAdvice = []

//for in loop to iterate over the object
for(let x in arrays){
  let optionIdx = generateRandomNumber(arrays[x].length)

  switch(x) {
    case 'positionInfo':
      personalAdvice.push(`You are a ${arrays[x][optionIdx]}.`)
      break
    
    case 'ability':
      personalAdvice.push(`You are playing ${arrays[x][optionIdx]}.`)
      break
    
    case 'advice':
      personalAdvice.push(`You should ${arrays[x][optionIdx]}.`)
      break
    
    default:
      personalAdvice.push('More info needed.')
  }

}

function formatAdvice(advice) {
  const formatted = personalAdvice.join('\n')
  console.log(formatted)

}

formatAdvice(personalAdvice)



