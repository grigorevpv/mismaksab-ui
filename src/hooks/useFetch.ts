import { useState } from "react";

// get search matches function
export default function useFetch(callback: Function) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetching = async () => {
      try {
        setIsLoading(true);
        await callback();
      }
      catch(e) {
        setError(e.message);
      }
      finally {
        setIsLoading(false);
      }
    }

    return [fetching, isLoading, error];
  }