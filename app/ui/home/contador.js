import { useEffect, useState } from 'react';

function Contador({ initialValue, targetValue, leyenda, milisegundos, id, porcentaje = false, path }) {
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
        <p id="valor-experiencia" className='flex justify-center w-100 text-10xl sm:text-15xl text-white leading-none'>{counter}{porcentaje == true ? '%' : ''}</p>
        <div className='w-100 mt-4 flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d={`${path}`}/></svg>
        </div>
        <h2 className='text-xl sm:text-2xl w-100 mt-4 text-white text-center'>{leyenda}</h2>
    </div>
  );
}

export default Contador;