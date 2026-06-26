import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';
import RazorpayButton from './RazorpayButton';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-lg text-slate-400">Get everything you need to build a profitable faceless brand at a fraction of the cost.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-2xl relative"
        >
          <div className="absolute top-0 right-8 transform -translate-y-1/2">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full">
              Limited Time Offer
            </span>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Ultimate Viral Bundle</h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-bold">₹299</span>
              <span className="text-xl text-slate-400 line-through mb-1">₹1999</span>
            </div>
            <p className="text-slate-400 text-sm">One-time payment. Lifetime access.</p>
          </div>

          <div className="space-y-4 mb-8">
            {[
              '1000+ Ready-to-Upload HD Videos',
              'Copyright-free Background Music',
              'Perfect for Insta, YouTube & FB',
              'High-Engagement Niches',
              'Lifetime Access via Google Drive',
              'Bonus: Viral Hashtag Guide'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-red-500/20 p-1 rounded-full mt-0.5">
                  <Check className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <RazorpayButton />
          <p className="text-center text-slate-500 text-xs mt-4">Secure payment via Razorpay. You will be instantly redirected to Google Drive after payment.</p>
        </motion.div>
      </div>
    </section>
  );
}
