import { useState, useEffect } from "react";
import '../../assets/css/About/About.css';

const Animation = ({ content, speed }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent((displayedContent)=>displayedContent + content[index]) 
  }, [index])

  return <p className='aficiones'>{displayedContent}</p>;
};

const sample_content = `Alive = True;
while Alive:
  try:
   hard();
  except Exception as in life:
   jumpOverIt();
   tryagain();`;

export default Animation;