"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyleHeader>
      <Link href="/">Главная</Link>
      <nav>
        <StyleUl className="flex gap-4">
          <StyleLi>
            <Link href="/profile">Профиль</Link>
          </StyleLi>
          <StyleLi>
            <Link href="/settings">Настройки</Link>
          </StyleLi>
        </StyleUl>
      </nav>
    </StyleHeader>
  );
}

const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  margin-bottom: -4rem;
`;

const StyleUl = styled.ul`
  display: flex;
  gap: 1rem;
`;

const StyleLi = styled.li`
  list-style-type: none;
`;
