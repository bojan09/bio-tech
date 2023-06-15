import React, { useState, useRef } from "react";

// Email service
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // send Message
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: `${import.meta.env.VITE_APP_EMAILJS_EMAIL_NAME}`,
          from_email: form.email,
          to_email: `${import.meta.env.VITE_APP_EMAILJS_EMAIL}`,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <div id="contact" className="py-2">
      <h1 className="text-center md:text-5xl xs:text-3xl my-6 font-rufina text-textColor mb-[6rem]">
        Get in touch
      </h1>
      {/* The Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4"
      >
        {/* Name */}
        <label className="font-rufina md:text-xl text-lg flex justify-center items-center">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className="text-center md:py-5 md:px-[4rem] py-3 px-6 bg-whiteColor rounded border-[2px] border-gray-100"
        />

        {/* Email */}
        <label className="font-rufina md:text-xl text-lg flex justify-center items-center">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className="text-center md:py-5 md:px-[4rem] py-3 px-6 bg-whiteColor rounded border-[2px] border-gray-100"
        />

        {/* Message */}
        <label className="font-rufina md:text-xl text-lg flex justify-center items-center">
          Your message
        </label>
        <textarea
          rows="7"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className="text-center md:py-5 md:px-[5rem] py-3 px-6 bg-whiteColor rounded border-[2px] border-gray-100"
        />

        {/* The Button */}
        <button
          type="submit"
          className="bg-primaryButton mt-4 px-8 py-2 rounded font-oxygen"
        >
          {loading ? "Send" : "Sending"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
