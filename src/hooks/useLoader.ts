import { useState } from "react";

// get search matches function
export default function useLoader(callback: Function, fnAction = 'execute',) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetching = async (args: any) => {
      try {
        setIsLoading(true);
        const fn = await callback(args);
        if (fnAction === 'return') return fn; // if second argument is RETURN then callback will be returned
        return 
      }
      catch(e: any) {
        setError(e.message);
      }
      finally {
        setIsLoading(false);
      }
    }

    return [fetching, isLoading, error];
  }