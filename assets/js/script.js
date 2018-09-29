$('.hamburger').click(function () {
    $(this).toggleClass('responsive');
});





function addActive(id) {


    $("ul.components li").removeClass('active');

    $(id).parent().addClass("active");

    setTimeout(closeSidebar, 300);


}

function closeSidebar() {


    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');


}

function updateProgress() {

    var bar = new ProgressBar.Circle(progress, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 0.2,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#32a537', width: 2 },
        to: { color: '#32a537', width: 6 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
            circle.path.setAttribute('fill-opacity', 0.7);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                value = value + '%';
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(0.8);

}


function clearSignup() {

    $('#signupUname').clearable();
    $('#signupEmail').clearable();
    $('#signupPsw').clearable();
    $('#signupPsw-repeat').clearable();
}




$("#login").on('submit', function (e) {

    var username = $('#login').find('input[name="uname"]').val();
    var password = $('#login').find('input[name="psw"]').val();


    console.log('username: ' + username);
    console.log('password: ' + password);

    location.replace("/");

    //stop form submission
    e.preventDefault();
});


$("#signup").on('submit', function (e) {

    var username = $('#signup').find('input[name="uname"]').val();
    var email = $('#signup').find('input[name="email"]').val();
    var password = $('#signup').find('input[name="psw"]').val();
    var rePassword = $('#signup').find('input[name="psw-repeat"]').val();


    console.log('username: ' + username);
    console.log('password: ' + email);
    console.log('password: ' + password);
    console.log('password: ' + rePassword);

    location.replace("/");

    //stop form submission
    e.preventDefault();
});



