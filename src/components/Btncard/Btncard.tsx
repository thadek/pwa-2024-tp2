
import { ButtonClickHandler  } from "../../Types/ButtonClickHandler";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const Btncard= ({onClick }: { onClick: ButtonClickHandler }) => {
return (
    <button onClick={onClick} 
    className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
    type="button"
  >
    <ArrowLongRightIcon className="h-5 w-5" aria-hidden="true" />
  </button>
)
};

export default Btncard