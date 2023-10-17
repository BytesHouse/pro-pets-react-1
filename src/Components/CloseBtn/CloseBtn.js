import CloseIcon from "../icons/CloseIcon";

export default function CloseBtn({ ...rest }) {
  const { className, onClick, children = CloseIcon } = rest;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
