'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-xl font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex items-center justify-center"
        >
          <Plus className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-neutral-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: 'What services does Prettify Go Global offer?',
      answer:
        'We offer comprehensive PR solutions including media outreach, brand strategy, reputation management, social media campaigns, influencer marketing, and digital PR tailored to elevate your brand presence.',
    },
    {
      question: 'Who can benefit from your services?',
      answer:
        'We work with startups, established businesses, public figures, NGOs, and global brands looking to build visibility, credibility, and long-term goodwill in their industry.',
    },
    {
      question: 'How do you measure PR success?',
      answer:
        'We focus on both qualitative and quantitative metrics such as media mentions, engagement rates, audience reach, sentiment analysis, and business growth outcomes.',
    },
    {
      question: 'Can you handle crisis communication?',
      answer:
        'Absolutely. We have a dedicated crisis management protocol to protect and restore brand reputation quickly and effectively during sensitive situations.',
    },
    {
      question: 'Do you provide international PR services?',
      answer:
        'Yes, we operate globally and tailor campaigns to specific markets, ensuring relevance, compliance, and cultural alignment across different regions.',
    },
    {
      question: 'How do we get started with Prettify Go Global?',
      answer:
        'Simply contact us through our website or email. We’ll schedule a discovery session to understand your goals and craft a strategy aligned with your vision and market.',
    },
  ];

  return (
    <div className="mx-auto 2xl:w-4/5 md:px-16 px-6 py-16 pb-32">
      <h1 className="text-4xl font-bold mb-12">FAQ</h1>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
