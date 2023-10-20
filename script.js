function submit1(){
    (function(){
  emailjs.init("EN7THdosLO5tzsHnf")
    })();
  
    
  var number = document.getElementById("number").value;
  var name_of_guest = document.getElementById("name").value;
  var guests = document.getElementById("guest").value;
  var time_checkin = document.getElementById("time").value;
  var date_checkin = document.getElementById("date1").value;
  var date_checkout = document.getElementById("date2").value;
  var all = document.getElementById("number").value + document.getElementById("name").value;
  
  var final = "Thank you " + name_of_guest + " for choosing The Jumbo Stay, your booking has been confirmed for " + guests + " people, you must checkin within " + time_checkin + date_checkin + " and your check-out has been scheduled for " + date_checkout + " for any kind of support and help please contact " + number ;
  console.log(final);
  
  var params = {
  sendername: "The Jumbo Stay",
  to: document.querySelector("#name2").value,
  subject: "Hotel booking confirmation",
  replyto : "noreply@gmail.com",
  message: "Thank you " + name_of_guest + " for choosing The Jumbo Stay, your booking has been confirmed for " + guests + " people, you must checkin within " + time_checkin +" "+ date_checkin + " and your check-out has been scheduled for " + date_checkout + " for any kind of support and help please contact " + number,
  sendermail: document.querySelector("#name1").value,
  };
  
  
  var serviceID = "service_mktyz73";
  var templateID = "template_1btfm6a";
  
  emailjs.send(serviceID, templateID,params)
  .then( res =>{
    alert("Email success");
  })
  .catch();{
  
  }
  
  
  }
  
  