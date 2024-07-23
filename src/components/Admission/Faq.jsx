import { useState } from 'react';
import './Faq.css';

const QuestionAnswer = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="question" onClick={onClick}>
      <h3>{isOpen ? '−' : '+'} {question}</h3>
      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const qaData = [
    { question: 'What are grades offered at SVAV?', answer: 'Currently, Nursery to VIII, will be upgraded to till class XII.' },
    { question: 'School Timings', answer: '8:30am – 3:30pm (physical school)' },
    { question: 'What is the head count per section?', answer: 'Head count – 25 per section' },
    { question: 'Why to choose SVAV and how different is SVAV from other schools?', answer:'Blended curriculum: Focuses on culmination of ancient wisdom with latest teaching techniques and technology.'},
    { question: 'What are the extracurricular and co-curricular activities offered at SVAV?', answer:'Games & Sports, Music, Dance, Yoga, Art & Craft, Sadacharam & Sanskrit classes, clubs'},
    { question: 'Is Transportation available?', answer: 'Yes, Mehidipatnam, Attapur, Manikonda, Shamshabad, Aaramgarh via Rajendranagar, Moinabad & Chilkur routes at present.' }
  ];

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="App">
      <span id="fa">FAQ'S</span>
      <div className="qa-box">
        {qaData.map((qa, index) => (
          <QuestionAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
            isOpen={openQuestionIndex === index}
            onClick={() => handleQuestionClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
