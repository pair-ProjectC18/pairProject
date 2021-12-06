var $body = $("body")
$body.append("<h1 id=title>GYM  Shop</h1>");
$("#title ").css({
    "background-color": "black",
    "width":"400px",
    "border": "10px solid red",
    //"padding": "40px",
    //"margin": "30px",
    "width": "300 px ",
    //"margin ": "auto ",
    //"background ": "gray ",
    "text-align": "center",
     "color": "red",
    ///"background-color": "lightgrey",
    //"width": "300 px ",
    // "border": "solid green ",
     //"padding": "50 px ",
    // "margin": "20 px"
})
$body.css({
    "background-image": "url('./70-707080_dwayne-johnson-gym-the-rock-bodybuilder.jpg')",
    "background-size": " cover ",
    "background - position - y": "inherit ",
    "background-repeat": "no-repeat"
})
var input1=$("<input type=text id=FirstName> <br>")
input1.attr("placeholder" ," here your first name")
 input1.appendTo($body)
 var input2=$("<input type=text id=LastName> <br> ")
 input2.attr("placeholder"," your LastName")
 input2.appendTo($body)
 var input3=$("<input type=text id=email><br>")
 input3.attr("placeholder" ," here your email")
 input3.appendTo($body)
 var input4= $("<input type=text id=number><br>")
 input4.attr("placeholder" ," here your phone number")
 input4.appendTo($body)
 var input5= $("<input type=text id=passeword  required placeholder=passWord><br>")
 input5.attr("placeholder" ," here your password")
 input5.appendTo($body)
 var input6= $("<input type=text id=confirm  required placeholder=confirmpassword><br>")
 input6.attr("placeholder" ," confirm your password here")
 input6.appendTo($body)
var button1 =$("<button>clickHere to sign up!</button><br>")
button1.attr("id","singIn")
button1.appendTo($body)
var input7=$("<input type=text id=gmail><br>")
input7.attr("placeholder" ," your mail")
 input7.appendTo($body)
 var input8=$("<input type=text id=FirstName ><br>")
 input8.attr("placeholder" ," here your password")
 input8.appendTo($body)
var button2 =$("<button>clickHere to log in !</button><br>")
button2.attr("id","login")
button2.appendTo($body)


