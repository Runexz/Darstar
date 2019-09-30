$(document).ready(function () {

    console.log('admin doc ready)')

    $('.parTabUno').hide();
    $('.parTabDos').hide();

    $('.adminBodyOne').hide();  
    $('.adminBodyTwo').hide();  




    $('.adminIdBtn').on('click', function (e) {
        e.preventDefault()
        // $('.adminBody').toggle()
        $('.jumbotron').slideUp()
        $('.parTabUno').show();
        $('.parTabDos').show();



        var curTime = moment().format('LLLL');
        console.log(curTime)

        $('.currTime').text(curTime)





    })

    $('.parTabUno').on('click', function(){

        $('.adminBodyOne').toggle();
        $('.adminBodyTwo').hide();

    })


    
    $('.parTabDos').on('click', function(){

        $('.adminBodyTwo').toggle();
        $('.adminBodyOne').hide();

    })





    $('.adminCommentLogSub').on('click', function(e){
        e.preventDefault();
        var adminAnnct = $('#adminAnncmt').val().trim('')
        console.log(adminAnnct)

        //to post in teacher and parent page

    })

})

