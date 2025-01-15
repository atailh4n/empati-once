"use client";

import React from "react";
import { Flex, Text, Heading, Button, SmartLink, LetterFx, Arrow } from "@/once-ui/components";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";

export default function AboutUs() {
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
            BİZ KİMİZ?
          </Heading>

          {/* Giriş Paragrafı */}
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-strong"
          >
            empati.org, 2017 yılında web tasarım ve SEO alanında sektöre
            yenilikçi bir soluk getirme amacıyla kuruldu. Yılların getirdiği
            bilgi birikimi ve dinamik ekibimizle, dijital dünyada markaların
            görünürlüğünü artırmaya yönelik çözümler sunuyoruz. Misyonumuz,
            müşterilerimizin hedeflerine ulaşmalarını sağlayarak onlara değer
            katmak.
          </Text>

          {/* Alt Başlık: Vizyon ve Misyon */}
          <Heading variant="display-default-s">
            VİZYONUMUZ ve MİSYONUMUZ
          </Heading>
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-weak"
          >
            Vizyonumuz, dijital dünyada fark yaratan projelere imza atan bir
            lider olmak. Misyonumuz ise yalnızca web sitelerini geliştirmek
            değil, aynı zamanda işlerinize anlam katacak stratejiler üretmek ve
            sizi rakiplerinizden ayıran özgün çözümler sunmak.
          </Text>

          {/* Alt Başlık: Değerlerimiz */}
          <Heading variant="display-default-s" align="left">
            DEĞERLERİMİZ
          </Heading>
          <ul>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                <strong>Yenilikçilik:</strong> Teknolojiyi yakından takip
                ederek, her zaman güncel ve etkili çözümler sunuyoruz.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                <strong>Güven:</strong> Şeffaf iletişim ve müşteri odaklı
                yaklaşım ile iş ortaklarımızla uzun vadeli ilişkiler kurmayı
                hedefliyoruz.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                <strong>Kalite:</strong> Her projede en yüksek standartları
                sağlamak için özenle çalışıyoruz.
              </Text>
            </li>
          </ul>

          {/* Alt Başlık: Hizmetlerimiz */}
          <Heading variant="display-default-s" align="left">
            HİZMETLERİMİZ
          </Heading>
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-weak"
          >
            empati.org olarak, işletmelerin dijital dünyadaki ihtiyaçlarına
            yönelik kapsamlı çözümler sunuyoruz. Başlıca hizmetlerimiz
            şunlardır:
          </Text>
          <ul>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Modern ve kullanıcı dostu web tasarım.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                SEO çalışmaları ile arama motorlarında üst sıralarda yer alma.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Dijital pazarlama stratejileri.
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
              Bizimle iletişime geçmeyi düşünür müsünüz?{" "}
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
