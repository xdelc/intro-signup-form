function formValidation() {
    var fName = $("#fName").val();
    var lName = $("#lName").val();
    var email = $("#email").val();
    var pwd = $("#pwd").val();
    var count = 0; 

    if(fName == "") {
        $("#fName").addClass("border-error");
        $("#first-name-error").addClass("error-text");
        $("#fName").addClass("error-bg");
        count++;
    }
    if(lName == "") {
        $("#lName").addClass("border-error");
        $("#last-name-error").addClass("error-text");
        $("#lName").addClass("error-bg");
        count++;
    }

    if(email == "" || !validateEmail(email)) {
        $("#email").addClass("border-error");
        $("#email-error").addClass("error-text");
        $("#email").addClass("error-bg");
        count++;
    }
    if(pwd == "") {
        $("#pwd").addClass("border-error");
        $("#pwd-error").addClass("error-text");
        $("#pwd").addClass("error-bg");
        count++;
    }

    // if (count > 0) {
    //     $(".form-control").on("input", function(e) {
    //       $(e.target).removeClass("border-red");
    //       $("#" + e.target.name).removeClass("error-text");
    //     });
    //   }

    if(count > 0) {
        return false;
    }

    if(count === 0){
        return true;
    }

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}