function talk(){
  var know = {
    "Hi" : "Hello, How can I help you?.",
    "How are you" : "Good :)",
    "Book a ticket" : "Hold on.....",
    "ok" : "Thank You So Much <3",
    "Bye" : "Okay! Will meet soon. TC:).."
    
  };
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
  }
}
