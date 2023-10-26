import { useSelector } from "react-redux"

export default function ReduxComp2() {
    const count = useSelector((state) => state.counter.value)
    return (
        <div><center>
            <h2>This is a dependent component</h2>
            
            <span><b>( {count} )</b></span>
            
        </center>
        </div>
    )
}