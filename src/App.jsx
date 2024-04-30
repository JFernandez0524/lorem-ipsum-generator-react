import { useState } from 'react';
import text from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [textArray, setTextArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loremGenerator = text.slice(0, parseInt(count));
    setTextArray(loremGenerator);
    setCount(1);
  };

  return (
    <main className='section-center'>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          min={1}
          max={8}
          step={1}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
      <section className='lorem-text'>
        {textArray.map((text) => {
          return <p key={nanoid()}>{text}</p>;
        })}
      </section>
    </main>
  );
};
export default App;
