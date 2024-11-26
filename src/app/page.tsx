"use client";

import React from "react";

import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  LetterFx,
  Arrow,
  SmartImage,
} from "@/once-ui/components";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Web Dizayn Randevusu",
      description: "Web Dizayn için saniyeler içinde ulaşın.",
    },
    {
      href: "https://once-ui.com/docs/flexComponent",
      title: "SEO İşlemleri Randevusu",
      description: "Sitenizi en öne çıkarmak için Empati'ye ulaşın.",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Diğer Web İşlemleri",
      description: "Sitenize eşi bulunmaz destek için ulaşın.",
    },
  ];

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
    >
      <Flex
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
        flex={1}
      >
        <Flex
          as="main"
          direction="column"
          justifyContent="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          <Flex direction="column" fillWidth gap="24">
            <Flex
              position="relative"
              flex={0}
              gap="24"
              marginBottom="104"
              direction="column"
            >
              <Heading wrap="balance" variant="display-strong-s">
                <span className="font-secondary">
                  <LetterFx trigger="instant">
                    WEB DESIGN & SEO ALANINDA EN İYİ HİZMET.
                  </LetterFx>
                </span>
              </Heading>
              <span className="font-code font-size-xl">
                Evet, gerçekten rakibimiz yok. Merakınız mı var?
              </span>
              <Button id="contact" href="/contact-us" variant="secondary">
                <Flex alignItems="center">
                  <LetterFx trigger="hover">Bize ulaşın.</LetterFx>
                  <Arrow trigger="#contact" />
                </Flex>
              </Button>
            </Flex>
            <SmartImage
              src="/images/cover.png"
              alt="Web Design & SEO"
              aspectRatio="16/9"
              radius="m"
              objectFit="cover"
            />
          </Flex>
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="repeat(3, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth
          >
            {links.map((link) => (
              <Link
                target="_blank"
                style={{ padding: "var(--responsive-space-l)" }}
                key={link.href}
                href={link.href}
              >
                <Flex fillWidth paddingY="8" gap="8" direction="column">
                  <Flex fillWidth gap="12" alignItems="center">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
}
