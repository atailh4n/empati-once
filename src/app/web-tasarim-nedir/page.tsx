"use client";

import React from "react";
import {
  Flex,
  Text,
  Heading,
  Button,
  SmartLink,
  LetterFx,
  Arrow,
} from "@/once-ui/components";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";

export default function WhatIsWebDesign() {
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
          justifyContent="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          {/* Başlık */}
          <Heading variant="display-strong-m" align="center">
            WEB TASARIM (DESIGN) NEDİR VE NEDEN ÖNEMLİDİR?
          </Heading>

          {/* Giriş Paragrafı */}
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-strong"
          >
            Web tasarım, bir web sitesinin görsel düzenini, kullanım kolaylığını
            ve kullanıcı deneyimini şekillendirme sürecidir. Doğru bir web
            tasarımı, ziyaretçilerinizin dikkatini çekebilir, markanızı
            güçlendirebilir ve dönüşüm oranlarınızı artırabilir. Peki, web
            tasarım neden bu kadar kritik bir öneme sahiptir?
          </Text>

          {/* Alt Başlık: Vizyon ve Misyon */}
          <Heading variant="display-default-s">
            Web Tasarımın Temel Unsurları
          </Heading>
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-weak"
          >
            Başarılı bir web tasarım için dikkat edilmesi gereken birkaç temel
            unsur vardır:
          </Text>
          <ul>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                <strong>Estetik Tasarım:</strong> Görseller, renk paletleri ve
                tipografi gibi unsurlar, web sitenizin genel estetik kalitesini
                belirler.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                <strong>Kullanıcı Deneyimi (UX):</strong> Kullanıcıların web
                sitenizde kolayca gezinmesi ve ihtiyaç duydukları bilgilere
                hızlıca ulaşması sağlanmalıdır.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                <strong>Duyarlı (Responsive) Tasarım:</strong> Web sitenizin tüm
                cihazlarda sorunsuz çalışması için mobil uyumluluk şarttır.
              </Text>
            </li>
          </ul>

          {/* Alt Başlık: Değerlerimiz */}
          <Heading variant="display-default-s" align="left">
            Web Tasarımın İşletmelere Katkıları
          </Heading>
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-weak"
          >
            Profesyonel bir web tasarım, işletmenizin dijital dünyada başarı
            kazanmasında büyük bir rol oynar. İşte katkılarından bazıları:
          </Text>
          <ul>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Markanızı güçlendirir.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Daha fazla müşteri etkileşimi sağlar.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Arama motorlarında daha iyi bir sıralama elde edersiniz.
              </Text>
            </li>
          </ul>

          {/* CTA: SEO Hizmetleri İçin İletişime Geçin */}
          <Flex direction="column" alignItems="center" gap="m">
            <Text
              variant="body-strong-xl"
              align="center"
              onBackground="neutral-strong"
            >
              İşletmeniz için etkileyici bir web tasarımı mı istiyorsunuz?{" "}
              <SmartLink
                href="https://empati.org"
                prefixIcon="openLink"
                iconSize="xs"
              >
                empati.org
              </SmartLink>{" "}
              profesyonel web hizmetlerimizle hedeflerinize ulaşmanıza yardımcı
              olabiliriz.
            </Text>
            <Button id="contact" href="/contact-us" variant="primary">
              <Flex alignItems="center">
                <LetterFx trigger="hover">Daha fazla bilgi alın</LetterFx>
                <Arrow trigger="#contact" color="onSolid" />
              </Flex>
            </Button>
          </Flex>
          {/* Footer */}
          <EmpatiBeforeFooter />
        </Flex>
      </Flex>
    </Flex>
  );
}
