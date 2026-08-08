const user = document.getElementById("user-login")
const pass = document.getElementById("pass-login")

function Login(event) {
    if (user.value === "studentuser" && pass.value === "123456") { //homepage to student account

        setTimeout(() => {
            Swal.fire({
            title: 'Terms And Conditions',
            text: 'By creating an account and using the TERESIANGO E-Shop System, you agree in the About, Terrms and Condition By clicking "OK", you confirm that you have read and accepted.',   
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
             window.location.href = "student_acc_view.html"
            });

        },100)
    }

    else if(user.value === "adminuser" && pass.value === "654321") { //homepage to admin acc

        setTimeout(() => {
            Swal.fire({
            title: '',
            text: 'By creating an account and using the TERESIANGO E-Shop System, you agree in the About, Terrms and Condition By clicking "OK", you confirm that you have read and accepted.',   
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
             window.location.href = "admin_acc_view.html"
            });
        },100)
    }

    else if(user.value === "staffuser" && pass.value === "000000") {  // homepag to staff acc view

        setTimeout(() => {
            Swal.fire({
            title: '',
            text: 'By creating an account and using the TERESIANGO E-Shop System, you agree in the About, Terrms and Condition By clicking "OK", you confirm that you have read and accepted.',   
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
             window.location.href = "staff_acc_view.html"
            });
        },100)
    }

    else {
        alert("Wrong Credentials")
    }
}

function back() { //login html
    window.location.href = "homepage.html"
}

// STD_ACC_VIEW LOGOUT
function Logout() {
    setTimeout(() => {
        window.location.href = "homepage.html"
    },3000)
}

// STUDENT VIEW FORM
const one_name = document.getElementById("name")
const one_age = document.getElementById("age")
const one_addr = document.getElementById("address")
const one_id_std = document.getElementById("std-id")

const two_name = document.getElementById("names")
const two_age= document.getElementById("ages")
const two_addr = document.getElementById("addresss")
const two_id_std = document.getElementById("ids")

function update() { //update form
    one_name.textContent= two_name.value
    one_age.textContent= two_age.value
    one_addr.textContent= two_addr.value
    one_id_std.textContent= two_id_std.value
}



// CHATBOX
function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    // simple reply
    setTimeout(() => {
      addMessage("staff: " + message, "bot");
    }, 2000);
  }

  function addMessage(text, type) {
    const chatBox = document.getElementById("chatBox");

    const msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.innerText = text;

    chatBox.appendChild(msg);

    // auto scroll
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // send on Enter key
  document.getElementById("messageInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });




//   BUYY HTML BUY BUY BUY BUY  

// TO PURCHASE
function buy(event) {
    event.preventDefault()

    setTimeout(() => {
        window.location.href = "order_status.html"   // pag click neto may suring ask then click 
    },1)

}

// SURE AT WAITING SA 30MINS TO SUCCEDD BUY
function sure(event) {
    event.preventDefault();

    setTimeout(() => {
        Swal.fire({
            title: '',
            text: 'You have purchased successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = "shop.html";  //after ng 30mins lalabas na ang notif na succeedful 

        });
    },1800000) // 30mins
}

// 1800000

// BACK AND BACK TO PRODUCT
function cancel(event) {
    event.preventDefault()

    setTimeout(() => {
        window.location.href = "shop.html"
    },1000)
}

// TO addcart
function addcart(event) {
    event.preventDefault()

    setTimeout(() => {
        alert("Added Cart list")
    },1000)
}

// FROM ADTOCART LIST TO SHOP PAGE
function back_to_shop(event) {
    event.preventDefault()

    setTimeout(() => {
        window.location.href = "shop.html"
    },100)
}



// LOGOUT EVENT TO ALL LOGOUT

function Logout(event) {
    event.preventDefault()

    setTimeout(() => {
        if(confirm("Are you sure you want to Logout")) {
            window.location.href = "homepage.html"
        }
        event.preventDefault()
    },100)
}



