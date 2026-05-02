'use client';

import { useState, useEffect } from 'react';

interface TypingHeadlineProps {
  text: string;
  className?: string;
  startDelay?: number;
}

export default function TypingHeadline({ text, className = '', startDelay = 0 }: TypingHeadlineProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      const type = () => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(type, 50);
        } else {
          setIsDone(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, startDelay]);

  return (
    <span className={`text-imcc-sky font-bold ${className}`}>
      {displayedText}
      {!isDone && <span className="typing-cursor">|</span>}
      <style jsx>{`
        .typing-cursor {
          animation: blink 0.7s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
