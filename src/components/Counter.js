import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState();
    return (
        <>
            <h2>Counter with Redux-toolkit with React-Redux </h2>
            <h3>Count:{count}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <div>
                <input
                    type="number"
                    // name="num"
                    // placeholder="Number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                />
                <button onClick={() => dispatch(incrementByAmount(incrementAmount || 0))}>Increment by amount</button>
            </div>
        </>
    )
}

export default Counter;