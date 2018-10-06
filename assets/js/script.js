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

/***database Function and configuration */

var config = {
    apiKey: "AIzaSyDU7fpi6b6XoFgRZQQeGlj1IKoCtiv_oxU",
    authDomain: "kardia-529a2.firebaseapp.com",
    databaseURL: "https://kardia-529a2.firebaseio.com",
    projectId: "kardia-529a2",
    storageBucket: "kardia-529a2.appspot.com",
    messagingSenderId: "816688482541"
};
firebase.initializeApp(config);


var database = firebase.database();

function writeUserData(userId, name, email, password) {

    firebase.database().ref('users/' + userId).update({
        username: name,
        email: email,
        password: password,
        id: userId,

    }, function (error) {
        if (error) {
            console.log('write FAil: ' + error);
        } else {
            console.log('write sucessful: ' + userId);
            location.replace("/");
        }
    });

}

function UpdateUser(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
}


/** end of database  */



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

console.log('in');
    if (password == rePassword) {

        console.log('in 2');

        var userTable = firebase.database().ref('users/');
        var userId;

       
        userTable.limitToLast(1).once('child_added', function (childSnapshot) {
            var snap = childSnapshot.val();
            console.log(JSON.stringify(snap.id, null, 4));
            var id = JSON.stringify(snap.id, null, 4);
            userId = id;
            if (isNaN(parseInt(userId))) {
                userId = 0;
            };
            userId = parseInt(userId) + 1;
            writeUserData(userId, username, email, password);

        });
       

    }



    //stop form submission
    e.preventDefault();
});



