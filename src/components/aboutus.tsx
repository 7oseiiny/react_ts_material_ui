import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store';
import { decremented, incremented } from '../store/counterstore';

export default function Aboutus() {

    const dispatch: AppDispatch = useDispatch();
    const counterValue = useSelector((state: RootState) => state.counter.value);
  
    const increment = () => {
      dispatch(incremented());
    };
  
    const decrement = () => {
      dispatch(decremented());
    };
  
    return (
      <div>
        <div>Counter Value: {counterValue}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );

  
}
