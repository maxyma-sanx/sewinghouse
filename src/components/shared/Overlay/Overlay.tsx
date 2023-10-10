import { DIRECTION } from "@/constants";

interface OverlayProps {
  onClose: () => void;
  isOpen: boolean;
  direction: string;
}

const Overlay: React.FC<OverlayProps> = ({ onClose, isOpen, direction }) => {
  return (
    <div
      onClick={onClose}
      className={`
        absolute 
        bottom-0 
        left-0 
        right-0 
        top-0 
        ${!isOpen && direction === DIRECTION.right ? "-translate-x-full" : "translate-x-0"}
        ${!isOpen && direction === DIRECTION.down ? "-translate-y-full" : "translate-y-0"}
        bg-black
        opacity-50
        transition
        dark:bg-white
        ${!isOpen ? "delay-500" : "delay-0"}
        duration-0
      `}
    ></div>
  );
};

export default Overlay;
