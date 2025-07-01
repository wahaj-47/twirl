import { menus } from "../toolbar/data";
import { Toolbar } from "../toolbar/Toolbar";

export function Header() {
  return (
    <div className="bg-gray-951 flex justify-between rounded-t-md">
      <div className="flex">
        <img src="/unreal.svg" width={48} height={48} className="p-1"></img>
        <Toolbar></Toolbar>
      </div>
      <div className="flex h-[28] items-center">
        <div className="mr-12">
          <p className="text-xs">Playground [DebugGame]</p>
        </div>
        <div className="flex h-full">
          <img src="/dash.png" className="py-2 px-4"></img>
          <img src="/restore.png" className="py-2 px-4"></img>
          <img src="/close.png" className="py-2 px-4"></img>
        </div>
      </div>
    </div>
  );
}
