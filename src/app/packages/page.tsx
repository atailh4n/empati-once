"use client";

import React from "react";
import {
  Flex,
  GlitchFx,
  Grid,
  Heading,
  Text,
  Icon,
} from "@/once-ui/components";
import Link from "next/link";
import Image from "next/image";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";

const packages = [
  {
    index: 0,
    href: "/contact-us",
    title: "BAŞLANGIÇ PAKETİ",
    description:
      "Web tasarım ve SEO temel hizmetlerini içerir. Hızlı başlamak isteyenler için ideal.",
    price: "₺1,800",
  },
  {
    index: 1,
    href: "/contact-us",
    title: "Profesyonel Paket",
    description:
      "SEO optimizasyonu ve özel web tasarım çözümleriyle, işinizi bir üst seviyeye taşıyın.",
    price: "₺4,700",
  },
  {
    index: 2,
    href: "/contact-us",
    title: "Kurumsal Paket",
    description:
      "Tam kapsamlı SEO ve özel tasarım hizmetiyle, markanızı dijital alanda zirveye taşıyın.",
    price: "DETAYLI BİLGİ",
  },
];

export default function Portfolio() {
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
        justifyContent="center"
      >
        <Flex
          as="main"
          flex={1}
          direction="column"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
          justifyContent="center"
        >
          {/*Content*/}

          <Flex>
            <Image
              src={"/trademark/logo-dark.webp"}
              alt={"empati.org"}
              width={48}
              height={48}
            />
            <Heading wrap="balance" variant="display-strong-s" paddingX="8">
              <span className="font-secondary">
                <GlitchFx trigger="instant">HİZMET PAKETLERİMİZ</GlitchFx>
              </span>
            </Heading>
          </Flex>
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="1fr"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth
            maxWidth="l"
          >
            {packages.map((pkg) => (
              <Link
                key={pkg.index}
                href={pkg.href}
                style={{ padding: "var(--responsive-space-l)" }}
              >
                <Flex
                  fillWidth
                  direction="column"
                  alignItems="center"
                  radius="l"
                  border="neutral-medium"
                  borderStyle="solid-1"
                  padding="4" // Paddingleri küçülttük
                  maxWidth={"l"}
                >
                  <Flex fillWidth justifyContent="center">
                    <Image
                      src={"/trademark/logo-dark.webp"}
                      alt={"empati.org"}
                      width={48}
                      height={48}
                    />
                    <Heading variant="display-strong-xs">
                      {pkg.title}
                    </Heading>
                  </Flex>
                  <Flex
                    fillWidth
                    justifyContent="end"
                  >
                    <Icon size="xs" name="arrowUpRight" />
                  </Flex>
                  <Text
                    variant="display-strong-xs"
                    onBackground="neutral-strong"
                  >
                    {pkg.price}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {pkg.description}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Grid>
          <EmpatiBeforeFooter />
        </Flex>
      </Flex>
    </Flex>
  );
}
