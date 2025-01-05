"use client";

import {
  Flex,
  GlitchFx,
  Grid,
  Heading,
  Text,
  Icon,
} from "@/once-ui/components";

import Link from "next/link";

const EmpatiBeforeFooter: React.FC = () => {
  const links = [
    {
      index: 0,
      href: "https://wa.me/+905432050200",
      title: "Web Tasarım Randevusu",
      description: "Web tasarım için saniyeler içinde ulaşın.",
    },
    {
      index: 1,
      href: "https://wa.me/+905432050200",
      title: "SEO İşlemleri Randevusu",
      description: "Sitenizi en öne çıkarmak için Empati'ye ulaşın.",
    },
    {
      index: 2,
      href: "https://wa.me/+905432050200",
      title: "Diğer Web İşlemleri",
      description: "Sitenize eşi bulunmaz destek için ulaşın.",
    },
  ];

  return (
    <Grid>
      <Heading wrap="balance" variant="display-strong-s">
        <span className="font-secondary">
          <GlitchFx trigger="instant">ARADIĞINI BULAMADIN MI?</GlitchFx>
        </span>
      </Heading>
      <br />
      <Grid
        radius="l"
        border="neutral-medium"
        borderStyle="solid-1"
        columns="repeat(3, 1fr)"
        tabletColumns="1col"
        mobileColumns="1col"
        marginBottom="24"
        fillWidth
      >
        {links.map((link) => (
          <Link
            target="_blank"
            style={{ padding: "var(--responsive-space-l)" }}
            key={link.index}
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
    </Grid>
  );
};

EmpatiBeforeFooter.displayName = "EmpatiSpecialFooter";
export { EmpatiBeforeFooter };