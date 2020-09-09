const socket = io();
var counter = 5000;
socket.on('connect',function (){
    console.log("Connected to server");
    socket.emit('join',counter,function(err){
        if(err){
            alert(err);
        }
        else{
            console.log("No Error");
        }
    });
    
});
socket.on('disconnect',function (){
    console.log("Disconnected from server");
});
socket.on("newMessage",function(message){
    console.log(message);
    document.getElementById('timer').innerHTML=message.date;
    document.getElementById('body').style.backgroundColor=message.color;
})

// message sent
function sentMessage(){
    var text = document.querySelector('#message').value;
    if(text !==""){
        socket.emit('createMessage',{
            text:parseInt(text)
        });
    document.querySelector('#message').value ="";
    }
}

// send message listener
document.querySelector('#submit').addEventListener('click',sentMessage);
document.onkeypress= function(e){
    if(e.keyCode ===13) {
        sentMessage();
    }
}
