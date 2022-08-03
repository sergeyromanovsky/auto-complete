import { useCallback, useMemo, useState } from "react";
import { useEffect, useRef } from "react";
import { debounce } from "utils/debounce";

interface State<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
}
type Cache<T> = { [url: string]: T };

export function useFetch<T = unknown>(
  url?: string,
  options?: RequestInit
): State<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const fetchData = useCallback(
    async (url?: string) => {
      // Do nothing if the url is not given
      if (!url) {
        return;
      }

      try {
        cancelRequest.current = false;
        setIsLoading(true);

        // If a cache exists for this url, return it
        if (cache.current[url]) {
          setData(cache.current[url]);
          return;
        }
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;
        cache.current[url] = data;

        if (cancelRequest.current) {
          return;
        }
        setData(data);
      } catch (error) {
        if (cancelRequest.current) {
          return;
        }
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [options]
  );

  const debouncedFetch = useMemo(() => debounce(fetchData), [fetchData]);

  useEffect(() => {
    debouncedFetch(url);
    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
  }, [url, debouncedFetch]);

  return { isLoading, data, error };
}
