$(document).ready(function () {


  // inserts the local time and day data using MOMENT
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

      // create save button with index for each line(for local storage) and a regular save icon from Font Awesome
      let saveButton = $(`<button class = "saveBtn col-2 col-m-2 far fa-save" data-id='${x}'></button>`)
      // start by creating the base row
      let row = $(`<div class= "row">`)
      // add the hour slot
      $hour = $(`<div class = "hour time-block col-1"> type='text'</div>`)
      // for each line per index 'x', display the time in AM/PM per 'moment' documentation
      $hour.text(moment(x, 'hh').format('LT'))
      // create input area with index location
      $input = $(`<textarea class="col" id='inputText${x}' type='text' name='userInput'></textarea>`)
      $input.text = (localStorage.getItem(x))
        

      // code to save input into local storage
      $('.saveBtn').on('click', function () {
        let notes = $(this).siblings().eq(1).val();
        let timeSlot = $(this).data("id");
        localStorage.setItem(timeSlot, notes);
       // localStorage.getItem(timeSlot, notes);
      })
     // create the main page in two lines :-)
      $('.container').append(row);
      $(row).append($hour, $input, $input.text, saveButton);


      // code to color(adding class) for each hour slot using basic if statements
      if (x < moment().format('HH')) {
        $input.addClass('past')
      } else if (x > moment().format('HH')) {
        $input.addClass('future')
      } else {
        $input.addClass('present')
      }
      // deided not to use-------------------
 // if starting the loop, it will get the data in local storage 
      //  const timeLane = localStorage.getItem(x)
      //   if (timeLane !== "") {

      //     //localStorage.getItem(  )
      //   }
      //  console.log(x)
      //  console.log(timeLane)
      

    }
       // repeats for all 10 hr slots
  }
  // run the 'main' function of the code
  main()
});
