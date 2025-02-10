import { Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <Heading
      color="violet"
      as="h1"
      size="9"
      className="h-screen text-center content-center"
    >
      Добро пожаловать на сайт!
    </Heading>
  );
}
