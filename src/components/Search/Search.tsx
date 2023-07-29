import { useState, FormEvent, HTMLAttributes, DetailedHTMLProps } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './search.module.css';
import { ReactComponent as CloseIcon } from './ic-close-input.svg';
import { Button, Input } from '../../atoms';

type SearchProps = DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      setText('');
      navigate(`search?q=${text}`);
    }
  };

  const clearHandler = () => {
    setText('');
  };

  return (
    <form className={cn(className, styles.search)} {...props} onSubmit={submitHandler}>
      <Input className={styles.input} placeholder='Поиск...' value={text} onChange={(e) => setText(e.target.value)} />
      <Button className={styles.button} variant='primary' onClick={clearHandler} type='reset'>
        <CloseIcon />
      </Button>
    </form>
  );
};

export default Search;
