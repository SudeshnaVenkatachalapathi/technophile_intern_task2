console.log("hello")
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById("email").addEventListener
( "change",event => {
    console.log(event.target.value)
    if(validateEmail(event.target.value))
    {
        console.log("validemail")
        document.getElementById("email-error").style.display="none"

    }
    else{
        console.log("emailinvalid")
        document.getElementById("email-error").style.display="block"
    }

})