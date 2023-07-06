import { useEffect } from "react";

export default function useOutsideClick(ref: React.RefObject<HTMLDivElement>, callback: () => void) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref && ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }
      // Bind the event listener
      document.addEventListener("click", handleClickOutside);
  
      // cleanup
      return () => {
        document.removeEventListener("click", handleClickOutside);
      }
    }, [ref]);
   }