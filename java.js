$(document).ready(function (){

});
// inserts the local time and day data
const clock = document.getElementById('clock');
function updateTime (){
 const now = moment();
    const dayTime = now.format ('hh:mm:ssA');

    clock.textContent = dayTime;
    }
    let now = moment().format('LLLL');
$('#currentDay').text(now);

// the main interface
function main(){
    // sets hours 8am to 6pm on display
    for (x = 8; x <= 18; x++){
        let baseRow = $('.row');
        let timeRow = $('.time-block');
        timeRow.text(moment(x, 'hh').format('LT'));
        let eventRow = $(`<textarea class = "col" id='inputText${x}' type='text' name='userInput'></textarea>`);
        // $input.text(localStorage.getItem(x));
// add to the main base
$('.container').append (baseRow)


// $(timeRow).append


// code to read input will be here
$('.saveBtn').on('click', function(){
   // ??? 


})


// function hover(){
// }


// code to save all data to local storage will go here

    }
}


// run the main (core) function listed above
main()


