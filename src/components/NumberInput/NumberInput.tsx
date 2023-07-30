import { useState, useEffect, KeyboardEvent } from 'react';
import { BodyP1 } from '../../components/Common.styled';
import Sign from './Sign';
import { StyledNumberInput } from './NumberInput.styled';

interface INumberInput {
  value: number; // значение "сверху"
  saveHandler: (value: number) => void; // действия "значение вверх"
  errorHandler?: (error: string) => void;
  max?: number;
}

const NumberInput = ({ value, max, saveHandler, errorHandler }: INumberInput) => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState(value || 0);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const saveHandler2 = () => {
    // разбираем ошибки
    const maxError = max && inputValue > max;
    const minError = inputValue < 1;

    const maxErrorMessage = 'Введенное значение больше допустимого';
    const minErrorMessage = 'Введенное значение меньше допустимого';
    const errorMessage = maxError ? maxErrorMessage : minErrorMessage;

    if (maxError || minError) {
      if (errorHandler) {
        errorHandler(errorMessage);
      } else {
        console.log(`Произошла ошибка: ${errorMessage} (обработчик не передан в компонент)`);
      }
    } else {
      setIsActive(false);
      // есть ли изменения?
      if (inputValue !== value) saveHandler(inputValue);
    }
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    if (isActive && e.key === 'Enter') saveHandler2();
    // todo: нужно ли блокировать ввод отрицательных чисел, или лучше выводить сообщение?
    // if (isActive && '-'.includes(e.key)) e.preventDefault(); // в строку для блокировки можно добавлять значения
  };

  return (
    <StyledNumberInput>
      <span>
        <button className='button minus' onClick={() => saveHandler(inputValue - 1)} disabled={value <= 1} title='-1'>
          <Sign sign='minus' />
        </button>
      </span>
      {isActive ? (
        <input
          type='number'
          className='input'
          value={inputValue === 0 ? '' : inputValue}
          onChange={(e) => {
            if (setInputValue) setInputValue(e.target.value === '' ? 0 : parseInt(e.target.value, 10));
          }}
          onBlur={saveHandler2}
          onKeyDown={keyDownHandler}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          min={0}
          max={max || 0}
        />
      ) : (
        <button className='button edit' onClick={() => setIsActive(true)}>
          <BodyP1 $weight={700}>{inputValue || 0}</BodyP1>
        </button>
      )}
      <span>
        <button
          className='button plus'
          onClick={() => saveHandler(inputValue + 1)}
          disabled={!!max && max <= value}
          title='+ 1'>
          <Sign sign='plus' />
        </button>
      </span>
    </StyledNumberInput>
  );
};

export default NumberInput;
