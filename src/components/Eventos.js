import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [counters, setCounters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function createCounter(minutes) {
    const name = document.getElementById('name').value;
    setCounters(prevCounters => [...prevCounters, { minutes, seconds: 0, isRunning: false, name }]);
  }
  

  function startAll() {
    setCounters(prevCounters => {
      if (prevCounters.some(counter => !counter.isRunning)) {
        setCurrentIndex(0);
        return prevCounters.map((counter, index) => {
          if (index === 0) {
            return { ...counter, isRunning: true };
          } else {
            return counter;
          }
        });
      } else {
        setCurrentIndex(0);
        return prevCounters.map((counter, index) => {
          if (index === 0) {
            return { ...counter, isRunning: true };
          } else {
            return { ...counter, isRunning: false };
          }
        });
      }
    });
  }

  function startNext(index) {
    setCounters(prevCounters => {
      return prevCounters.map((counter, i) => {
        if (i === index + 1) {
          return { ...counter, isRunning: true };
        } else if (i === index) {
          return { ...counter, isRunning: false };
        } else {
          return counter;
        }
      });
    });
    setCurrentIndex(index + 1);
  }

  return (
    <div className="container mt-5">
      <div className="form-inline mb-3">
        <label className="mr-3" htmlFor="name">Nombre:</label>
        <input className="form-control mr-3" type="text" id="name" />
        <label className="mr-3" htmlFor="minutes">Minutos:</label>
        <input className="form-control mr-3" type="number" min="0" max="59" id="minutes" />
        <button className="btn btn-primary" onClick={() => {
          const minutes = document.getElementById('minutes').value;
          createCounter(minutes);
        }}>
          Crear
        </button>
      </div>
      <button className="btn btn-primary" onClick={startAll}>Inciar</button>
      <div className="counters mt-3">
        {counters.map((counter, index) => (
          <Counter
            key={index}
            minutes={counter.minutes}
            seconds={counter.seconds}
            isRunning={counter.isRunning && currentIndex === index}
            index={index}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            startNext={startNext}
            name={counter.name}
          />
        ))}
      </div>
    </div>
  );
  

}

function Counter({ minutes, seconds, isRunning, index, currentIndex, setCurrentIndex, startNext,name }) {
    const [timeLeft, setTimeLeft] = useState((minutes * 60) + seconds);
  
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => {
          setTimeLeft(prevTime => {
            if (prevTime > 0) {
              return prevTime - 1;
            } else {
              clearInterval(interval);
              startNext(index);
              return 0;
            }
          });
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [isRunning, index]);
  
    const minutesString = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const secondsString = String(timeLeft % 60).padStart(2, '0');
  
    return (
      <div className="counter mb-3">
        <div class="card text-center">
          <div class="card-header">
            <h3>{name}</h3>
          </div>
          <div class="card-body">
            {timeLeft > 0 ? (
              <p class="display-2 text-secondary">{minutesString}:{secondsString}</p>
            ) : (
              <p class="display-2 text-danger">&#x2715;</p>
            )}
          </div>
        </div>
      </div>
    );
  }
  



export default App;
