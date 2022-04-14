
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDgD4V-qPyDZvIhBOhEy-k1Qqr5Ow7ShwY",
      authDomain: "kwitter-b1798.firebaseapp.com",
      databaseURL: "https://kwitter-b1798-default-rtdb.firebaseio.com",
      projectId: "kwitter-b1798",
      storageBucket: "kwitter-b1798.appspot.com",
      messagingSenderId: "607976857757",
      appId: "1:607976857757:web:536101ecdb8776cd70b474",
      measurementId: "G-PKQ9NP3X0R"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
