const firebaseConfig = {
    apiKey: "AIzaSyC6tnXGcWWIHBAs9yU6Vq3V1zpdxFaz3bo",
    authDomain: "diseasepredictor1.firebaseapp.com",
    databaseURL: "https://diseasepredictor1-default-rtdb.firebaseio.com",
    projectId: "diseasepredictor1",
    storageBucket: "diseasepredictor1.appspot.com",
    messagingSenderId: "430314100907",
    appId: "1:430314100907:web:06a1608cf0965fbf197fee"
  };
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phoneno = getElementVal("phoneno");
    var message = getElementVal("message");

    saveMessages(name,emailid,phoneno,message);

    document.querySelector(".alert").style.display = "block";

    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none"
    }, 3000);

    document.getElementById("contactForm").reset();
}

const saveMessages = (name,emailid,phoneno,message)=> {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name:name,
        emailid:emailid,
        phoneno:phoneno,
        message:message,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
