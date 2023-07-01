import { useState } from 'react';
import s from './home.module.css';
import reactImage from '../app/images/react.png';
import { ReactComponent as LogoIcon } from '../app/images/logo.svg';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <LogoIcon className={s.root__icon} />
      <img className={s.root__image} src={reactImage} alt='test' />
      <h1 className={s.root}>React Typescript Webpack</h1>
      <button className='test' onClick={() => setCount((c) => c + 1)}>
        Count- {count}
      </button>
    </>
  );
};

export default Home;
