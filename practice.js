
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBD_e_PKdEHlTaM_1xyhWQXDoigb3trYKY",
    authDomain: "kwitter-practice-d6188.firebaseapp.com",
    databaseURL: "https://kwitter-practice-d6188-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-d6188",
    storageBucket: "kwitter-practice-d6188.appspot.com",
    messagingSenderId: "311676223512",
    appId: "1:311676223512:web:4e657a1e063d6f050a436d"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function addUser()
   {
    user_name = document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   }