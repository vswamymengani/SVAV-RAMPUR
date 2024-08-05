import { useEffect } from 'react';
import './specialfonts.css';


const App = () => {
  useEffect(() => {
    // Create link element
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple';
    link.rel = 'stylesheet';
    link.type = 'text/css';

    // Append to head
    document.head.appendChild(link);

    // Clean up on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      {/* <h1 className="font-effect-fire">OUR HIGHLIGHTS</h1> */}
      <h1 className="font-effect-neon">OUR HIGHLIGHTS</h1>
{/* <h1 class="font-effect-outline">Outline Effect</h1>
<h1 class="font-effect-emboss">Emboss Effect</h1>
<h1 class="font-effect-shadow-multiple">Multiple Shadow Effect</h1> */}
    </div>
  );
};

export default App;