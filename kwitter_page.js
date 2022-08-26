
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

  room_name= localStorage.getItem("room_name");

function send() {
    msg= document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name: User_name,
        message: msg,
        like:0,
    })
    document.getElementById("msg").value= '';
}
function getData() {
         firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
          childData = childSnapshot.val();
          if(childKey != "purpose") 
          { firebase_message_id = childKey;
           message_data = childData;

           console.log(firebase_message_id);
           console.log(message_data);

           name = message_data['name'];

           message = message_data['message'];

           like = message_data['like'];

           name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";

           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";

           like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

           row = name_with_tag + message_with_tag +like_button + span_with_tag;

           document.getElementById("output").innerHTML += row;
    } }); }); } 
    
    getData();

function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({ like : updated_likes});
}

function logout() {
    localStorage.removeItem("User_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
