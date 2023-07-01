import { useEffect, useState } from "react";

// get search matches function
export default function useLoader(callback: Function, useEffectDependancies = []) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetching = async () => {
    setIsLoading(true);
    try {
      await callback();
    }
    catch (e) {
      setError(e.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, useEffectDependancies);

  return [isLoading, error];
}




  
