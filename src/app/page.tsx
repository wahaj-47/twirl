"use client";

import { Pinball } from "@/components/pinball/Pinball";
import {
  DockviewReact,
  DockviewReadyEvent,
  IDockviewPanelProps,
  themeVisualStudio,
} from "dockview-react";

const components = {
  default: (props: IDockviewPanelProps<{ title: string }>) => {
    return (
      <div className="h-full p-[20px] bg-gray-951">{props.params.title}</div>
    );
  },
  pinball: Pinball,
};

export default function RootDockview() {
  const onReady = (event: DockviewReadyEvent) => {
    event.api.addPanel({
      id: "panel_1",
      component: "pinball",
    });
  };

  return (
    <DockviewReact
      components={components}
      onReady={onReady}
      theme={themeVisualStudio}
    ></DockviewReact>
  );
}
