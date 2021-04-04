// example 5

function NoBlockLevelScope(){
    
    if (1 > 0)
    {
        var myVar = 22;

    }

    alert(myVar);
}

NoBlockLevelScope(); // alert 22

