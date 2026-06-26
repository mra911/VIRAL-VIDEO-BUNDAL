import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Have Questions?</h2>
          <p className="text-lg text-slate-600">Reach out to us to inquire about purchasing the video bundles.</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm mb-8">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">We'll get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-red-500 font-medium hover:text-red-600 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                    placeholder="I'm interested in purchasing the viral bundle..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            )}
          </div>

          <a 
            href="https://wa.me/9113993180" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-6 bg-green-50 hover:bg-green-100 rounded-2xl border border-green-200 transition-colors cursor-pointer group"
          >
            <div className="bg-green-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm text-green-800 font-medium mb-0.5">Prefer direct messaging?</p>
              <p className="text-xl font-bold text-green-900">US WHATSAPP 9113993180</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
