import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between py-4 items-center -mb-16">
      <Link className={buttonVariants({ variant: "destructive" })} href="/">
        Главная
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/profile"
            >
              Профиль
            </Link>
          </li>
          <li>
            <Link
              className={`${buttonVariants({ variant: "outline" })} `}
              href="/settings"
            >
              Настройки
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
