
const clock = document.getElementById('clock');
function updateTime (){
 const x = 10;
 const now = moment();
    const dayTime = now.format ('hh:mm:ssA');

    clock.textContent = dayTime;
    }
    let now = moment().format('LLLL');

$('#currentDay').text(now);






function hover(){
}