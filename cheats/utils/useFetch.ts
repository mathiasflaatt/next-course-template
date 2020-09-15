import { useAsync } from "src/utils/useAsync";
import { useMemo } from "react";

const defaultOptions: RequestInit = {
  method: "GET",
};
export function useFetch<T>(url: RequestInfo, optionsOverride?: RequestInit) {
  const options = useMemo(() => ({ ...defaultOptions, ...optionsOverride }), [
    optionsOverride,
  ]);

  return useAsync<T>(
    async (u: RequestInfo, o?: RequestInit) => {
      if (!url) return null;
      const response = await fetch(u, o);
      return response.json() as Promise<T>;
    },
    [url, options]
  );
}
