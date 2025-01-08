import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const ConnectUs = () => {
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAIL_JS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY}`
      )
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Mail sent successfully!",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to send the mail! Please try again later.",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div className="my-14">
      <h2 className="text-center md:text-5xl text-4xl font-extrabold mb-8">
        Connect with Us
      </h2>

      <div className="w-11/12 mx-auto flex lg:flex-row flex-col justify-between join-item border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg">
        <div className="lg:w-1/2 p-4 lg:border-r border-r-gray-300 lg:mr-6 lg:border-b-0 border-b">
          <figure className="w-full md:h-72 h-64">
            <img
              className="w-full h-full rounded-xl"
              src="gamer-accessories.jpg"
              alt="Accessories of Gamer"
            />
          </figure>

          <div className="pt-5 pl-4 space-y-3">
            <h4 className="text-xl flex gap-x-2 items-center">
              <MdEmail className="text-2xl text-indigo-500" />{" "}
              <span className="font-semibold">mahimzayn666@gmail.com</span>
            </h4>

            <h4 className="text-xl flex gap-x-2 items-center">
              <ImWhatsapp className="text-2xl text-lime-500" />{" "}
              <span className="font-semibold">+8801614583148</span>
            </h4>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form ref={form} onSubmit={handleSend} className="space-y-4 p-7">
            <h2 className="text-3xl font-extrabold pb-3">Submit The Form</h2>

            <div className="form-control">
              <input
                type="text"
                name="from_name"
                placeholder="Write your Name"
                className="input input-bordered input-primary block lg:w-11/12 w-full"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="from_email"
                placeholder="Type your Email"
                className="input input-bordered input-accent block lg:w-11/12 w-full"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                name="message"
                placeholder="Write your message..."
                className="textarea textarea-bordered textarea-accent textarea-lg lg:pt-2 lg:pl-3 block w-full lg:w-11/12"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-600 text-white text-lg font-bold md:w-2/6 w-full border-none rounded-full">
                Send Mail
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
