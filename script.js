function validEmail(str) {
  //your JS code here.
	if (!str || str.length === 0) return false;
    
     
    if (str.length > 320) return false;
    
     
    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9-]*(\.[a-zA-Z]{2,})+$/;
    
     
    return emailRegex.test(str) && 
           str.indexOf('..') === -1 &&  
           str.split('@')[1].length <= 255;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
