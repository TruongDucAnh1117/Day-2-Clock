const secondHand = document.querySelector('.second-hand');
const min = document.querySelector('.min-hand');
const hour = document.querySelector('.hour-hand');
function setDate(s){
 const now = new Date();

 const seconds = now.getSeconds();
 const secondsDegrees = ((seconds/60)*360)+90;
 secondHand.style.transform = `rotate(${secondsDegrees}deg`;


 const mins = now.getMinutes();
 const minsDegrees = ((mins/60)*360)+90;
 
  min.style.transform =`rotate(${minsDegrees}deg`;



  const hours = now.getHours();
 const hoursDegrees = ((hours/12)*360)+90;
 
  hour.style.transform =`rotate(${hoursDegrees}deg`;
  console.log(hoursDegrees)

}
setInterval(setDate,1000)