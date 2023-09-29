import { RefObject, useEffect } from "react";

function useCloseModal(ref: RefObject<HTMLDivElement>, onClose: Function) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, onClose]);
}

export default useCloseModal;
