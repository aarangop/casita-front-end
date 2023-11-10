"use client";

import React from "react";
import Image from "next/image";
import { UserProfile } from "@auth0/nextjs-auth0/client";

export function AvatarImage({
  user,
  width,
}: {
  user: UserProfile;
  width: number;
}) {
  if (!user.picture) return <div></div>;

  return (
    <Image
      src={user.picture}
      alt={user.nickname || ""}
      width={width}
      height={width}
    />
  );
}
