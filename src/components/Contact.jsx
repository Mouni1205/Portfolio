import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="bg-[#D0F0C0] px-6 py-16">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

    <p className="text-lg text-gray-700 mb-10">
  Whether you’re reaching out about a role, a project collaboration, or just want to chat about system design, anime theories, or your favorite fantasy world —
  I’m always happy to connect.
  <br className="hidden md:block" />
  Let’s schedule a time that works for you — I’ll bring the enthusiasm (and probably a warm cup of something).
</p>

    <div className="flex flex-col items-center gap-6 text-gray-800">
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5" />
        <a href="mailto:mounisha.makineni12@gmail.com" className="hover:underline">mounisha.makineni12@gmail.com</a>
      </div>

      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5" />
        <span>+1 (206) 472-2879</span>
      </div>

      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5" />
        <span>Nashville, TN</span>
      </div>

      <a
        href="https://calendly.com/mounisha-makineni12/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-green-600 text-white px-5 py-3 rounded-full font-medium hover:bg-green-700 transition"
      >
        Schedule a Chat
      </a>
    </div>
  </div>
</section>

);

export default Contact;
