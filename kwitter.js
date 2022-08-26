function addUser() {
    User_name = document.getElementById("User_name").value;
    localStorage.setItem("User_name", User_name);
    window.location = "kwitter_room.html";
}