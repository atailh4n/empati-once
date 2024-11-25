"use client";

import { Flex, Heading, Logo, ToggleButton } from "@/once-ui/components";
import { usePathname } from "next/navigation";

const SiteHeader: React.FC = () => {
  const pathname = usePathname() ?? "";

  return (
    <Flex>
      <Flex
        hide="s"
        style={{
          borderBottom: "1px solid var(--neutral-border-medium)",
        }}
        as="header"
        fillWidth
        paddingX="m"
        height="64"
        background="surface"
      >
        <Flex hide="s" alignItems="center">
          <Logo
            href="/"
            about="empati.org"
            iconSrc="trademark/logo-dark.png"
            wordmark={false}
          />
          <Heading
            wrap="balance"
            variant="display-strong-xs"
            style={{ marginLeft: "8px", fontSize: "1rem", lineHeight: "1.2" }}
          >
            <span className="font-secondary">EMPATİ</span>
          </Heading>
        </Flex>
        <Flex hide="s" fillWidth gap="4" paddingX="l" alignItems="center">
          <ToggleButton
            selected={pathname === "/about-us"}
            href="/about-us"
            label="Biz Kimiz?"
          />
          <ToggleButton
            selected={pathname === "/portfolio"}
            href="/portfolio"
            label="Portfolyomuz"
          />
          <ToggleButton
            selected={pathname === "/packages"}
            href="/packages"
            label="Paketlerimiz"
          />
          <ToggleButton
            selected={pathname === "/contact-us"}
            href="/contact-us"
            label="İletişim"
          />
        </Flex>
      </Flex>
      <Flex show="s" alignItems="center" fillWidth fillHeight>
        <Flex
          gap="8"
          padding="8"
          alignItems="center"
          justifyContent="center"
          fillWidth
          fillHeight
          style={{
            borderBottom: "1px solid var(--neutral-border-medium)",
          }}
        >
          <Logo
            href="/"
            about="empati.org"
            iconSrc="trademark/logo-dark.png"
            wordmark={false}
          />
          <ToggleButton
            selected={pathname === "/about-us"}
            href="/about-us"
            label="Biz Kimiz?"
          />
          <ToggleButton
            selected={pathname === "/portfolio"}
            href="/portfolio"
            label="Portfolyomuz"
          />
          <ToggleButton
            selected={pathname === "/packages"}
            href="/packages"
            label="Paketlerimiz"
          />
          <ToggleButton
            selected={pathname === "/contact-us"}
            href="/contact-us"
            label="İletişim"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

SiteHeader.displayName = "Header";
export { SiteHeader };
