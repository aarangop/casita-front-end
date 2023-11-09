import React from "react";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col bg-dark-2 items-center justify-center space-y-6 h-screen">
      <h1>Welcome to</h1>
      <Image
        src="/logo-no-background.png"
        alt="Casita logo"
        width={200}
        height={124}
      />
      <p>
        Please{" "}
        <a
          className="hover:text-primary text-secondary transition-all"
          href={"/login"}
        >
          login
        </a>{" "}
        to start!
      </p>
    </div>
  );
}
