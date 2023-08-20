import React from "react";
import { Avatar } from "@/components/Avatar/Avatar";

export default function ProfileButtonWithAvatar({
  alias,
  fullName,
  avatarSize,
}: {
  alias: string;
  fullName: string;
  avatarSize: number;
}) {
  const avatar = (
    <Avatar rounded={true} fullName={fullName} width={avatarSize} />
  );

  return (
    <div className="flex flex-row items-center">
      <div className="align-middle dark:bg-slate-700 bg-slate-100 rounded-full sm:hidden lg:flex lg:flex-row">
        <a href="/profile" className="p-2 flex flex-row items-center">
          <p className="px-2">{alias}</p>
          {avatar}
        </a>
      </div>
      <a href="/profile" className="">
        <div className="md:hidden">{avatar}</div>
      </a>
    </div>
  );
}
