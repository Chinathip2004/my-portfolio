"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init("FwXMkVP9ATehYUmbR"); // ใส่ Public Key ที่นี่
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs
      .send("service_dr1ljuv", "template_pgh82bb", data)
      .then((response) => {
        console.log("Email Sent Successfully:", response);
        setEmailSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Contact Me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
        I'm looking for an internship. You can contact here.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Chinathip2004" target="_blank">
            <Image src="/github-icon.svg" alt="github Icon" width={32} height={32} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="your_email@gmail.com"
              className="p-2.5 border border-gray-600 rounded bg-gray-900 text-white w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Hello World!!"
              className="p-2.5 border border-gray-600 rounded bg-gray-900 text-white w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="p-2.5 border border-gray-600 rounded bg-gray-900 text-white w-full"
              placeholder="Hi talk to me in this"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
