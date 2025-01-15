"use client";

import { Button, Flex, Text } from "@/once-ui/components";

const SiteFooter: React.FC = () => {
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
        <Button href="tel:+905432050200" prefixIcon="phone" size="s" variant="tertiary">
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
