import { useState } from "react"
import { useRecoilState, useRecoilValue } from 'recoil'
import { status } from "../../atoms/status";

export const CheckBoxCustom = () => {
    const [state, setState] = useRecoilState(status);
    const stateValue = useRecoilValue(status);
    console.log(stateValue)
    const handleClick = () => {
        setState(!state);
    }
    return <div className="border border-[#8A8A8A] rounded-[2px] p-[3px] w-[100px] h-[100px] flex justify-center items-center" onClick={handleClick}>
        {state && <ArrowCheckIcon />}
    </div>
}
const ArrowCheckIcon = () => {
    return <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.625 0.8125L2.95 5.1875L1.375 3.4375" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

}