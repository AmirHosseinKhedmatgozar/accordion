import { useState } from "react";
import "./App.css";
// Accordion

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
export default App;
function Accordion({ data }) {
  const [curOpen, setCureOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          number={i}
          title={el.title}
          key={el.title}
          curOpen={curOpen}
          onOpen={setCureOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        number="*"
        title="TEST"
        key="test"
        curOpen={curOpen}
        onOpen={setCureOpen}
      >
        <h3>"FRONT END"</h3>
      </AccordionItem>
    </div>
  );
}
function AccordionItem({ number, title, curOpen, onOpen, children }) {
  const isOpen = curOpen === number;
  function open() {
    isOpen ? onOpen(null) : onOpen(number);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={open}>
      <p className="number">{number < 10 ? `0${number + 1}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
