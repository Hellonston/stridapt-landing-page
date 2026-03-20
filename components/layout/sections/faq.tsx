import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is STRIDAPT and what is its value proposition?",
    answer:
      "STRIDAPT is an initiative by the Pontificia Universidad Católica de Chile that develops hybrid, customized transtibial prostheses. It leverages online scanning, artificial intelligence, and parametric design to offer prostheses that are 40% more affordable with zero waiting lists.",
    value: "item-1",
  },
  {
    question: "Who is the target market for our prostheses?",
    answer:
      "Our target market includes individuals with lower-limb amputations (transtibial and transfemoral) who have medium to high activity levels, focusing on both daily use and sports performance.",
    value: "item-2",
  },
  {
    question:
      "How does the prosthesis design and manufacturing process work?",
    answer:
      "After an online scan captures the user's anatomical features, the system generates a customized parametric design within minutes. AI-driven distributed manufacturing then optimizes costs. Not only does this process minimize expenses and speed up delivery, but it also ensures a perfect fit to each person's body and gait, offering complete customization.",
    value: "item-3",
  },
  {
    question:
      "What benefits does the STRIDAPT prosthesis offer to amputee athletes?",
    answer:
      "It enhances physical and emotional well-being by absorbing impacts and reducing energy expenditure during gait. It also improves athletic performance, enabling participation in marathons of various distances.",
    value: "item-4",
  },
  {
    question: "What institutional support backs this project?",
    answer:
      "STRIDAPT is supported by the UC Sports Club for athlete training and collaborates with Teletón for marathon organization and athlete support.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-32 bg-background">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="font-label text-primary-container text-xs tracking-widest uppercase mb-4">
            PREGUNTAS FRECUENTES
          </div>
          <div className="font-headline text-4xl font-bold text-white uppercase tracking-tighter">
            FAQ
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem
              key={value}
              value={value}
              className="border border-outline-variant/10 bg-surface-container px-6"
            >
              <AccordionTrigger className="text-left font-headline font-bold text-white text-sm uppercase tracking-tight hover:text-primary-container transition-colors">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-tertiary font-body">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
