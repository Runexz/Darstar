$(document).ready(function () {

    console.log('admin doc ready)')







    $('.adminBody').hide()


    $('.adminIdBtn').on('click', function (e) {
        e.preventDefault()
        $('.adminBody').toggle()
        $('.jumbotron').slideUp()



        var curTime = moment().format('LLLL');
        console.log(curTime)

        $('.currTime').text(curTime)





    })

    $('.adminCommentLogSub').on('click', function(e){
        e.preventDefault();
        var adminAnnct = $('#adminAnncmt').val().trim('')
        console.log(adminAnnct)

        //to post in teacher and parent page

    })

})

