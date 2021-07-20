
const clock = document.getElementById('clock');
function updateTime (){
    const now = moment();
    const dayTime = now.format ('hh:mm:ssA');

    clock.textContent = dayTime;
    }
    let now = moment().format('LLL');

$('#currentDay').text(now);


$row = $(`<div class= "row">`)
$hour = $(`<div class = "hour "></div>`)

// ---------------


$('.container').append($row)
$($row).append($hour)
function hover(){
}