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
    <Flex direction="column" alignItems="center" fillWidth>
      <Flex
      paddingY="l">
        <Image
          src={"/trademark/logo-dark.png"}
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
        marginBottom="24"
        fillWidth
        maxWidth="xl" // Grid genişliğini sınırlıyoruz
      >
        {packages.map((pkg) => (
          <Link
            key={pkg.index}
            href={pkg.href}
            style={{ padding: "var(--responsive-space-l)" }}
          >
            <Flex
              fillWidth
              paddingY="8"
              gap="8"
              direction="column"
              alignItems="center"
              radius="l"
              border="neutral-medium"
              borderStyle="solid-1"
            >
              <Flex fillWidth justifyContent="center">
                <Image
                  src={"/trademark/logo-dark.png"}
                  alt={"empati.org"}
                  width={48}
                  height={48}
                />
                <Heading paddingLeft="12" variant="display-strong-s">
                  {pkg.title}
                </Heading>
              </Flex>
              <Flex fillWidth justifyContent="end" paddingY="8" paddingX="24">
                <Icon size="s" name="arrowUpRight" />
              </Flex>
              <Text variant="display-strong-xs" onBackground="neutral-strong">
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
  );
}
