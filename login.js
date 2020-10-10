var arr=[]
window.addEventListener('load',function() {

    var form = document.querySelector('form')
    // console.log(form)
    form.addEventListener('submit',getDetails)

    
})

function getDetails() {
    event.preventDefault()
    var form = new FormData(event.target)
    var email = form.get('email')
    var password = form.get('password')
    // console.log(email,password)

    var target = JSON.parse(localStorage.getItem('users'))
    // console.log(target)
    if(!email || !password) {
        handleResponse('Please fill the required input fields')
        return
    }

    for(var i=0;i<target.length;i++) {
        if(email == target[i].email && password != target[i].password) {
            handleResponse('Wrong Password')
            return
        }
        if(email == target[i].email && password == target[i].password) {
            // console.log(email + 'login successful')
            handleResponse('Login Successful')  
        }
        else {
            handleResponse(`Account doesn't exists`)
        }
    }
}

function handleResponse(str) {
    var cont = document.getElementById('handle') 
    var para = document.createElement('para')
    para.innerHTML=str;
    cont.append(para)
 }