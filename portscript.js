function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hambur-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendMail(){
    var params = {
        from_name : document.getElementById("fullname").value ,
        email_id : document.getElementById("email_id"). value ,
        message : document.getElementById("message").value
    }
    emailjs.send("service_eixhe3v", "template_1q56bny", params)
    .then(
        message => {
          if(message != "OK"){
              swal("Successful", "You clicked the button!", "success");
          }
          else{
              swal("Error", "You clicked the button!", "Error");
          }
        }
      );//.then(function(res){
        //alert("Success! " + res.status);
    //})
}