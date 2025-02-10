import { Heading } from "@radix-ui/themes";

export default function Profile() {
  return (
    <Heading
      color="jade"
      as="h1"
      size="9"
      className="h-screen text-center content-center"
    >
      Добро пожаловать в профиль!
    </Heading>
  );
}
