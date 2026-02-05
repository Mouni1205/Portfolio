import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="bg-cafe-latte/50 px-6 py-16 relative overflow-hidden border-t border-cafe-biscuit/40">
    <div className="absolute top-10 left-10 w-32 h-32 bg-cafe-roast/10 rounded-full float-up" />
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-cafe-biscuit/20 rounded-full pixar-bounce" />

    <div className="max-w-3xl mx-auto text-center relative z-10">
      <h2 className="font-serif text-5xl font-bold mb-4 text-cafe-espresso anime-slide">
        Let’s connect
      </h2>
      <p className="text-lg text-cafe-brown mb-10 anime-slide leading-relaxed">
        Always up for a chat or a coffee. Reach out anytime.
      </p>

      <div className="flex flex-col items-center gap-6 text-cafe-brown mb-10">
        <div className="flex items-center gap-3 bg-white/90 border border-cafe-biscuit/50 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all sparkle-hover">
          <Mail className="w-5 h-5 text-cafe-roast" />
          <a href="mailto:mmounisha1220@gmail.com" className="hover:text-cafe-espresso transition-colors font-medium">
            mmounisha1220@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3 bg-white/90 border border-cafe-biscuit/50 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all sparkle-hover">
          <Phone className="w-5 h-5 text-cafe-roast" />
          <span className="font-medium">(615) 669-8662</span>
        </div>

        <div className="flex items-center gap-3 bg-white/90 border border-cafe-biscuit/50 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all sparkle-hover">
          <MapPin className="w-5 h-5 text-cafe-roast" />
          <span className="font-medium">Nashville, TN</span>
        </div>
      </div>

      <a
        href="https://calendly.com/mounisha-makineni12/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-cafe-roast text-cafe-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-cafe-espresso transition-all transform hover:scale-105 shadow-md"
      >
        Schedule a chat
      </a>
    </div>
  </section>
);

export default Contact;
