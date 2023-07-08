import { useState, FormEvent, HTMLAttributes, DetailedHTMLProps, useContext } from 'react';
import cn from 'classnames';
import styles from './search.module.css';
import { ReactComponent as CloseIcon } from './ic-close-input.svg';
import { Button, Input } from '../../atoms';
import FilterContext from '../../context/FilterContext';

type SearchProps = DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const { setFilter } = useContext(FilterContext);
  const [text, setText] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter(text);
    setText('');
  };

  const clearHandler = () => {
    setText('');
    setFilter('');
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
