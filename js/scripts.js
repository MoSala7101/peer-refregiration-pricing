/* *********************************
Coded by: Mohamed Salah
email: sala7thedeveloper@gmail.com
********************************** */


/* Packages Billing Type Toggler */

$('#togglerButton').change(function() {
    /* if checked -> annually is active */
    if ($(this).prop("checked")) {
        /* Change toggler titles color */
        $('.annually').addClass('active');
        $('.monthly').removeClass('active');
        /* Change toggler area background */
        $('.toggler-area').addClass('toggled');
        /* Change toggler position */
        moveBallLeft();

    } else {
        /* Change toggler titles color */

        $('.annually').removeClass('active');
        $('.monthly').addClass('active');
        /* Change toggler are background */
        $('.toggler-area').removeClass('toggled');
        moveBallRight();
    }
});



/* *******************************
Change toggler position functions
****** **************************/
function moveBallLeft() {
    $('.toggler-ball').css('left', '5px');
    $('.toggler-ball').css('right', 'initial');

}

function moveBallRight() {
    $('.toggler-ball').css('right', '5px');
    $('.toggler-ball').css('left', 'initial');

}



/* ****************************
Select package button function
****** ***********************/

/* adding the star to make the function works for the button and the arrow too */
$('.select-container *').click(function(event) {

    let buttonId = $(this).attr('id');
    buttonId = '#' + buttonId
        /* check if selected */
    if ($(buttonId).parent().hasClass('selected')) {

        /* Show cancel subscribtion button */
        showCancelButton(event.target.id);

    } else {

        /* Select this package */
        selectPackage(event.target.id)

    }
});



/* ****************************
cansel package button function
****** ***********************/
$('.cancel-button').click(function(event) {
    unsubscribePackage(event.target.id)
});





/* ********************************************
== Select and unsubscribe helping functions == 
************** ******************************/

/* Show the cancel subscribtion button */
function showCancelButton(buttonId) {
    buttonId = '#' + buttonId;
    console.log("Value of: showCancelButton -> buttonId", buttonId);
    /* check if cancel button is shown */
    if ($(buttonId).parent().find('.cancel-button').hasClass('hidden')) {

        /* Show cancel subscribtion button */
        $(buttonId).parent().find('.cancel-button').removeClass('hidden')

    } else {

        $(buttonId).parent().find('.cancel-button').addClass('hidden')
    }
}

/* Package Select button */
function selectPackage(buttonId) {
    buttonId = '#' + buttonId;

    /* This package is not selected .. select it */
    $(buttonId).parent().addClass('selected')
        /* change the button text */
    $(buttonId).text('SUBSCRIBED')

    /* show next billing hint */
    $(buttonId).parent().parent().find('.package-billing-info').removeClass('hidden')

    /* Change package info text */
    $(buttonId).parent().parent().find('.package-info').text('BILLED MONTHLY')


    /* update subscribed number */
    updateSubscribedCount();
}




/* Unsubscribe package function */

function unsubscribePackage(cancelButtonId) {
    cancelButtonId = '#' + cancelButtonId;

    $(cancelButtonId).parent().removeClass('selected')
        /* change the button text */
    $(cancelButtonId).parent().find('.select-button').text('SELECT')

    /* hide the cancel button */
    $(cancelButtonId).addClass('hidden')

    /* hide next billing hint */
    $(cancelButtonId).parent().parent().find('.package-billing-info').addClass('hidden')

    /* Change package info text */
    $(cancelButtonId).parent().parent().find('.package-info').html(' /YEAR PER DEVICE <br /> BILLED ANNUALLY')

    /* update subscribed number */
    updateSubscribedCount();
}


/* Update subscritions count function */
function updateSubscribedCount() {

    /* get subscribed packages number */
    let subscribedCount = $('.select-container.selected').length;
    $('#subscribedLabel .number').text(subscribedCount)
}




/* *********************************************
XX Select and unsubscribe helping functions XX
************** *******************************/





/* **************************************
== Mobile and Tablet Navbar functions == 
************** ************************/



$('#openMobileNavbar').click(function() {
    openMobileNavbar();
})

$('#closeMobileNavbar').click(function() {
    hideMobileNavbar();
})

/* Hide mobile navbar if any menu is clicked */
$('.navbar-menu').click(function() {
    hideMobileNavbar();
})



/* == Show and hide mobile navbar functions == */

function openMobileNavbar() {

    $('.mobile-navbar').removeClass('hidden');
    /* Hide burger icon */
    $('#openMobileNavbar').addClass('hidden');

    /* Show close button */
    $('#closeMobileNavbar').removeClass('hidden');

}


function hideMobileNavbar() {
    $('.mobile-navbar').addClass('hidden');
    /* show burger icon */
    $('#openMobileNavbar').removeClass('hidden');


    /* hide close button */
    $('#closeMobileNavbar').addClass('hidden');
}
/* XX Show and hide mobile navbar functions XX */




/* **************************************
XX Mobile and Tablet Navbar functions XX
************** ************************/