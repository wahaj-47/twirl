import Image from "next/image";
import { Toolbar } from "../toolbar/Toolbar";

export function Header() {
  return (
    <div className="bg-gray-951 flex justify-between rounded-t-md">
      <div className="flex">
        <Image
          src="/unreal.svg"
          alt="logo"
          width={48}
          height={48}
          className="p-1"
        ></Image>
        <Toolbar></Toolbar>
      </div>
      <div className="flex h-[28] items-center">
        <div className="mr-12">
          <p className="text-xs">Playground [DebugGame]</p>
        </div>
        <div className="flex h-full">
          <Image src="/dash.png" alt="dash-icon" className="py-2 px-4"></Image>
          <Image
            src="/restore.png"
            alt="restore-icon"
            className="py-2 px-4"
          ></Image>
          <Image
            src="/close.png"
            alt="clost-icon"
            className="py-2 px-4"
          ></Image>
        </div>
      </div>
    </div>
  );
}
