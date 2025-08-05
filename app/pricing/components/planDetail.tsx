"use client";
import React from "react";
import { Plan } from "./planData";
// import { PiCheckCircleFill } from "react-icons/pi";

interface Props {
  plan: Plan;
  onBuy: () => void;
}

export function PlanDetails({ plan, onBuy }: Props) {
  return (
    <div className={`bg-white rounded-[32px] shadow-xl p-10 border ${plan.isEnterprise ? "border-yellow-400" : "border-gray-200"} max-w-5xl mx-auto`}>
      {/* Title and Price */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h3 className={`text-4xl font-extrabold mb-2 ${plan.isEnterprise ? "text-yellow-600" : "text-purple-900"}`}>
            {plan.name}
          </h3>
          <p className={`text-lg max-w-2xl leading-relaxed ${plan.isEnterprise ? "text-yellow-800" : "text-gray-600"}`}>
            {plan.description}
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <span className={`text-3xl font-bold ${plan.isEnterprise ? "text-yellow-700 italic" : "text-purple-700"}`}>
            {plan.price}
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {plan.sections.map((sec, idx) => (
          <div key={idx}>
            {sec.title && (
              <h4 className="text-xl font-semibold text-purple-800 border-b-2 border-purple-200 pb-2 mb-4">
                {sec.title}
              </h4>
            )}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-4">
              {sec.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-base text-gray-800 leading-snug"
                >
                 ✅
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={onBuy}
          className={`w-full py-3 text-lg rounded-full text-white font-semibold transition duration-300 shadow-md ${
            plan.isEnterprise
              ? "bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800"
              : "bg-gradient-to-r from-purple-800 to-blue-700 hover:from-purple-600 hover:to-blue-400"
          }`}
        >
          {plan.isEnterprise ? "Schedule Consultation" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}
