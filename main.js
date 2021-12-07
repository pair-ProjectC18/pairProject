var $body = $("body")
$("#p").append("<h1 id=title>GYM  Shop</h1>");
$("#title ").css({
    "background-color": "black",
    "width":"400px",
    "border":"10px solid red",
    "width":"300 px ",
    
    "text-align":"center",
    "color":"red",   
})
$(".signUp").css({
    "width":"100%",
    "text-align":"center",
    "width": "100%",
    // "text-align": "center",
    // "position":"absolute",
    // "bottom":"230px;",
})
$(".signIn").css({
    "width":"100%",
    "text-align":"center",
    "width": "100%",
    // "text-align": "center",
    // "position": "absolute",
    // "bottom": "4000px;",
})
$body.css({
    "background-image":"url('./70-707080_dwayne-johnson-gym-the-rock-bodybuilder.jpg')",
    "background-size":" cover ",
    "background - position - y":"inherit ",
    "background-repeat":"no-repeat"
})
$(".narve").css({
    "list-style-type": "none",
  "margin":"0",
  "padding":"0",
  "overflow":"hidden",
  "background-color": "black",
})
$("li").css ({
    "float": "left",
  })
  $('a').css({
    "display": "block",
    "color": "white",
    "text-align": "center",
    "padding": "35px 110px",
    "text-decoration": "none",
  })
  
var input1=$("<input type=text id=FirstName> <br>")
input1.attr("placeholder" ," here your first name")
 input1.appendTo(".signUp")
 var input2=$("<input type=text id=LastName> <br> ")
 input2.attr("placeholder"," your LastName")
 input2.appendTo(".signUp")
 var input3=$("<input type=text id=email><br>")
 input3.attr("placeholder" ," here your email")
 input3.appendTo(".signUp")
 var input4= $("<input type=text id=number><br>")
 input4.attr("placeholder" ," here your phone number")
 input4.appendTo(".signUp")
 var input5= $("<input type=text id=passeword ><br>")
 input5.attr("placeholder" ," here your password")
 input5.appendTo(".signUp")
 var input6= $("<input type=text id=confirm ><br>")
 input6.attr("placeholder" ," confirm your password here")
 input6.appendTo(".signUp")
var button1 =$("<button>clickHere to sign up!</button><br>")
button1.attr("id","singin")
button1.appendTo(".signUp")
var input7=$("<input type=text id=gmail><br>")
input7.attr("placeholder" ," your mail")
 input7.appendTo(".signIn")
 var input8=$("<input type=text id=FirstName ><br>")
 input8.attr("placeholder" ," here your password")
 input8.appendTo(".signIn")
var button2 =$("<button>clickHere to log in !</button><br>")
button2.attr("id","login")
button2.appendTo(".signIn")
//$(".signIn").hide()









