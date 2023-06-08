import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";

interface AmountButtonsProps {
  amount: number;
  increase: () => void;
  decrease: () => void;
}

const AmountButtons: React.FC<AmountButtonsProps> = ({
  amount,
  increase,
  decrease,
}) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (amount === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [amount]);
  return (
    <div className="grid w-[140px] justify-center grid-cols-3 items-center">
      <button
        type="button"
        disabled={disabled}
        className={`${disabled && "opacity-50"}`}
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h1 className="font-semibold text-2xl">{amount}</h1>
      <button type="button" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};
export default AmountButtons;
