console.log('what_weather')

//  esta es una manera 
// let opciona = 'soleado'

// if (WEATHER == opciona) {
//     console.log('Bien, el dia esta soleado y puedes lavar tus garras')

const WEATHER = prompt ('Como esta el clima en tu rancho?')


if (WEATHER === 'soleado' ) {
    console.log('Bien, el dia esta soleado y puedes lavar tus garras')
} else if (WEATHER === 'lluvioso' ) {
    console.log('Mete la ropaaaa... esta lloviendo!!!')
} else if (WEATHER === 'nevando' ) {
    console.log('Saca la chamarra') 
} else if (WEATHER === 'nublado' ) {
    console.log('Prende la tele pa ver netflix') 
} else {
    const WEATHER_DESCRIPTION = prompt('Describe como esta el clima entonces vato')
    console.log(`el dia esta ${WEATHER_DESCRIPTION}`)
}








// let weather = prompt ('Como esta el clima en tu rancho')
// var lluvioso
// var soleado

// if (weather = lluvioso) {
//     console.log (`El dia se encuentra soleado y puedes lavar tu ropa`)
// } else {(weather = soleado)
//     console.log (`Esta lloviendo, mete la ropa cab...`)
// }


