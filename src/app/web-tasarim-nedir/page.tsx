"use client";

import React from "react";
import { Flex, Text, Heading, Button, SmartLink } from "@/once-ui/components";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";

export default function WhatIsWebDesign() {
  return (
    <Flex
      fillWidth
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      padding="l"
      gap="l"
    >
      <Flex
        fillWidth
        direction="column"
        alignItems="start"
        justifyContent="flex-start"
        padding="l"
        gap="l"
      >
        {/* Başlık */}
        <Heading variant="display-strong-m">
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
          güçlendirebilir ve dönüşüm oranlarınızı artırabilir. Peki, web tasarım
          neden bu kadar kritik bir öneme sahiptir?
        </Text>

        {/* Alt Başlık: Web Tasarımın Temel Unsurları */}
        <Heading variant="display-default-m" align="left">
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

        {/* Alt Başlık: Web Tasarımın İşletmelere Katkıları */}
        <Heading variant="display-default-m" align="left">
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
      </Flex>

      {/* CTA: Web Tasarım Hizmetleri İçin İletişime Geçin */}
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
          Profesyonel{" "}
          <SmartLink
            href="/web-tasarim-nedir"
            prefixIcon="openLink"
            iconSize="xs"
          >
            web tasarım
          </SmartLink>{" "}
          hizmetlerimizle size özel çözümler sunuyoruz.
        </Text>
        <Button href="/contact-us" variant="primary" size="l">
          Daha Fazla Bilgi Alın
        </Button>
      </Flex>

      {/* Footer */}
      <EmpatiBeforeFooter />
    </Flex>
  );
}
