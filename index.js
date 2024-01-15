$(document).ready(function() {
    $('.btn').on('click', function() {
        window.location.href = 'DashBoard.html';
    });
});

// $(document).ready(function() {
//     $('#mylink').click(function() {
//         $(".namefield").addClass("login");
//         e.preventDefault();
        
//     });
// });
$(document).ready(function() {
    // Use a flag to check if the class has been added
    var isLoginClassAdded = false;

    $('#mylink').click(function(e) {
        e.preventDefault();

        // Check if the class is already added
        if (!isLoginClassAdded) {
            $('.signup').html("SignIn");
            $('.message').html("Happy to see you again!");
            $(".namefield").addClass("login");
            $(".PageFlipper").html("<h3 style='font-size: large;bottom:0; text-align: left; padding: 2% 2% 2%;'>New User <a href=''>Create Account</a></h3>");
            $(".btn").html("Login"); 
            isLoginClassAdded = true;
        }
    });
});
