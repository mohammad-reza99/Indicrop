import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Company Info",
    items: [
      { label: "About Us" },
      { label: "Carrier" },
      { label: "We are hiring" },
      { label: "Blog" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "About Us" },
      { label: "Carrier" },
      { label: "We are hiring" },
      { label: "Blog" },
    ],
  },
  {
    title: "Features",
    items: [
      { label: "Business Marketing" },
      { label: "User Analytic" },
      { label: "Live Chat" },
      { label: "Unlimited Support" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "IOS & Android" },
      { label: "Watch a Demo" },
      { label: "Customers" },
      { label: "API" },
    ],
  },
  {
    title: "Get In Touch",
    items: [
      {
        label: "(480) 555-0103",
        icon: <FaPhone className="inline-block mr-2" />,
      },
      {
        label: "4517 Washington Ave.",
        icon: <FaMapMarkerAlt className="inline-block mr-2" />,
      },
      {
        label: "debra.holt@example.com",
        icon: <FaEnvelope className="inline-block mr-2" />,
      },
    ],
  },
];

const socialIcons = [
  { icon: <FaFacebook className="text-blue-600" />, link: "#" },
  { icon: <FaInstagram className="text-pink-500" />, link: "#" },
  { icon: <FaTwitter className="text-sky-500" />, link: "#" },
  { icon: <FaYoutube className="text-red-500" />, link: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800">
            Consulting Agency For Your Business
          </h2>
          <p className="text-gray-500 text-sm">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <a
          href="#"
          className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-md transition"
        >
          Contact Us
        </a>
      </div>

      <div className="bg-teal-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    {item.icon && <span>{item.icon}</span>}
                    <a href="#">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>Made With Love By Figmaland All Right Reserved</p>
        <div className="flex space-x-4 text-xl">
          {socialIcons.map((s, idx) => (
            <a key={idx} href={s.link}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
