function checkLight() {
    var inputLight = document.getElementById(`light`).value;

    switch (inputLight){
    case "Green": 
        document.getElementById(`traffic`).innerHTML = "GO !";
        break;
    case "Yellow": 
        document.getElementById(`traffic`).innerHTML = "CAUTION !!";
        break;
    case "Red": 
        document.getElementById(`traffic`).innerHTML = "STOP !!!";
        break;

    default:
        document.getElementById(`traffic`).innerHTML = "Invalid color, please use the recommended colors."
    
    }
}