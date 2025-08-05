export interface FeatureSection {
  title?: string;
  items: string[];
}

export interface Plan {
  name: string;
  price: string;
  amount: number;
  description: string;
  sections: FeatureSection[];
  isEnterprise?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Premium Plan",
    price: "₹59,000/month",
    amount: 5900000,
    description: "Complete digital marketing solution with AI‑powered content creation and social media growth strategy.",
    sections: [
      {
        title: "Video & Visual Content",
        items: [
          "20 Premium Short‑Form Videos",
          "10 Creative Posts",
          "5 Engaging Stories/Day",
          "10 Viral Meme Videos",
          "UGC Content",
        ],
      },
      {
        title: "Social Growth",
        items: [
          "Instagram Community Building",
          "Instagram Monetization Guidance",
          "WhatsApp Marketing",
        ],
      },
      {
        title: "AI Technology",
        items: [
          "AI Voice Agent",
          "AI Chat Agent",
          "AI Model Agent",
        ],
      },
      {
        title: "Advertising",
        items: [
          "Facebook Ads",
          "Instagram Ads",
        ],
      },
      {
        title: "",
        items: ["Inclusive of GST"],
      },
    ],
  },
  {
    name: "Royal Plan",
    price: "₹1,09,000/month",
    amount: 10900000,
    description: "Royal Plan subscribers receive priority support and exclusive access to our advanced AI tools and analytics dashboard. Community Building & Monetization.",
    sections: [
      {
        title: "Everything in Premium, plus:",
        items: [
          "30 Premium Short‑Form Videos",
          "10 High‑Engaging Long‑Form Videos",
          "15 Creative Posts",
          "Email Marketing",
          "Google Ads",
          "AI Automation",
          "SEO Support",
        ],
      },
      {
        title: "Included from Premium Features:",
        items: [
          "20 Premium Short‑Form Videos",
          "10 Creative Posts",
          "5 Engaging Stories/Day",
          "10 Viral Meme Videos",
          "AI Voice & Chat Agent",
          "Facebook & Instagram Ads",
          "Community Building & Monetization",
        ],
      },
      {
        title: "",
        items: ["Inclusive of GST"],
      },
    ],
  },
  {
    name: "Enterprise Plan",
    price: "Custom Pricing",
    amount: 0,
    description: "Tailored solutions for brands ready to dominate globally with advanced AI‑powered marketing strategies and dedicated support.",
    sections: [
      {
        title: "",
        items: [
          "Premium Support — Personalized strategy and execution",
          "Exclusive Features",
          "Custom Pricing",
          "Custom Video & Content Strategy — Tailored content plans designed specifically for your brand's unique voice and goals.",
          "Dedicated Account Manager — Your personal point of contact for seamless communication and project management.",
          "Advanced AI Tools & Automations — Cutting‑edge AI technology to optimize your marketing performance.",
          "Multi‑Platform Growth Strategy — Comprehensive approach across all relevant platforms for maximum brand visibility.",
          "Global Targeting — Reach international audiences with localized strategies and performance metrics.",
          "Custom Consultation — Schedule a call to discuss your unique requirements and custom pricing.",
        ],
      },
    ],
    isEnterprise: true,
  },
];
