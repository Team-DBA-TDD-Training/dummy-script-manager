import { useCallback, useState } from "react"
import { URL_AI_HELPER } from "../REQUEST_URLs";

type AiPayload = {
  message: string;
}

export const useAiHelper = () => {
  const [loading, setLoading] = useState(false);
  const ask = useCallback(async (value: AiPayload) => {
    setLoading(true);
    const data = await fetch(URL_AI_HELPER, {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .finally(() => setLoading(false))
    return data;
  }, []);

  return {
    loading,
    ask
  }
}