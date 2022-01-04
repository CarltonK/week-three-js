$(document).ready(function () {
    // Tag#TagId
    $('button#green').click(function () {
        $('body').removeClass();
        $('body').addClass('green-background')
        // Option Two
        // $('body').css('background-color','green')
    })
    $('button#yellow').click(function () {
        $('body').removeClass();
        $('body').addClass('yellow-background')
    })
    $('button#red').click(function () {
        $('body').removeClass();
        $('body').addClass('red-background')
    })
})
