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
} from "@/once-ui/components";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const links = [
    {
      href: "https://wa.me/+905432050200",
      title: "Web Tasarım Randevusu",
      description: "Web tasarım için saniyeler içinde ulaşın.",
    },
    {
      href: "https://wa.me/+905432050200",
      title: "SEO İşlemleri Randevusu",
      description: "Sitenizi en öne çıkarmak için Empati'ye ulaşın.",
    },
    {
      href: "https://wa.me/+905432050200",
      title: "Diğer Web İşlemleri",
      description: "Sitenize eşi bulunmaz destek için ulaşın.",
    },
  ];

  return (
    <Flex
      fillWidth
      flex={1}
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
    >
      <Flex
        position="relative"
        flex={1}
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
      >
        <Flex
          as="main"
          flex={1}
          direction="column"
          justifyContent="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          <Flex mobileDirection="column" fillWidth gap="24">
            <Flex
              position="relative"
              flex={1}
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
                Evet, gerçekten rakibimiz yok. Merakınız mı var? Ya da rakip mi buldunuz?
              </span>
              <Button id="contact" href="/contact-us" variant="secondary">
                <Flex alignItems="center">
                  <LetterFx trigger="hover">Bize ulaşın.</LetterFx>
                  <Arrow trigger="#contact" />
                </Flex>
              </Button>
            </Flex>
            <Image
              src="/images/empati_jobs.png"
              width={640}
              height={360}
              alt="Web Design Tasarım & SEO"
              objectFit="scale-down"
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
