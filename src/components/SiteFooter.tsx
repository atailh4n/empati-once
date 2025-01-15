"use client";

import { Button, Flex, Text } from "@/once-ui/components";
import { useEffect } from "react";

const SiteFooter: React.FC = () => {
  useEffect(() => {
    const code = atob(
      "KGZ1bmN0aW9uKCkgewpmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsKICBjb25zb2xlLmxvZygiVHlwZSAnd2hvaXNhdXRob3IoKScgdG8ga25vdyB0aGUgYXV0aG9yLiIpOwp9CiAgd2luZG93Lndob2lzYXV0aG9yID0gZnVuY3Rpb24oKSB7CiAgICAgIGNvbnNvbGUubG9nKCJBdXRob3I6IEF0YSBJbGhhbiBLb2t0dXJrIik7CiAgICAgIGNvbnNvbGUubG9nKCJHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS9hdGFpbGg0biIpOwogIH0KfSkoKTs="
    );
    eval(code);
  }, []);
  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      paddingX="l"
      paddingY="m"
      justifyContent="space-between"
      style={{
        borderTop: "1px solid var(--neutral-border-medium)",
      }}
    >
      <Text variant="body-default-s" onBackground="neutral-weak">
        © 2024 Empati Web Yazılım, Her hakkı saklıdır.
      </Text>
      <Flex gap="12">
        <Button
          href="tel:+905432050200"
          prefixIcon="phone"
          size="s"
          variant="tertiary"
        >
          Telefon
        </Button>
        <Button
          href="https://instagram.com/empatiweb"
          prefixIcon="instagram"
          size="s"
          variant="tertiary"
        >
          Instagram
        </Button>
        <Button
          href="https://wa.me/+905432050200"
          prefixIcon="whatsapp"
          size="s"
          variant="tertiary"
        >
          WhatsApp
        </Button>
      </Flex>
    </Flex>
  );
};

SiteFooter.displayName = "Footer";
export { SiteFooter };
