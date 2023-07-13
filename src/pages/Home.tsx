import s from './home.module.css';
import reactImage from '../app/images/react.png';

const Home = () => {
  return (
    <>
      <h1 className={s.root}>Doog Food Home Page</h1>
      <img className={s.root__image} src={reactImage} alt='React Icon' />
      <p>Пока что здесь песочница, но скоро будет главная сраница сайта!..</p>
    </>
  );
};

export default Home;
