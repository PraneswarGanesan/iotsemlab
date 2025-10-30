function sendMessage () {
    const input  = document.getElementById("chat");
    const data = input.value.trim();
    if(data == "") return;
    addMessage(data,"user");
    setTimeout(() =>
    {addMessage("You said:"+data,"bot")},500
    );
    input.value="";
}
function addMessage(text,type){
    const chatMsg = document.getElementById("chat-msg");
    const msgdiv = document.createElement("div");
    msgdiv.classList.add("message");
    msgdiv.classList.add(type=="user" ? "user-message":"bot-message");
    msgdiv.innerText=text;
    chatMsg.appendChild(msgdiv);
    chatMsg.scrollTop = chatMsg.scrollHeight;
}