var arr = JSON.parse(localStorage.getItem('users')) || []

window.addEventListener('load',function() {
    var form = document.querySelector('form')
    form.addEventListener('submit',handleRegister)
    var login =document.getElementById("login")
    login.addEventListener('click',redirect)

    console.log(arr)

})
function handleRegister() {
    event.preventDefault()
    var form = new FormData(event.target)
    var name = form.get('name')
    // console.log(name.length)
    if(name.length<4){
        handleInput("Name should me min 4 char")
        return
    }
    var password = form.get('password')
    if(password.length<6){

        handlePassword("Password should me min 6 char")

        handleInput("Password should me min 6 char")
        return
    }
    var email = form.get('email')

    for(var i=0;i<arr.length;i++) {
        if(email.length>3 && email == arr[i].email) {
            handleResponse("Account already exists")
            return
        }
    }
    var payload = {
        name:name,
        password:password,
        email:email,
        transactions:[]
    }
    arr.push(payload)

    localStorage.setItem('users',JSON.stringify(arr))
    setTimeout(() => {
        location.href="login.html"
    }, 2000);
    //  console.log(arr[0].email)
}
function handleInput(error){ 
    var text=document.getElementById('handleinput')
    text.innerHTML=""
    var p=document.createElement('p')
    p.innerHTML=error;
    text.append(p)  
}



function handleResponse(str) {
    var cont = document.getElementById('handle') 
    cont.innerHTML=""

    var para = document.createElement('para')
    para.innerHTML=str;
    cont.append(para)
}

function redirect(){
   return location.href = "login.html";
}
function handlePassword(error){
    var text=document.getElementById('handlePassword').
    text.innerHTML=""
    var p=document.createElement('p')
    p.innerHTML=error;
    text.append(p)
}
