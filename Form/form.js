function hello() {
    var a = document.getElementById("naam").value;

    if(a == ""){
        alert("You Know Your Name Right!?");
        return false;
    }
    
    var x = document.getElementById("umar").value;
    if(x == ""){
        alert("Umar Kya Hai Apki");
        return false;
    }

    var c = document.getElementById("mail").value;
    if(c == ""){
        alert("Email Id Please.");
        return false;
    }

    
    var d = document.getElementById("pass").value;
    if(d == ""){
        alert("Password?!");
        return false;
    }

    
    document.getElementById("no").innerHTML = "This is What You Filled." + "<br>"
    document.getElementById("demo").innerHTML = " Your Name is " +a+ "." + "<br>"
    document.getElementById("demo1").innerHTML = "You are " +x+ " Years Old. " + "<br>"
    document.getElementById("demo2").innerHTML =  "Your Email is " +c+ "." +"<br>"
    document.getElementById("demo3").innerHTML = "Haha!! Almost fell into it!!, I'm not gonna tell your password to anyone it is secure(Maybe!). "



}
