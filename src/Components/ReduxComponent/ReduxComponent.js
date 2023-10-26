import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../features/counter/counterSlice";

export const ReduxComponent = () => {
    // создать диспетчер
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div> <center>
            <button onClick={handleDecrement}> - </button>
            <span>( {count} )</span>
            <button onClick={handleIncrement}> + </button>
        </center>
        </div>
    )
}