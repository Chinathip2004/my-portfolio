import emailjs from "emailjs-com";

function sendMail() {
  emailjs.init("YOUR_USER_ID"); // <-- แทนที่ "YOUR_USER_ID" ด้วยค่าจริงจาก EmailJS

  let parms = {
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  
  emailjs.send("service_dr1ljuv", "template_pgh82bb", parms)
    
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
}
