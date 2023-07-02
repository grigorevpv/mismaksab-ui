import { useEffect } from "react";

export default function useOutsideClick(ref, callback) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
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