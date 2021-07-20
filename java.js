

const clock = document.getElementById('clock');
function updateTime (){
    const now = moment();
    const dayTime = now.format ('hh:mm:ssA');

    clock.textContent = dayTime;
    }
let now = moment().format('dddd, MMMM Do YYYY, hh:mm');
$('#currentDay').text(now);
$('currentDay').append.text(dayTime);

$row = $(`<div class= "row">`)


function hover(){
}