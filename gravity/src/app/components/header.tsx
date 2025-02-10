"use client";

import Link from "next/link";
import React from "react";
import { Gear, LogoGitlab, Person } from "@gravity-ui/icons";
import { Button, Icon } from "@gravity-ui/uikit";

export default function Header() {
  return (
    <header className="flex justify-between py-4 items-center -mb-[86px]">
      <Button view="outlined-action" size="l">
        <Icon data={LogoGitlab} size={18} />
        <Link href="/">Главная</Link>
      </Button>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Button view="action" size="l">
              <Icon data={Person} size={18} />
              <Link href="/profile">Профиль</Link>
            </Button>
          </li>
          <li>
            <Button view="outlined-utility" size="l">
              <Icon data={Gear} size={18} />
              <Link href="/settings">Настройки</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
