const firebaseConfig = {
    apiKey: "AIzaSyBJmcrSJCsXK6rpXxdruMkY_9B4DTEvfNM",
    authDomain: "contactmainform.firebaseapp.com",
    databaseURL: "https://contactmainform-default-rtdb.firebaseio.com",
    projectId: "contactmainform",
    storageBucket: "contactmainform.appspot.com",
    messagingSenderId: "829783912849",
    appId: "1:829783912849:web:3f61e4e6a1c956f26aaa30"
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
