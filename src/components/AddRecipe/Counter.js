import { CounterButton, CounterWrapper } from './Couner.styled';

export const Counter = ({ counter, handleDecrement, handleIncrement }) => {
  return (
    <CounterWrapper>
      <CounterButton type="button" onClick={handleDecrement}>
        -
      </CounterButton>
      <span>{counter}</span>
      <CounterButton type="button" onClick={handleIncrement}>
        +
      </CounterButton>
    </CounterWrapper>
  );
};
