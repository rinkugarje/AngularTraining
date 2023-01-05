
function formValidation(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var confirm= document.getElementById("confirmedpassword").value;
    var remark=document.getElementById("remark").value;
    var city=document.getElementById("cities").value;
    var gender = document.querySelector('input[name="Gender"]:checked');

    console.log(gender);
    
    var regemail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;   
    var regname= /^[a-zA-Z ]{2,20}$/;
    
    // name validation
    if (name.length==0) {
           document.getElementById("nameError").innerHTML="Please enter your name";  
           
        }
        else{
        if (!(name.match(regname))) {
            document.getElementById("nameError").innerHTML="Please enter valid name";         
         }
         else{
             document.getElementById("nameError").style.display="none";
         }
        }

    // email validation
    if (email == ""||!regemail.test(email) ) {
                document.getElementById("emailError").innerHTML="Please enter valid email";     
        }
        else{
            document.getElementById("emailError").style.display="none";
        }

    //password validation  
        if (password == "") {
            document.getElementById("pass").innerHTML="Please enter password"; 
           
        }
        else{
            document.getElementById("pass").style.display="none";
        }
    
    
        if(password.length <8 || password.length>20){
            document.getElementById("pass").innerHTML= "Password should be atleast 8 character long and maximum 20"; 
        }
        else{
            document.getElementById("pass").style.display="none";
        }
    
    //confirmed password
        if((password != confirm)|| confirm ==""){
            document.getElementById("cpass").innerHTML="Please enter password same as password"; 
        }
        else{
            document.getElementById("cpass").style.display="none";
        }
    
    //gender validation
        if(gender==null){
            document.getElementById("gen").innerHTML="Please select Gender"
        }
        else{
            document.getElementById("gen").style.display="none";
        }

    //hobbies validation
        if(document.getElementById('cricket').checked == false && document.getElementById('tableTanis').checked == false && document.getElementById('football').checked == false)
        {
            document.getElementById("hobError").innerHTML="Please Select your hobby"
        }   
        else{
            document.getElementById("hobError").style.display="none";

        }


    //city validation
            if(city==""){
                document.getElementById("city").innerHTML="Select your City"
              
            }
            else{
                document.getElementById("city").style.display="none";

            }
    
    //remark validation
        if((remark.length==0) || (remark.length<20)){
            document.getElementById("rem").innerHTML="Remark size should be maximum 20 characters.";
        }
        else{
            document.getElementById("rem").style.display="none";
        }
    
return false;
    
    }
    
    