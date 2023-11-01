var msgToSend = 'input: null';
var messageHTML = '<div style="width: 705px;height: 90px;background-color: #313131;" id="template"><div style="font-size: 15px;">USERNAME</div><div style="width: 50px;height: 50px;background-color: aqua;"><div style="position: absolute; left: 80px; font-size: 14px;">' + msgToSend + '</div></div></div>';
var msg = document.createElement('div');
msg.style = 'width: 705px;height: 90px;background-color: #313131;';
msg.innerHTML = messageHTML;
document.getElementById('messages').appendChild(msg)
