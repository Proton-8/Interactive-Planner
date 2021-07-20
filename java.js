
const clock = document.getElementById('clock');
function updateTime (){
 const x = 10;
 const now = moment();
    const dayTime = now.format ('hh:mm:ssA');

    clock.textContent = dayTime;
    }
    let now = moment().format('LLL');

$('#currentDay').text(now);

$input = $(`<textarea class = "col" id='inputText$(x)' type='text' name='userInput'></textarea>`)
$row = $(`<div class= "row">`)
$hour = $(`<div class = "hour "></div>`)

// ---------------


$('.container').append($row)
$($row).append($hour)
hourNow = moment().format('HH')
$timeBlock = x
if($timeBlock == hourNow){
console.log ('working so far')
    $input.addClass('present')
} else if ($timeBlock < hourNow){
    $input.addClass('past')
} else {
    $input.addClass('future')
}




function hover(){
}