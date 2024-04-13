


// const subi = document.querySelector('.sbtn')
// let infor;
// subi.addEventListener('click', function() {
//     const name = document.getElementById('name').value
//     const email = document.getElementById('email').value
//     const mes = document.getElementById('mes').value
//     information(name, email, mes)

// })
// function information(name, email, mes){
//     //info = {}
//     infor = {
//         name : name,
//         email : email,
//         mes : mes
//     }
//     console.log(infor)
//     sendemail()
// }

// function sendemail(){
// const nodemailer = require('nodemailer')
// let transporter = nodemailer.createTransport({
//   service: "Outlook365",
//   host: "smtp.office365.com",
//   port: "587",
//   tls: {
//     ciphers: "SSLv3",
//     rejectUnauthorized: false,
//   },
//   auth: {
//     user: "surbhitportfolio@outlook.com",
//     pass: "123@123@123",
//   },
// });
// let info = transporter.sendMail({
//   from: "surbhitportfolio@outlook.com", // sender address
//   to: infor.email, // list of receivers
//   subject: "From Website", // Subject line
//   html:`   <h4>Name = ${infor.name}</h4><br>
//   <h4>Email = ${infor.email}</h4><br>
//   <h4>Message = ${infor.mes}</h4>  `, // html body
//       });

// console.log('infor.email')
// try{
// alert("Message sent successfully")
// }
// catch(error){
// alert("Error")
// }
// }