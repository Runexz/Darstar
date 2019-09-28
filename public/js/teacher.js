
    $(document).ready(function () {
      console.log("document is ready!");
      $('.teaBeLogTab').hide();

    });


    //-----------------------------------------------------------------------------------------------

    //create if statement to check that form and comment have been filled out completely


    //-----------------------------------------------------------------------------------------------






    $("#form").submit(function (event) {
      var textarea = $("#inputPassword3");
      if (textarea.val().trim() === "") {
        // No message, add red highlighting to indicate error
        textarea.css("box-shadow", "0 0 12px #811");
        $('.teacherLogAppend').text("Please enter the student's ID")
        event.preventDefault();

      } else {

        console.log('form is completed')

        


        /////////////////////////////////////////////////////////////////////////////////////

        //display result of id search here ---- place to call ajax to call api for mysql

        /////////////////////////////////////////////////////////////////////////////////////

       


        // $('.parentLogAppend').text("Please enter the ID!")

        var parFormVal = $('.parIdForm').val().trim("")

        console.log('student ID input' + parFormVal)

        $('.jumbotron').hide();

        $('.teaBeLogTab').show();

    



        event.preventDefault();


      }
    });

    disableBtn()





    function disableBtn() {

      $(".teachBehavLog").attr("disabled", true)

      $("#teachComment").on('click', function () {

        var radioOne = $("input[name='inlineRadioOptions4']:checked").val()
        var radioTwo = $("input[name='inlineRadioOptions3']:checked").val()
        var radioThree = $("input[name='inlineRadioOptions2']:checked").val()
        var radioFour = $("input[name='inlineRadioOptions1']:checked").val()

        console.log(radioOne)
        console.log(radioTwo)
        console.log(radioThree)
        console.log(radioFour)


        
      

      var textboxOne = $("#teachComment").val().trim().length ;
      console.log("boxlength is: " + textboxOne)





        if (parseInt(radioOne) >= 1 && parseInt(radioTwo) >= 1 && parseInt(radioThree) >= 1 && parseInt(radioFour) >= 1 && textboxOne >=2) {

          console.log('true')

          $(".teachBehavLog").attr("disabled", false);



        } else {

          console.log('not selected')

          $('.textCheckForm').text('Please complete the entire form above!')


        }

      })
    }





    // button on-click for teacher submit behavior log


    $('.teachBehavLog').on('click', function (event) {


      


      var textbox = $("#teachComment");
      if (textbox.val().trim() === "") {

        event.preventDefault();
        // No message, add red highlighting to indicate error
        textbox.css("box-shadow", "0 0 12px #811");

        console.log('clicked behavior log btn');



      } else {

        console.log('form 2 is completed ')


        // console.log('ready to submit 2')


      }





      // collecting data input from teacher
      console.log('-----------------------------------------------------------------------------')

      console.log('-----------------------------------------------------------------------------')

      console.log('-----------------------------------------------------------------------------')

      console.log('DATA TO SEND TO MYSQL BELOW')

      console.log('-----------------------------------------------------------------------------')
      var parFormVal = $('.parIdForm').val().trim("")

      console.log("Student's ID: " + parFormVal)

      console.log('-----------------------------------------------------------------------------')


      var radioValue = $("input[name='inlineRadioOptions4']:checked").val();
      if (radioValue) {
        console.log("perseverance: " + radioValue);
      }

      var radioValue2 = $("input[name='inlineRadioOptions3']:checked").val();
      if (radioValue2) {
        console.log("Leadership: " + radioValue2);
      }

      var radioValue3 = $("input[name='inlineRadioOptions2']:checked").val();
      if (radioValue3) {
        console.log("Uplift: " + radioValue3);
      }
      var radioValue4 = $("input[name='inlineRadioOptions1']:checked").val();
      if (radioValue4) {
        console.log("Scholarship: " + radioValue4);
      }

      console.log('-----------------------------------------------------------------------------')


      var scoreTotal = (parseInt(radioValue) + parseInt(radioValue2) + parseInt(radioValue3) + parseInt(radioValue4));


      var teacherCommment = $('#teachComment').val();

      console.log("teacher comment: " + teacherCommment)




      console.log('-----------------------------------------------------------------------------')

      var isHwChecked = $("#formWork input[type='radio']:checked").val();
      // console.log(isHwChecked)

      console.log('missing work: ' + isHwChecked)

      console.log('-----------------------------------------------------------------------------')

      console.log("total score: " + scoreTotal)

      // action once data has been collected

      var behaviorColor;

      if (scoreTotal > 18 && scoreTotal <= 20) {


        behaviorColor = 'blue';

      } else if (scoreTotal > 16 && scoreTotal <= 18) {

        behaviorColor = 'Green';

      } else if (scoreTotal > 14 && scoreTotal <= 16) {

        behaviorColor = 'Yellow';

      } else if (scoreTotal >= 13 && scoreTotal <= 14) {

        behaviorColor = 'Orange';

      } else {

        behaviorColor = 'Red';

      }



      console.log('color: ' + behaviorColor)


      


console.log('-------------------------------------------------')
      


    })



  