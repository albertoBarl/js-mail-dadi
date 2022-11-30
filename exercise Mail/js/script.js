// 1- Chiedere l'email
// 2- Confronto con la lista delle email autorizzate ad accedere
// 3- Stampa messaggio
// 3.1 IF- Può accedere
// 3.2 ELSE- Non può accedere

const container =document.querySelector('col-12')
const email_array =['aldo@mail.1', 'giovanni@mail.2', 'giacomo@mail.3'];
let mail = prompt('Inserisci la tua email');
let m_try = false;

for(i=0; i<email_array.length; i++){

    if(mail == email_array[i]){
        m_try = true
    }
    else{
    }

    if(m_try === true){
        console.log('Accesso avvenuto');
    }
    else{
        console.log('Accesso negato')
    }
    
}
