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

var couserinfo = firebase.database().ref("userinfo");

document.getElementById("userinfo").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var firstname = getElementVal("firstname");
    var lastname = getElementVal("lastname");
    var birthday = getElementVal("birthday");
    var bloodgroup = getElementVal("bloodgroup");
    var height = getElementVal("height");
    var weight = getElementVal("weight");
    var gender = getElementVal("gender");
    var city = getElementVal("city");
    var nationality = getElementVal("nationality");

    

    saveMessages(firstname,lastname,birthday,bloodgroup,height,weight,gender,city,nationality);

    document.getElementById("userinfo").reset();
}

const saveMessages = (name,emailid,phoneno,message)=> {
    var newuserinfo = userinfoDB.push();

    newuserinfo.set({
        name:name,
        emailid:emailid,
        phoneno:phoneno,
        message:message,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
