"use client";

import { Button, Flex, Text } from "@/once-ui/components";

const SiteFooter: React.FC = () => {
  return (
    <Flex
      as="footer"
      flex={1}
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
      <Flex flex={1} gap="12">
        <Button href="tel:+905444444444" size="s" variant="tertiary">
          Telefon
        </Button>
        <Button
          href="https://discord.com/invite/5EyAQ4eNdS"
          prefixIcon="FaInstagram"
          size="s"
          variant="tertiary"
        >
          Instagram
        </Button>
      </Flex>
    </Flex>
  );
};

SiteFooter.displayName = "Footer";
export { SiteFooter };
