import "./animation.css";
import { Wrapper, Main, Item } from "./Loader.styled";

interface ILoaderItem {
  delay: number;
  rotate: number;
}

const Loader = () => {
  const items: ILoaderItem[] = [];

  let rotate = 0;
  let delay = -1.1;
  while (rotate < 360) {
    items.push({ rotate, delay });
    rotate += 30;
    delay += 0.1;
  }

  return (
    <Wrapper>
      <Main>
        {items.map(({ delay, rotate }) => (
          <Item key={rotate.toString()} $delay={delay} $rotate={rotate} />
        ))}
      </Main>
    </Wrapper>
  );
};

export default Loader;
