import { FaAsterisk, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log(serviceId)
console.log(templateId)
console.log(publicId)
const Contact = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         if (!formRef.current) return;
        emailjs.sendForm(
         serviceId,
            templateId,
            formRef.current,
            publicId
        )
             .then(
        (result) => {
            console.log("Message sent:", result.text);
        },
        (error) => {
            console.error("Error:", error.text);
        }
    );
    };
    const contactLink = [
        {
            id: 1,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/opeyemi-james-688115247/',
            icon: FaLinkedin,
        },

        {
            id: 2,
            name: 'Instagram',
            link: 'https://www.instagram.com/_praizee__?igsh=MThuMDc5OXV5YWp6bQ==',
            icon: FaInstagram,
        },
        {
            id: 3,
            name: 'Whatsapp',
            link: 'https://wa.me/qr/Y6NM4YCFSJBRM1',
            icon: FaWhatsapp,
        },
    ]
    return (
        <section id="contact" className="ml-0 md:ml-[200px] lg:ml-[200px] p-6 sm:p-8 lg:p-10  min-h-screen bg-white flex items-center justify-center">
            <div className="w-full max-w-[500px] md:max-w-[450px] lg:max-w-[500px] bg-blue-900 rounded-xl p-8 font-serif text-white
                      flex flex-col gap-6">

                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Have a project?</h1>
                    <div className="flex flex-col gap-2">
                        <h1 > You can reach me on:  </h1>
                        {contactLink.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors flex-col"
                            >
                                {item.name}
                            </a>
                        ))}


                    </div>
                    <p className=" pt-2 opacity-90">
                        Send a message so we can work together
                    </p>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">

                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-1 text-sm">
                            Full name <FaAsterisk size={7} />
                        </label>

                        <div className="flex gap-3">
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First name"
                                required
                                className="w-full px-3 py-2 rounded-md text-black outline-none"
                            />

                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last name"
                                required
                                className="w-full px-3 py-2 rounded-md text-black outline-none"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-1 text-sm">
                            Email address <FaAsterisk size={7} />
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required
                            className="w-full px-3 py-2 rounded-md text-black outline-none"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-1 text-sm">
                            Message <FaAsterisk size={7} />
                        </label>

                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            required
                            className="w-full h-32 px-3 py-2 rounded-md text-black outline-none resize-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="mt-2 bg-white text-blue-800 py-3 rounded-lg font-semibold
               hover:bg-gray-200 transition"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </section>
    );
};

export default Contact;
