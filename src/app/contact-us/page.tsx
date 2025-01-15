"use client";

import React from "react";
import { Flex, Text, Button } from "@/once-ui/components";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";
import Image from "next/image";

export default function ContactUs() {
  const whatsappNumber = "+905432050200"; // WhatsApp numarasını buraya yazın.
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

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
        justifyContent="center"
      >
        <Flex
          as="main"
          flex={1}
          direction="column"
          alignItems="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          <Flex
            flex={1}
            direction="column"
            width={8}
            height={8}
          >
            <Image
              src={"/trademark/logo-dark.webp"}
              alt={"empati.org"}
              layout="responsive"
              width={32}
              height={32}
            />
          </Flex>
          <Text variant="display-strong-xs" align="center">
            İLETİŞİM İÇİN TEK MESAJ
          </Text>
          <Text
            variant="body-default-l"
            align="center"
            onBackground="neutral-weak"
          >
            Size daha hızlı ve kolay bir şekilde destek olabilmek için
            mesajınızı WhatsApp üzerinden gönderebilirsiniz.
          </Text>
          <Button
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="l"
            prefixIcon="whatsapp"
          >
            WhatsApp'tan İletişime Geç
          </Button>
          <EmpatiBeforeFooter />
        </Flex>
      </Flex>
    </Flex>
  );
}
