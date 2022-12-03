import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/counterSlice";

export default function Counter(props) {
  // const { name } = props;
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>{name}</h1> */}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
