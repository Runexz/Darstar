$(document).ready(function () {
  console.log("Doc is ready!");
  $('.behavTab').hide()


  // buttons are displayed to show hidden tabs

  $('.parAncmnt').hide()
  $('.parCalend').hide()
  // $('.parTabThree').hide()
  // $('.parTabFour').hide()


});


$('.parTabOne').on('click', function(){
  $('.parAncmnt').toggle()


});


$('.parTabTwo').on('click', function(){
  $('.parCalend').toggle()


})






// $(".contactFontLink").hover(function () {
//   // $(this).addCss("Contact Us!");
//   // $(this).text("Contact Us!");
// });
//-----------------------------------------------------------------------------------------------

//create if statement to check that form has been filled out completely


//-----------------------------------------------------------------------------------------------
$("#formParent").submit(function (event) {
  var textar = $("#inputPassword2");
  var studentId = parseInt(textar.val().trim());
  if (textar.val().trim() === "") {
    // No message, add red highlighting to indicate error
    textar.css("box-shadow", "0 0 12px #811");
    $('.parentLogAppend').text("Please enter the student's ID")
    $('.parentLogAppend').slideDown()
    event.preventDefault();

  } else {
    API.getClassroomsbyId(studentId)
    console.log('form is completed')

    /////////////////////////////////////////////////////////////////////////////////////

    //display result of id search here ---- 
    //place to call ajax to call api for mysql: pull all data then we can push to specific div
    //

    /////////////////////////////////////////////////////////////////////////////////////

    // $('.parentLogAppend').text("Please enter a comment!")

    // var formVal = $('.idForm').val().trim()

  //   var stuIdParLog = $('#inputPassword2').val().trim('');
  // console.log("student ID for parent log-in: " + stuIdParLog);


    $('.jumbotron').slideUp()

    $('.behavTab').show()


    event.preventDefault();


  }
});


// if(object.ColorFromMyQL = 'blue'){

//   $('behavColor').addClass('bg-primary');

// }else if(object.ColorFromMyQL = 'green'){
//   $('behavColor').addClass('bg-success');


// }else if(object.ColorFromMyQL = 'yellow'){
//   $('behavColor').addClass('bg-warning');

// }else if(object.ColorFromMyQL = 'orange'){
//   $('behavColor').addClass('bg-orange');

// }else if(object.ColorFromMyQL = 'red'){
//   $('behavColor').addClass('bg-danger');
// }



