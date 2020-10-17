window.addEventListener('load',function(){
    var credit=document.getElementById('credit')
    credit.addEventListener('click',handleCredit) 

    var debit=document.getElementById('debit')
    debit.addEventListener('click',handleDebit) 
})

function handleCredit(){
    console.log("credit")
}
function handleDebit(){
    console.log("debit")
}
