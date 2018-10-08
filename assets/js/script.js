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



/** end of database  */



$("#loginButton").click(function (e) {

    var email = $('#login').find('input[name="email"]').val();
    var password = $('#login').find('input[name="psw"]').val();


    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        window.localStorage.clear();
        // [END signout]
    } else {

        if (email.length < 1) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 1) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).then( function () {
           
            $('#side-signIn').css("display", "none");

    
            $('#side-signOut').css("display", "block");
            
            window.localStorage.setItem('user', email);

            location.replace("/");
        
        
        
        
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            //document.getElementById('quickstart-sign-in').disabled = false;
            // [END_EXCLUDE]
        });
        // [END authwithemail]
    }
  
   
   

    //stop form submission
    e.preventDefault();
});






$("#signup").on('submit', function (e) {


    var email = $('#signup').find('input[name="email"]').val();
    var password = $('#signup').find('input[name="psw"]').val();
    var rePassword = $('#signup').find('input[name="psw-repeat"]').val();

    if (password == rePassword) {

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
            loadUser(username, password);

        });


        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }

        // [START createwithemail]
        firebase.auth().createUserWithEmailAndPassword(email, password).then( function () {
           
            window.localStorage.setItem('user', email);
            location.replace("/");
        
        
        
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });

    }


    e.preventDefault(); //stop form submission
});



function signOut() {

    var r = confirm("Confirm Signout");
    if (r == true) {

        firebase.auth().signOut().then( function () {

            window.localStorage.clear();
   
            $('#side-signOut').css("display", "none");
            $('#side-signIn').css("display", "block");

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           
            alert(errorMessage);
       
            console.log(error);
            //document.getElementById('quickstart-sign-in').disabled = false;
            // [END_EXCLUDE]
        });


    }

}


$(document).ready(function () {

   var user = window.localStorage.getItem('user');

   if(user != null){

    $('#side-signIn').css("display", "none");
    $('#side-signOut').css("display", "block");

   }



});


