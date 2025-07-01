import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Log } from "./Log";

export function Console() {
  return (
    <Popover>
      <PopoverButton className="flex text-xs focus:outline-none bg-gray-601 px-4 py-1 data-hover:bg-gray-301">
        Output Log
      </PopoverButton>
      <PopoverBackdrop className="fixed inset-0" />
      <PopoverPanel
        className="transition duration-100 data-closed:translate-y-100 right-[16px]"
        anchor={{ to: "top start", offset: "16px" }}
        transition
      >
        <Log></Log>
      </PopoverPanel>
    </Popover>
  );
}
