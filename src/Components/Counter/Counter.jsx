import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/ducks/counterSlice";

export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
