import { ContentProp } from "../../types/types";
import Accordion from "../Accordion/Accordion";

const FAQs = ({ content }: ContentProp) => {
  return (
    <div className="app-container flex flex-col gap-16 w-screen">
      <div className="w-full">
        <div className="w-full max-w-[500px] text-4xl self-baseline">
          {content?.faq.title}
        </div>
        <p className="w-full max-w-[700px] self-baseline">{content?.faq.msg}</p>
      </div>
      <div className="flex flex-col gap-10 w-full items-center">
        {content?.faq.questions.map((question) => (
          <Accordion content={question.paragraphs} title={question.title} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
