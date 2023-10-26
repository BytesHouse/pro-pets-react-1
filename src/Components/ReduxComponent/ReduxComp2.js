import { useSelector } from "react-redux"

export default function ReduxComp2() {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            <button>-</button>
            <span>{count}</span>
            <button>+</button>
        </div>
    )
}