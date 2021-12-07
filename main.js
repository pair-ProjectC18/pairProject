var $body = $("body")
/////////////////////////////////
$(".raw").hide()
///////////////////////////
$(".raw1").hide()
///////////////////////////
$(".narve").hide()
////////////////////////:
$(".signIn").hide()
/////////////////////////////:
$(".raw2").hide()
////////////////////////////
$(".raw3").hide()
///////////////////////////
$(".raw4").hide()
/////////////////////
$(".column1").hide()
//////////////////////
$("#p ").append("<h1 id=title>GYM Shop</h1>")
// /////////////////////////////
/////////////////////////////////
///////////////////////////////////////////////////// CSS ///////////////////////////////////////////////////////
$("#title ").css({
    "background-color": "black",
    "width": "400px",
    "border": "10px solid red",
    "width": "300 px ",
    "text-align": "center",
    "color": "red"
});
///////////////////////////////////////
$(".signUp").css({
    "width": "100%",
    "text-align": "center",
    "width": "100%",
});
/////////////////////////////////////
$(".signIn").css({
    "width": "100%",
    "text-align": "center",
    "width": "100%"

});
///////////////////////////////////////
$body.css({
    "background-image": "url('pictures/70-707080_dwayne-johnson-gym-the-rock-bodybuilder.jpg')",
    "background-size": " cover ",
    "background - position - y": "inherit ",
    "background-repeat": "no-repeat"
})
///////////////////////////////////////
$(".narve").css({
    "list-style-type": "none",
    "margin": "0",
    "padding": "0",
    "overflow": "hidden",
    "background-color": "black"
})
////////////////////////////////////////
$("li").css({
    "float": "left"
});
/////////////////////////////////////////
$('a').css({
    "display": "block",
    "color": "white",
    "text-align": "center",
    "padding": "35px 110px",
    "text-decoration": "none"
});
/////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////////////////////////////////////////////// Sign -Up ////////////////////////////////////////////////////////////
var input1 = $("<input type=text id=FirstName> <br>")
input1.attr("placeholder", " here your first name")
input1.appendTo(".signUp")
///////////////////////////////////
var input2 = $("<input type=text id=LastName> <br> ")
input2.attr("placeholder", " your LastName")
input2.appendTo(".signUp")
///////////////////////////////////////
var input3 = $("<input  type=email><br>")
input3.attr("placeholder", " here your email")
input3.appendTo(".signUp")
///////////////////////////////////
var input4 = $("<input type=number id=number><br>")
input4.attr("placeholder", " here your phone number")
input4.appendTo(".signUp")
///////////////////////////////////
var input5 = $("<input type=password id=passeword ><br>")
input5.attr("placeholder", " here your password")
input5.appendTo(".signUp")
//////////////////////////////////
var input6 = $("<input type=password id=confirm ><br>")
input6.attr("placeholder", " confirm your password here")
input6.appendTo(".signUp")
////////////////////////////////////
var button1 = $("<button>SIGN UP </button><br>")
button1.attr("id", "signup")
button1.appendTo(".signUp")
/////////////////////////////////
////////////////////////////////////////    Sign-In   /////////////////////////////////////////////////////
var input7 = $("<input type=email id=gmail><br>")
input7.attr("placeholder", " your mail")
input7.appendTo(".signIn")
////////////////////////////////////////
var input8 = $("<input type=password id=FirstName ><br>")
input8.attr("placeholder", " here your password")
input8.appendTo(".signIn")
////////////////////////////////////////
var button2 = $("<button>LOG IN</button><br>")
button2.attr("id", "login")
button2.appendTo(".signIn")
//////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////
$("#signup").click(function() {
    if (input3.val().length > 0 && input1.val().length > 0 && input2.val().length > 0 && input2.val().length > 0 && input4.val().length > 0 && input5.val().length > 0 && input6.val().length > 0 && input5.val() === input6.val()) {
        $(".signUp").hide()
        $(".signIn").show()

    } else {
        alert('Please fill all your information')
    }
});
/////////////////////////////////////////////////////////////////////
$("#login").click(function() {
    if (input7.val() === input3.val() && input5.val() === input8.val()) {
        $(".signIn").hide()
        $("#p").hide()
        $(".narve").show()
        $(".raw").show()
        $(".raw1").hide()
    } else {
        alert('Please Check Your Password or email')
    }
});
////////////////////////////////////////////////////////////////////////
$(".equipement").click(function() {
    $(".raw").hide()
    $(".raw1").hide()
    $("#coach").hide()
    $(".raw3").hide()
});
//////////////////////////////////////////////////////////////////
$(".coachs").click(function() {
    $(".raw").hide()
    $(".raw1").hide()
    $(".raw4").show()
    $(".raw5").hide()
});
////////////////////////////////////§///////////////////
$(".dietary").click(function() {
$(".card1").show()
    $(".card3").show()
    $(".card2").show()
})