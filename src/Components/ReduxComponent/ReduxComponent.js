import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

const ReduxComponent = () => {
    // создать деспетчера
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handlerDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick={handlerDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}
export default ReduxComponent;