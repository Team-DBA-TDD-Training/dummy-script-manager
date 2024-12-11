import { useCallback, useEffect, useState } from "react"
import { Script } from "../Script";
import { FETCH_ALL_SCRIPTS_API_URL } from "../REQUEST_URLs";

/**
 * Fetches script from API
 */
export const useScripts = () => {
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchScripts = useCallback(() => {
    setLoading(true);
    fetch(FETCH_ALL_SCRIPTS_API_URL).then(resp => resp.json()).then(data => {
      setScripts(data as unknown as Script[])
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    fetchScripts();
  }, [setScripts, fetchScripts])

  return {
    scripts,
    loading,
    refetch: fetchScripts
  }
}