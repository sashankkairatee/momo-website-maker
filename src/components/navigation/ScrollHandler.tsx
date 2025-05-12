
import { useState, useEffect } from 'react';

interface ScrollHandlerProps {
  children: (isScrolled: boolean) => React.ReactNode;
}

const ScrollHandler = ({ children }: ScrollHandlerProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <>{children(isScrolled)}</>;
};

export default ScrollHandler;
