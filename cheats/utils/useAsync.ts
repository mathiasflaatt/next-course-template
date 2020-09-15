import { useState, useCallback, useEffect } from "react";

export function useAsync<T>(
  asyncFn: (...args: any[]) => Promise<T>,
  args: any[]
): [T | null, boolean, Error | null] {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const memoizedFn = useCallback(asyncFn, args);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setData(null);
    setError(null);
    memoizedFn(...args)
      .then((data: T) => {
        if (mounted) {
          setLoading(false);
          setData(data);
        }
      })
      .catch((e: Error) => {
        if (mounted) {
          setLoading(false);
          setError(e);
        }
      });
    return () => {
      mounted = false;
    };
  }, [memoizedFn, args]);

  return [data, loading, error];
}
