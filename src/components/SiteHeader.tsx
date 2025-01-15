"use client";

import { Flex, Heading, Logo, ToggleButton } from "@/once-ui/components";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SiteHeader: React.FC = () => {
  const pathname = usePathname() ?? "";
  useEffect(() => {
    const code = atob(
      "KGZ1bmN0aW9uKCkgewpmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsKICBjb25zb2xlLmxvZygiVHlwZSAnd2hvaXNhdXRob3IoKScgdG8ga25vdyB0aGUgYXV0aG9yLiIpOwp9CiAgd2luZG93Lndob2lzYXV0aG9yID0gZnVuY3Rpb24oKSB7CiAgICAgIGNvbnNvbGUubG9nKCJBdXRob3I6IEF0YSBJbGhhbiBLb2t0dXJrIik7CiAgICAgIGNvbnNvbGUubG9nKCJHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS9hdGFpbGg0biIpOwogIH0KfSkoKTs="
    );
    eval(code);
  }, []);

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
            iconSrc="trademark/logo-dark.webp"
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
      <Flex flex={1} show="s" alignItems="center" fillWidth fillHeight>
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
            iconSrc="trademark/logo-dark.webp"
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
