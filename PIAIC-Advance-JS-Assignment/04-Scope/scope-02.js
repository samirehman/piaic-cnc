//  example : 2


function createUserName() {
    userName = "Ameen Alam";
}

function modifyUserName() {
    if(userName)
        userName = "Daniyal Nagori";
};

function showUserName() {
    alert(userName);  
}

createUserName();
showUserName(); // Ameen Alam 

modifyUserName();
showUserName(); // Daniyal Nagori 


