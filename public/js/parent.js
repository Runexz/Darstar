
    $(document).ready(function () {
      console.log("Doc is ready!");
      $('.behavTab').hide()


    });



    $(".contactFontLink").hover(function() {
        // $(this).addCss("Contact Us!");
        // $(this).text("Contact Us!");
      });

 
    //-----------------------------------------------------------------------------------------------

    //create if statement to check that form has been filled out completely


    //-----------------------------------------------------------------------------------------------
    $("#formParent").submit(function (event) {
      var textar = $("#inputPassword2");
      if (textar.val().trim() === "") {
        // No message, add red highlighting to indicate error
        textar.css("box-shadow", "0 0 12px #811");
        $('.parentLogAppend').text("Please enter the student's ID")
        $('.parentLogAppend').slideDown()
        event.preventDefault();

      } else {

        console.log('form is completed')

        /////////////////////////////////////////////////////////////////////////////////////

        //display result of id search here ---- 
        //place to call ajax to call api for mysql: pull all data then we can push to specific div
        //

        /////////////////////////////////////////////////////////////////////////////////////

        $('.parentLogAppend').text("Please enter the ID!")

        var formVal = $('.idForm').val()

        console.log(formVal)

        $('.jumbotron').slideUp()-

        $('.behavTab').show()


        event.preventDefault();


      }
    });



  