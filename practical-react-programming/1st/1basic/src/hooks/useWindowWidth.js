import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    console.log(1);
    window.addEventListener('resize', onResize);

    return () => {
      console.log(2);
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return width;
};

export default useWindowWidth;
