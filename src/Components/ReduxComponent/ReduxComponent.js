import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount} from "../../features/counter/counterSlice";

let amount = prompt("Enter amount number", "");
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
    const handlerIncrementByAmount = () => {
        dispatch(incrementByAmount(+amount))
    }
    const handlerDecrementByAmount = () => {
        dispatch(decrementByAmount(+amount))
    }

    return (
        <div><center>
            <h2>This is the control component</h2>
            <button onClick={handlerDecrement}>-&nbsp; </button>
            <span><b>( {count} )</b></span>
            <button onClick={handleIncrement}>&nbsp; +</button>
            <br />
            <h2>Amount usage</h2>
            <button onClick={handlerDecrementByAmount}>-{amount}</button> /&nbsp; 
            <button onClick={handlerIncrementByAmount}>+{amount}</button>
            <br />
            =====================
        </center>

                    </div>
    )
}
export default ReduxComponent;