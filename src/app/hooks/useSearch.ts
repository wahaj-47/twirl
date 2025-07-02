import { useState, useMemo } from "react";

function flatten(obj: unknown): string[] {
  if (obj == null) return [];

  if (
    typeof obj === "string" ||
    typeof obj === "number" ||
    typeof obj === "boolean"
  ) {
    return [String(obj)];
  }

  if (Array.isArray(obj)) {
    return obj.flatMap(flatten);
  }

  if (typeof obj === "object") {
    return Object.values(obj).flatMap(flatten);
  }

  return [];
}

export function useSearch<T extends object>(data: T[], initialTerm = "") {
  const [term, setTerm] = useState(initialTerm);

  const filtered = useMemo(() => {
    if (!term) return data;

    const lower = term.toLowerCase();
    return data.filter((item) =>
      flatten(item).join(" ").toLowerCase().includes(lower)
    );
  }, [data, term]);

  return {
    term,
    setTerm,
    filtered,
  };
}
