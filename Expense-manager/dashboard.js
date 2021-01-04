function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var search = document.getElementById("search")
  var searchButton = document.getElementById("search-btn")
  var totalIncome = document.getElementById("total-income")
  var totalExpenses = document.getElementById("total-expenses")
  var balanceAmount = document.getElementById("balance")
  var form = document.querySelector("form")
  var table  = document.getElementById("table")
  var welcome = document.getElementById("welcome")
  var image = document.getElementById('image')

window.onload = () => {

  var users = JSON.parse(localStorage.getItem("users"))
  var curr_user = JSON.parse(localStorage.getItem('curr_user'))

  welcome.textContent = `Welcome, ${curr_user.name}`

  if(curr_user.name == 'bhupendra') {
    image.setAttribute('src',"https://ca.slack-edge.com/T017PE6KCQK-U017QLNEQQJ-4c0f3a286af9-512")
  }
  else image.setAttribute('src',"https://ca.slack-edge.com/T017PE6KCQK-U018F6NV9EC-f0be53e2bfec-512")

  var balance = 0
  var expenses = 0
  var income = 0

  for(var i=0; i<curr_user.transactions.length; i++) {
    if(curr_user.transactions[i].type == 'credit') {
      balance += Number(curr_user.transactions[i].amount)
      income += Number(curr_user.transactions[i].amount)
    }
    else 
    {
      balance -= Number(curr_user.transactions[i].amount)
      expenses += Number(curr_user.transactions[i].amount)
    }
  }

  console.log(balance);
  balanceAmount.textContent = balance
  totalExpenses.textContent = expenses
  totalIncome.textContent = income

  printTransactions(curr_user.transactions)

  console.log(curr_user.transactions);

  form.onsubmit = (e) => {
    e.preventDefault()
    var form  = new FormData(e.target)
    // console.log(form)

    var title = form.get('title')
    var amount = form.get('amount')
    var type = form.get('type')

    const transaction = {
      title:title,
      amount:amount,
      type:type,
      timestamp:new Date().toLocaleDateString()
    }

    console.log(transaction)
    

    console.log(users);

    for(var i=0 ; i<users.length; i++) {
      if(users[i].email == curr_user.email) {
        // console.log(users[i].transactions);
        users[i].transactions.push(transaction)
        curr_user.transactions.push(transaction)
      }
    }

    localStorage.setItem('curr_user',JSON.stringify(curr_user))
    localStorage.setItem("users",JSON.stringify(users))
    
    printTransactions(curr_user.transactions)
  }
  // console.log(curr_user);

}

function printTransactions(arr) {
  table.innerHTML = ""
  for(var i=0; i<arr.length; i++) {
    var row = document.createElement('tr')
    row.innerHTML = `
      <tr>
        <td>${arr[i].title}</td>
        <td>${arr[i].type}</td>
        <td>${arr[i].amount}</td>
        <td>${arr[i].timestamp}</td>
      </tr>
    `
    table.append(row)
  }
}