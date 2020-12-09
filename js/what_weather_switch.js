console.log('what_weather')

const WEATHER = prompt ('Como esta el clima en tu rancho?')

switch(WEATHER) {
    case 'soleado' : 
        console.log('Bien, el dia esta soleado y puedes lavar tus garras')
    break;
    case 'lluvioso' :
        console.log('Mete la ropaaaa... esta lloviendo!!!')
    break;
    case 'nevando' : console.log('Saca la chamarra')
    break;
    case 'nevando' :
        console.log('Prende la tele pa ver netflix') 
    break;
    case 'nublado' :
        console.log('Prende la tele pa ver netflix')


    default : const WEATHER_DESCRIPTION = prompt('Describe como esta el clima entonces hdtpm')
        console.log(`el dia esta ${WEATHER_DESCRIPTION}`)


}