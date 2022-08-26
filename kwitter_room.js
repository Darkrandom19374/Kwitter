
const firebaseConfig = {
      apiKey: "AIzaSyA8aA64JGBrSLlhlOlKEDnmwukjOs0z_xw",
      authDomain: "kwitter-d21f9.firebaseapp.com",
      databaseURL: "https://kwitter-d21f9-default-rtdb.firebaseio.com",
      projectId: "kwitter-d21f9",
      storageBucket: "kwitter-d21f9.appspot.com",
      messagingSenderId: "699332013096",
      appId: "1:699332013096:web:facce4aae0f7444718991d"
    };
    firebase.initializeApp(firebaseConfig);
    User_name = localStorage.getItem("User_name");
    document.getElementById("User_name").innerHTML = "Hola de nuevo " + User_name + "!"

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
      
    })
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";


}

function gtData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name" + Room_names);
       row = "<div class ='room_name' id ="+ Room_names + "onclick ='redidect(this.id)'>#"+ Room_names +"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirect(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

