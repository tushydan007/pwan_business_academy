"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is PWAN Business Academy?",
    answer:
      "Shipping usually takes 3-7 business days depending on your location.",
  },
  {
    question: "What do I need to Enrol in a Course?",
    answer:
      "Yes, we ship to most countries. Shipping rates and delivery times may vary.",
  },
  {
    question: "How can I track learning status?",
    answer:
      "Once your order ships, we'll send you an email with tracking details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, PayPal, and other major payment options.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for items in original condition. Just contact support with your order details.",
  },
  {
    question: "Any Certification after the completion of my programme?",
    answer:
      "Yes, as long as your order hasn't shipped yet. Contact us as soon as possible.",
  },
  {
    question: "Do you offer gift cards?",
    answer: "Yes, we offer digital gift cards in various denominations.",
  },
  {
    question: "Is PWAN Business Academy accredited?",
    answer:
      "We strive to use sustainable materials and ethical practices across our supply chain.",
  },
  {
    question:
      "Where can I work with my certificate after the completion of my programme?",
    answer:
      "Yes, for orders above a certain quantity. Please contact our sales team.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use industry-standard encryption and never share your data without permission.",
  },
];

export default function FaqSection() {
  // Split the FAQs into two columns
  const midIndex = Math.ceil(faqs.length / 2);
  const firstColumn = faqs.slice(0, midIndex);
  const secondColumn = faqs.slice(midIndex);

  return (
    <section className="w-full px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-x-48">
        {[firstColumn, secondColumn].map((columnFaqs, colIdx) => (
          <Accordion key={colIdx} type="multiple" className="w-full space-y-4">
            {columnFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${colIdx}-${index}`}>
                <AccordionTrigger className="text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
