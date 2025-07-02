"use client";

import { useEffect, useRef } from "react";
import { useLogsContext } from "./LogContext";
import { useSearch } from "@/app/hooks/useSearch";
import { SearchInput } from "../search/SearchInput";
import classNames from "classnames";

export function Log() {
  const logs = useLogsContext();
  const anchorRef = useRef<HTMLDivElement>(null);
  const { term, setTerm, filtered } = useSearch(logs, "");

  useEffect(() => {
    anchorRef.current?.scrollIntoView(false);
  }, [logs]);

  return (
    <div className="bg-gray-601 p-2 rounded-t-lg">
      <SearchInput
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        placeholder="Search log"
      ></SearchInput>
      <div className="h-60 bg-gray-801 text-sm font-mono p-4 rounded-sm overflow-auto w-full">
        {filtered.map((log, idx) => {
          const logClass = classNames({
            "text-gray-300": log.type === "log",
            "text-yellow-400": log.type === "warn",
            "text-blue-500": log.type === "info",
            "text-purple-400": log.type === "debug",
            "text-red-400": log.type === "error",
          });
          return (
            <p key={idx} className={logClass}>
              <span className="capitalize">{log.type}</span>: {log.message}
            </p>
          );
        })}
        <div ref={anchorRef} className="p-2" />
      </div>
    </div>
  );
}
