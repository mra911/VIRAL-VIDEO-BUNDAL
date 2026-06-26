import { motion } from 'motion/react';
import { Download, ShieldCheck, TrendingUp, DollarSign, Clock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Download,
    title: 'Ready to Upload',
    description: 'Skip the editing process. Just download our high-quality videos and upload them directly to your pages.'
  },
  {
    icon: ShieldCheck,
    title: 'Copyright Free',
    description: '100% safe to use. Never worry about copyright strikes or audio claims on your social media accounts.'
  },
  {
    icon: TrendingUp,
    title: 'Viral Potential',
    description: 'Carefully curated content proven to get high engagement, likes, shares, and watch time.'
  },
  {
    icon: DollarSign,
    title: 'Monetize Quickly',
    description: 'Grow your followers fast and unlock monetization on YouTube Shorts, Instagram, and Facebook.'
  },
  {
    icon: Clock,
    title: 'Save 1000s of Hours',
    description: 'Don\'t spend hours recording and editing. Get months worth of content instantly in one bundle.'
  },
  {
    icon: Smartphone,
    title: 'HD Quality (9:16)',
    description: 'Perfectly formatted for mobile screens. Crisp, clear, and professional-looking short-form videos.'
  }
];

export default function Features() {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Why You Need This Bundle?</h2>
          <p className="text-lg text-slate-600">Start your faceless content creation journey today without the hassle of making videos from scratch.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
