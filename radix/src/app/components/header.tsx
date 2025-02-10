import { GearIcon, GitHubLogoIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between py-4 items-center -mb-16">
      <Button variant="outline">
        <GitHubLogoIcon /> <Link href="/">Главная</Link>
      </Button>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Button variant="soft">
              <PersonIcon /> <Link href="/profile">Профиль</Link>
            </Button>
          </li>
          <li>
            <Button variant="soft">
              <GearIcon /> <Link href="/settings">Настройки</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
