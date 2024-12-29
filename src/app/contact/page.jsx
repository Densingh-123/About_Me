"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [sucess, setSuccess] = useState(false);
  const [validationErr, setValidationErr] = useState("");
  const [err, setErr] = useState(false);
  const text = "Say Hello";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setErr(false);
    setSuccess(false);
    setValidationErr("");
    const email = form.current.user_email.value;
    const message = form.current.user_message.value;

    if (!message) {
      setValidationErr("Please enter a message.");
      return;
    }
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setValidationErr("Please enter a valid email address.");
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setErr(true);
          console.log(error)
        }
      );
  };

  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen flex flex-col lg:flex-row items-center bg-black px-6 lg:px-12 h-110">
        {/* Form Container */}
        <div className="w-full lg:w-1/2 text-white flex flex-col justify-center py-10 px-8 rounded-lg bg-opacity-80">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <motion.div
            initial={{ x: "-300px" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={sendEmail} ref={form} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xl">Email</label>
                <input
                  name="user_email"
                  id="email"
                  type="email"
                  className="w-full p-4 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="textarea" className="block text-xl">How Can I Help You?</label>
                <textarea
                  cols="50"
                  rows="6"
                  id="textarea"
                  name="user_message"
                  className="w-full p-4 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
              >
                Submit
              </button>

              {validationErr && (
                <span className="text-red-600 font-semibold">{validationErr}</span>
              )}
              {sucess && (
                <span className="text-green-600 font-semibold">
                  Your message has been sent successfully!
                </span>
              )}
              {err && (
                <span className="text-red-600 font-semibold">
                  Something went wrong!
                </span>
              )}
            </form>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--select-an-account-join-the-forum-password-digital-marketing-pack-business-illustrations-8333958.png"
            alt="Login Illustration"
            className="max-w-xs lg:max-w-md xl:max-w-lg object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
