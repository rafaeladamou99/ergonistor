import {
  Accordion as AccordionMui,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordionProps {
  title: string;
  content: string[];
}

const Accordion = ({ title, content }: AccordionProps) => {
  return (
    <AccordionMui className="w-full">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col">
          {content.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </AccordionDetails>
    </AccordionMui>
  );
};

export default Accordion;
