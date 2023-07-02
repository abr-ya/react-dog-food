import { useState, FormEvent, HTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './search.module.css';
import { ReactComponent as CloseIcon } from './ic-close-input.svg';
import { Button, Input } from '../../atoms';

type SearchProps = DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const goToSearch = () => {
    console.log(search);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goToSearch();
  };

  const clearHandler = () => setSearch('');

  return (
    <form className={cn(className, styles.search)} {...props} role='search' onSubmit={submitHandler}>
      <Input
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button className={styles.button} variant='primary' aria-label='Искать по сайту' onClick={clearHandler}>
        <CloseIcon />
      </Button>
    </form>
  );
};

export default Search;
