var arr=[]
window.addEventListener('load',function() {
    var form = document.querySelector('form')
    form.addEventListener('submit',handleRegister)
})
function handleRegister() {
    event.preventDefault()
    var form = new FormData(event.target)
    var name = form.get('name')
    // console.log(name.length)
    if(name.length<=4){
        handleInput("Name should me min 4 char")
    }
    var password = form.get('password')
    if(password.length<6){
        handleInput("Password should me min 6 char")
    }
    var email = form.get('email')

    for(var i=0;i<arr.length;i++) {
        if(email == arr[i].email) {
            handleResponse("Account already exists")
        }
    }
    var payload = {
        name:name,
        password:password,
        email:email
    }
    arr.push(payload)
    localStorage.setItem('users',JSON.stringify(arr))
    //  console.log(arr[0].email)
}
function handleInput(error){ 
    var text=document.getElementById('handleinput')
    var p=document.createElement('p')
    p.innerHTML=error;
    text.append(p)  
}
 function handleResponse(str) {
    var cont = document.getElementById('handle') 
    var para = document.createElement('para')
    para.innerHTML=str;
    cont.append(para)
}