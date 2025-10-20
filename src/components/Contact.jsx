import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="bg-gradient-to-br from-[#D0F0C0] via-[#C8E6C9] to-[#B2DFDB] px-6 py-16 relative overflow-hidden">
    {/* Pixar floating elements */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 float-up"></div>
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-10 pixar-bounce"></div>
    
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <h2 className="text-5xl font-bold mb-4 anime-slide bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
        ⚡ Let's Connect!
      </h2>
      <p className="text-xl text-gray-700 mb-10 anime-slide leading-relaxed">
        Whether you're reaching out about a role, a project collaboration, or just want to chat about 
        <strong style={{ color: '#3B82F6' }}> system design</strong>, <strong className="text-purple-600">anime theories</strong>, 
        <strong className="text-blue-600"> F1 race strategies</strong>, or your favorite <strong className="text-yellow-600">fantasy world</strong> 🪄 — 
        I'm always happy to connect! 💬✨
        <br className="my-2" />
        <span className="text-base text-gray-600">
          Let's schedule a time that works for you — I'll bring the enthusiasm (and probably a warm cup of coffee ☕)
        </span>
      </p>

      <div className="flex flex-col items-center gap-6 text-gray-800 mb-10">
        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all sparkle-hover">
          <Mail className="w-5 h-5" style={{ color: '#3B82F6' }} />
          <a href="mailto:mounisha.makineni12@gmail.com" className="hover:font-medium transition-colors" style={{ '&:hover': { color: '#FF8700' } }}>
            mounisha.makineni12@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all sparkle-hover">
          <Phone className="w-5 h-5 text-green-500" />
          <span className="font-medium">+1 (206) 472-2879</span>
        </div>

        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all sparkle-hover">
          <MapPin className="w-5 h-5 text-blue-500" />
          <span className="font-medium">Nashville, TN</span>
        </div>
      </div>

      <a
        href="https://calendly.com/mounisha-makineni12/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-110 magic-glow"
        style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #F97316 100%)' }}
      >
        🗓️ Schedule a Chat
      </a>
    </div>
  </section>
);

export default Contact;
