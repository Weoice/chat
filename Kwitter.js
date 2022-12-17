function addUser() {
    

    User = document.getElementById("user_name").value;
    
            
    localStorage.setItem("user_name", User);
    
            
    window.location = "Kwitter_room.html";
            
    
    
    }