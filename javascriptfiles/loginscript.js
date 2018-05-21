var mailfield=document.getElementById("Email");
mailfield.onfocus=function(){
    if(mailfield.value=='enter mail id'){
        mailfield.value="";
    }
};