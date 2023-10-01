import React, { useState, useEffect } from 'react';

const TxtRotate = ({ messages, interval }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    let typingTimeout;

    // Function to simulate typing animation
    function typeWriter(text) {
      let charIndex = 0;
      setCurrentMessage('');

      function type() {
        if (charIndex < text.length) {
          setCurrentMessage((prevMessage) => prevMessage + text.charAt(charIndex));
          charIndex++;
          typingTimeout = setTimeout(type, 100); // Typing speed: 100ms per character
        }
      }

      type();
    }

    // Function to rotate the text messages
    function rotateText() {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }

    // Initialize the typing animation for the first message
    typeWriter(messages[currentMessageIndex]);

    // Start rotating the messages with the specified interval
    const rotationInterval = setInterval(rotateText, interval);

    // Clear the typing animation timeout and interval on component unmount
    return () => {
      clearTimeout(typingTimeout);
      clearInterval(rotationInterval);
    };
  }, [messages, interval, currentMessageIndex]);

  return (
    <h1 className="txt-rotate" style={{color: "#3E64FF"}}>
      <span className="wrap">{currentMessage}</span>
    </h1>
  );
};

export default TxtRotate;
