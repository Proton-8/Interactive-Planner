$(document).ready(function () {


// inserts the local time and day data
const clock = document.getElementById('clock');

function updateTime() {
    const now = moment();
    const dayTime = now.format('hh:mm:ssA');

    clock.textContent = dayTime;
}
let now = moment().format('LLLL');
$('#currentDay').text(now);


// the main interface/funtion
function main() {
     
  //set hours from 8 to 6pm 
    for (x = 8; x <= 18; x++) {

        // start by creating the base row
        let row = $(`<div class= "row">`)
        // add the hour slot
        $hour = $(`<div class = "hour time-block col-1"> type='text'</div>`)
        // for each line per index 'x', display the time in AM/PM per 'moment' documentation
        $hour.text(moment(x, 'hh').format('LT'))
        // create input area with index location
        $input = $(`<textarea class = "col" id='inputText${x}' type='text' name='userInput'></textarea>`)
        $input.text =(localStorage.getItem(x))
        // create save button with index for each line(for local storage) and a regular save icon from Font Awesome
        let saveButton = $(`<button class = "saveBtn col-2 col-m-2 far fa-save" data-id='${x}'></button>`)
        
        // create the main page in two lines :-)
        $('.container').append(row)
        $(row).append($hour,$input,saveButton)  
       

        // code to read input will be here soon
        $('.saveBtn').on('click', function () {
            // 

        })
// code to color each hour slot
        if(x <  moment().format('HH') ){
          $input.addClass('past')
      } else if (x >  moment().format('HH')){
          $input.addClass('future')
      } else {
          $input.addClass('present')
      }

        // code to save all data to local storage will go here soon ---------------------

    }
    //$('.tr').append(`<td class='td'>${y}</td>`)
    // $('.tr').append(eventRow)
}
main()
});

// reference code only -------------------

    /* <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table> */


    