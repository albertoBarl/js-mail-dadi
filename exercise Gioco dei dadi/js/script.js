// 1- Generare numero per player 1
// 2- Generare numero per AI
// 3- Stabilire vincitore
// 3.1 IF player 1 > AI, vincitore
// 3.2 ELSE perdente

let player_num;
let AI_num;

player_num = ((Math.random() * 6)+1).toFixed(0);
AI_num = ((Math.random() * 6)+1).toFixed(0);

if(player_num > AI_num){
    alert(`Con ${player_num} ha vinto il PLAYER`);

}
else if(player_num = AI_num){
    alert(`${player_num} E ${AI_num}, AVETE PAREGGIATO!`)
}
else{
    alert(`Con ${AI_num} ha vinto l'AI`);

}















