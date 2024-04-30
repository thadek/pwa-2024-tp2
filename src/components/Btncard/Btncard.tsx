
import { ButtonClickHandler  } from "../../Types/ButtonClickHandler";

const Btncard= ({onClick }: { onClick: ButtonClickHandler }) => {
return (
    <button onClick={onClick} 
    className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
    type="button"
  >
    <svg viewBox="0 0 512 512" width="20" height="20" className="fill-white " >
      <path
        d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
      />
    </svg>
  </button>
)
};

export default Btncard