import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/ducks/userReducer";

import Counter from "./Counter";

export default function Votes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);
  const count = useSelector((state) => state.counter.count);

  const voters = ["Abe", "Beo", "Obe", "Eba"];

  return (
    <div>
      {user && <h1> Hello, {user.firstName} </h1>}
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
