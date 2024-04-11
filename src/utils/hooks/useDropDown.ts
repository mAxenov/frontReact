import { useEffect, useRef, useState } from 'react';

function useDropDown(): [() => void, React.RefObject<HTMLDivElement>, boolean] {
  const wrapRef = useRef(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleMouseDown = (event: MouseEvent) => {
    if (
      wrapRef.current &&
      !(wrapRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setShowLoginForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, []);

  const handleButtonClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  return [handleButtonClick, wrapRef, showLoginForm];
}

export default useDropDown;
