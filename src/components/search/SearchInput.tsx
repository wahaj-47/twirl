import { InputHTMLAttributes } from "react";
import { Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput(props: SearchInputProps) {
  return (
    <div className="flex items-center bg-gray-951 mb-2 rounded-xl w-120 px-2 py-[2px] text-xs">
      <MagnifyingGlassIcon className="size-4 mr-1"></MagnifyingGlassIcon>
      <Input
        className="focus:outline-none w-full"
        placeholder="Search"
        {...props}
        type="text"
      ></Input>
    </div>
  );
}
