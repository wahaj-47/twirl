"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ConsoleMethod = "log" | "warn" | "error" | "info" | "debug";

type LogEntry = {
  type: ConsoleMethod;
  message: string;
};

const LogsContext = createContext<LogEntry[]>([]);

export function useLogsContext() {
  return useContext(LogsContext);
}

export function LogsContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const methods: ConsoleMethod[] = ["log", "warn", "error", "info", "debug"];
    const original: Partial<Record<ConsoleMethod, (...args: any[]) => void>> =
      {};

    methods.forEach((method) => {
      original[method] = console[method];

      console[method] = (...args: any[]) => {
        const formatted = args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
          )
          .join(" ");

        setLogs((prev) => [...prev, { type: method, message: formatted }]);

        original[method]?.(...args);
      };
    });

    return () => {
      methods.forEach((method) => {
        if (original[method]) {
          console[method] = original[method]!;
        }
      });
    };
  }, []);

  return <LogsContext.Provider value={logs}>{children}</LogsContext.Provider>;
}
