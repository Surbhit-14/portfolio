const sub = document.getElementById('sbtn')
let info

sub.addEventListener('click', function() {
    const sendername = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('mes').value

    


    information(sendername, email, message)
})
function information(sendername, email, message){
    info = {
        sendername : sendername,
        email : email,
        message : message,
        to : "surbhitportfolio@outlook.com",
    }
 emailsender()  
}
function emailsender(){
emailjs.init("F3yafNlM2P2cI51th");

var serviceID = "service_31f6kxo"
var templateID = "template_xp7p8f8"

emailjs.send(serviceID, templateID, info).then( res => {
    alert("Message sent successfully")
}).catch()

}
