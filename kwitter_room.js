
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      var firebaseConfig = {
            apiKey: "AIzaSyAQ0j1HISIhoz4syeuFsxdRDg-1tz0cOyE",
            authDomain: "kwitter-a6246.firebaseapp.com",
            databaseURL: "https://kwitter-a6246-default-rtdb.firebaseio.com",
            projectId: "kwitter-a6246",
            storageBucket: "kwitter-a6246.appspot.com",
            messagingSenderId: "853195704012",
            appId: "1:853195704012:web:69f8d8e0e54631e8a8e469"
          };
          
          // Initialize Firebase
         firebase.initializeApp(firebaseConfig);
      //End code
      });});}
getData();
