import { useEffect, useState } from "react";

export default function useTotalVisits(apiBase) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!apiBase) return;
    // סופרים כל טעינת אתר (סה״כ כניסות)
    fetch(`${apiBase}/api/visit`, { method: "POST" })
      .then(() => fetch(`${apiBase}/api/visits`))
      .then(r => r.json())
      .then(setStats)
      .catch(() => {});
  }, [apiBase]);

  return stats;
}