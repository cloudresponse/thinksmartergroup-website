"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { SectionHeader } from "@/components/SectionHeader";
import { Contact } from "@/components/page-sections/contact";
import InvestmentCard from "@/components/InvestmentCard";
import { investments } from "@/app/data/investments";

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  }
};

export default function InvestmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const uniqueCategories = [...new Set(investments.map(investment => investment.category))].sort();

  const filteredInvestments = investments
    .filter(investment => !selectedCategory || investment.category === selectedCategory);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Main gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-24"
        >
          <div className="space-y-4">
            <SectionHeader title="Our Investments" />
            <p className="mx-auto max-w-[700px] text-gray-500 ">
              We have made a range of investments - primarily at early stage - into exciting entrepreneurs who are seeking to scale excellent products/services into their chosen markets.

              Where we can support, we mainly help the management teams on sales, fundraising and recruitment.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="mx-auto max-w-[700px] text-gray-500 ">We invest in the following sectors:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer
                    ${selectedCategory === category
                      ? "bg-black text-white border-black"
                      : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
          {filteredInvestments.map((investment, index) => (
            <motion.div
              key={investment.title}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{
                delay: index * 0.1
              }}
              className="w-full h-64"
            >
              <InvestmentCard investment={investment} />
            </motion.div>
          ))}
        </div>

        <Contact />
      </main>
    </div>
  );
}
