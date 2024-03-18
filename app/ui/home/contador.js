import { useEffect, useState } from 'react';

function Contador({ initialValue, targetValue, leyenda, milisegundos, id }) {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this value as needed
      }
    );

    observer.observe(document.getElementById(id));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let intervalId;

    if (isVisible) {
      intervalId = setInterval(() => {
        if (counter < targetValue) {
          setCounter((prevCounter) => prevCounter + 1);
        }
      }, milisegundos); // Adjust the interval as needed
    }

    return () => clearInterval(intervalId);
  }, [isVisible, counter, targetValue]);

  return (
    <div className='p-8' id={id}>
        <p id="valor-experiencia" className='flex justify-center text-15xl text-white'>{counter}</p>
        <h2 className='text-2xl text-white text-center'>{leyenda}</h2>
    </div>
  );
}

export default Contador;