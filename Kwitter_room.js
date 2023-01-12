const firebaseConfig = {
  apiKey: "AIzaSyBmx_IALhE0kJ_GctshF_uzkBOa8n3ngSg",
  authDomain: "spoice-1cfd3.firebaseapp.com",
  databaseURL: "https://spoice-1cfd3-default-rtdb.firebaseio.com",
  projectId: "spoice-1cfd3",
  storageBucket: "spoice-1cfd3.appspot.com",
  messagingSenderId: "521561337612",
  appId: "1:521561337612:web:40299c2a968df7064de329"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

User_name = localStorage.getItem("User_name");
document.getElementById("User_name").innerHTML = "Welcome " + User_name + "!";

function addRoom() {

    Room_name = document.getElementById("Room_name").value;
    localStorage.setItem("Room_name", Room_name);
    Room_name = document.getElementById("Room_name").value;
firebase.database().ref("/").child(Room_name).update({

purpose: "adding room name"

});

}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

//End code
});});}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "kwitter_page.html";
    
    
    
    }
    