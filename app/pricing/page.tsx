"use client";
// import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}
const plans = [
 {
  name: "Premium Plan",
  price: "₹59,000/month",
  amount: 5900000, // in paise
  features: [
    "20 Premium Short-Form Videos",
    "10 Creative Posts",
    "5 Engaging Stories/Day",
    "10 Viral Meme Videos",
    "UGC Content",
    "Instagram Community Building",
    "Instagram Monetization Guidance",
    "WhatsApp Marketing",
    "AI Voice Agent",
    "AI Chat Agent",
    "AI Model Agent",
    "Facebook Ads",
    "Instagram Ads",
    
  ],
  description:
    "Complete digital marketing solution with AI-powered content creation and social media growth strategy. Ready to scale higher",
}
,
  {
  name: "Royal Plan",
  price: "₹1,09,000/month",
  amount: 10900000, // in paise
  features: [
    "30 Premium Short-Form Videos",
    "10 High-Engaging Long-Form Videos",
    "15 Creative Posts",
    "Email Marketing",
    "Google Ads",
    "AI Automation",
    "SEO Support",
    "Inclusive of GST",
    "20 Premium Short-Form Videos",
    "10 Creative Posts",
    "5 Engaging Stories/Day",
    "10 Viral Meme Videos",
    "AI Voice & Chat Agent",
    "Facebook & Instagram Ads",
    "Community Building & Monetization"
  ],
  description:
    "Royal Plan subscribers receive priority support and exclusive access to our advanced AI tools and analytics dashboard.",
}
,
  {
  name: "Enterprise Plan",
  price: "Custom Pricing",
  amount: 0, // You can handle custom pricing logic separately
  features: [
    "Premium Support",
    "Personalized Strategy and Execution",
    "Custom Video & Content Strategy",
    "Dedicated Account Manager",
    "Advanced AI Tools & Automations",
    "Multi-Platform Growth Strategy",
    "Global Targeting with Localized Strategies",
    "Custom Consultation",
    "Exclusive Features",
    "Tailored Content Plans",
    "Comprehensive International Brand Visibility"
  ],
  description:
    "Tailored solutions for brands ready to dominate globally with advanced AI-powered marketing strategies and dedicated support"
}
,
];

// ✅ Razorpay Handler
const loadRazorpay = (planName: string, amount: number) => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  script.onload = () => {
    const options = {
      key: "rzp_live_aHRq9omZMtdI3Y", // Replace with your Razorpay key
      amount: amount,
      currency: "INR",
      name: "Prettify Go Global",
      description: planName,
      handler: function (response: RazorpayResponse) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        // you can POST response.razorpay_payment_id to your backend here
      },
      prefill: {
        name: "Your Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };
    // @ts-expect-error: Razorpay does not have TypeScript support for `window.Razorpay`
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  document.body.appendChild(script);
};

const Pricing = () => {
  return (
    <div className="w-full py-5 mt-8 bg-white antialiased relative overflow-hidden">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col items-center text-center px-6 pb-10 md:pb-20">
  <h2 className="text-3xl md:text-5xl text-purple-900 font-semibold">
    Transparent Pricing <br /> Pick the Right Plan for Your Brand
  </h2>
  <a
    href="/brochure.pdf"
    download
    className="mt-4 inline-block px-6 py-2 text-white rounded-full bg-gradient-to-r from-purple-400 to-purple-950 hover:from-blue-600 hover:to-blue-400 transition"
  >
    Download Brochure
  </a>
</div>

        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="h-full flex flex-col justify-between border rounded-3xl px-6 bg-white shadow-md"
            >
              <div className="rounded-3xl py-10 text-black">
                <div className="text-4xl font-semibold">{plan.name}</div>
                <div className="text-3xl pt-6">{plan.price}</div>
                <div className="py-6 text-gray-600">{plan.description}</div>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-lg py-2 flex items-center text-gray-800"
                    >
                      <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

             <div className="w-full pb-6">
  {plan.name === "Enterprise Plan" ? (
 <a
  href="mailto:info.prettifygoglobal@gmail.com?subject=Inquiry&body=Hi, I would like to get in touch..."
  className="rounded-3xl my-4 py-2 text-white w-full mx-auto flex justify-center bg-gradient-to-r from-orange-500 to-green-300 hover:from-green-600 hover:to-green-400 transition"
>
  Contact Us
</a>


  ) : (
    <button
      onClick={() => loadRazorpay(plan.name, plan.amount)}
      className="rounded-3xl my-4 py-2 text-white w-full mx-auto flex justify-center bg-gradient-to-r from-purple-800 to-blue-700 hover:from-purple-600 hover:to-blue-400 transition"
    >
      Buy Now
    </button>
  )}
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
              