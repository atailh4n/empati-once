"use client";

import React from "react";
import { Flex, Text, Heading, Button, SmartLink } from "@/once-ui/components";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";

export default function WhatIsSEO() {
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
        <Heading variant="display-strong-m" align="center">
          SEO NEDİR VE NEDEN ÖNEMLİDİR?
        </Heading>

        {/* Giriş Paragrafı */}
        <Text
          variant="body-default-l"
          align="justify"
          onBackground="neutral-strong"
        >
          SEO (Search Engine Optimization), bir web sitesinin arama motorlarında
          daha yüksek sıralamalara ulaşması için yapılan optimizasyon
          çalışmalarını ifade eder. Doğru SEO stratejileriyle, web sitenizin
          görünürlüğünü artırabilir ve organik trafik çekebilirsiniz. Peki, SEO
          tam olarak nasıl çalışır ve neden bu kadar önemlidir?
        </Text>

        {/* Alt Başlık: SEO'nun Temel Unsurları */}
        <Heading variant="display-default-m" align="left">
          SEO'nun Temel Unsurları
        </Heading>
        <Text
          variant="body-default-l"
          align="justify"
          onBackground="neutral-weak"
        >
          SEO, genel olarak iki ana kategoriye ayrılır: On-Page SEO ve Off-Page
          SEO.
        </Text>
        <ul>
          <li>
            <Text
              variant="body-default-l"
              align="justify"
              onBackground="neutral-weak"
            >
              <strong>On-Page SEO:</strong> Web sitenizin içeriği ve yapısıyla
              ilgilidir. Doğru anahtar kelimeler kullanmak, başlık etiketlerini
              optimize etmek, hızlı yükleme süreleri sağlamak gibi unsurları
              içerir.
            </Text>
          </li>
          <li>
            <Text
              variant="body-default-l"
              align="justify"
              onBackground="neutral-weak"
            >
              <strong>Off-Page SEO:</strong> Web sitenizin dışındaki
              çalışmalarla ilgilidir. Backlink kazanımı, sosyal medya
              paylaşımları ve marka bilinirliği gibi faktörleri içerir.
            </Text>
          </li>
        </ul>

        {/* Alt Başlık: SEO'nun İşletmelere Katkıları */}
        <Heading variant="display-default-m" align="left">
          SEO'nun İşletmelere Katkıları
        </Heading>
        <Text
          variant="body-default-l"
          align="justify"
          onBackground="neutral-weak"
        >
          Doğru bir SEO stratejisi, işletmenizin dijital dünyada daha fazla
          müşteriye ulaşmasını sağlar. İşte SEO'nun işletmenize sağlayabileceği
          faydalardan bazıları:
        </Text>
        <ul>
          <li>
            <Text
              variant="body-default-l"
              align="justify"
              onBackground="neutral-weak"
            >
              Daha fazla organik trafik.
            </Text>
          </li>
          <li>
            <Text
              variant="body-default-l"
              align="justify"
              onBackground="neutral-weak"
            >
              Daha yüksek dönüşüm oranları.
            </Text>
          </li>
          <li>
            <Text
              variant="body-default-l"
              align="justify"
              onBackground="neutral-weak"
            >
              Marka bilinirliğinde artış.
            </Text>
          </li>
        </ul>
      </Flex>

      {/* CTA: SEO Hizmetleri İçin İletişime Geçin */}
      <Flex direction="column" alignItems="center" gap="m">
        <Text
          variant="body-strong-xl"
          align="center"
          onBackground="neutral-strong"
        >
          Web sitenizin potansiyelini artırmak mı istiyorsunuz?{" "}
          <SmartLink
            href="https://empati.org"
            prefixIcon="openLink"
            iconSize="xs"
          >
            empati.org
          </SmartLink>{" "}
          Profesyonel SEO hizmetlerimizle hedeflerinize ulaşmanıza yardımcı
          olabiliriz.
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
