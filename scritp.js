import emailjs from "emailjs-com";

function sendMail() {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER=FwXMkVP9ATehYUmbR);

  let params = {
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE=service_dr1ljuv,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE=template_pgh82bb,
    params
  )
  .then(response => {
    console.log("✅ Email sent successfully!", response);
  })
  .catch(error => {
    console.error("❌ Failed to send email:", error);
  });
}



