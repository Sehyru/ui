"use client";
import { ThemeProvider } from "@gravity-ui/uikit";

export type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <ThemeProvider theme="dark">
      <div className="flex min-h-screen w-full flex-col">{children}</div>;
    </ThemeProvider>
  );
}
