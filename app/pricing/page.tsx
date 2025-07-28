"use client";

import { PiCheckCircleFill } from "react-icons/pi";

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}
const plans = [
  {
    name: "Starter Plan",
    price: "₹39,999",
    amount: 3999900, // in paise
    features: [
      "Targeted Press Releases",
      "Basic Social Media Management",
      "Content Creation: 4 posts/month",
      "Brand Monitoring and Alerts",
    ],
    description: "Ideal for startups looking to establish their brand.",
  },
  {
    name: "Growth Plan",
    price: "₹1,04,999",
    amount: 10499900,
    features: [
      "Strategic Media Campaigns",
      "Advanced Social Media Strategy",
      "Professional Content (8 posts/month)",
      "Influencer Marketing (2/month)",
      "Online Reputation Management",
      "Monthly Analytics Reports",
    ],
    description: "For growing businesses aiming for deeper engagement.",
  },
  {
    name: "Enterprise Plan",
    price: "₹2,49,999",
    amount: 24999900,
    features: [
      "Global Media Outreach",
      "Full Social Media Management",
      "High-End Content Production",
      "Strategic Influencer Partnerships",
      "Crisis Management",
      "Executive Branding & Training",
      "Advanced Analytics & Custom Reporting",
      "Custom Campaign Development",
    ],
    description:
      "Custom enterprise-level solutions tailored to your brand.",
  },
];

// ✅ Razorpay Handler
const loadRazorpay = (planName: string, amount: number) => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  script.onload = () => {
    const options = {
      key: "rzp_live_PTHr4VPfRUGhBE", // Replace with your Razorpay key
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
        <div className="text-5xl pb-10 md:pb-20 text-center text-blue-500 font-semibold px-6">
          Transparent Pricing <br /> Pick the Right Plan for Your Brand
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

              <div className="w-full">
                <button
                  onClick={() => loadRazorpay(plan.name, plan.amount)}
                  className="rounded-3xl my-4 py-2 text-white w-full mx-auto flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
