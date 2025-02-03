document.getElementById("user-form").addEventListener("submit",function(event){
    let isvalid=true;

    document.querySelectorAll(".error-message").forEach(function(element){
        element.textContent="";
    })
    let username=document.getElementById("username").value.trim();
    if(username.length==0){
        document.getElementById("username-error").innerText="invalid user name";
        isvalid=false
    }
    let email=document.getElementById("")
    if(!isvalid){
        event.preventDefault();
    }
})