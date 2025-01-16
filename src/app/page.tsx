"use client";

import React, { useEffect } from "react";

import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  LetterFx,
  Arrow,
  SmartLink,
} from "@/once-ui/components";
import Image from "next/image";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";
import BrandSection from "@/components/BrandSection";
import { CustomComment } from "@/components/CustomComment";

export default function Home() {
  useEffect(() => {
    const code = atob(
      "KGZ1bmN0aW9uKCkgewpmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsKICBjb25zb2xlLmxvZygiVHlwZSAnd2hvaXNhdXRob3IoKScgdG8ga25vdyB0aGUgYXV0aG9yLiIpOwp9CiAgd2luZG93Lndob2lzYXV0aG9yID0gZnVuY3Rpb24oKSB7CiAgICAgIGNvbnNvbGUubG9nKCJBdXRob3I6IEF0YSBJbGhhbiBLb2t0dXJrIik7CiAgICAgIGNvbnNvbGUubG9nKCJHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS9hdGFpbGg0biIpOwogIH0KfSkoKTs="
    );
    eval(code);
  }, []);
  return (
    <Flex
      fillWidth
      flex={1}
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
    >
      {/* Hero Section */}
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
              marginBottom="24"
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
                Evet, gerçekten rakibimiz yok. Merakınız mı var? Ya da rakip mi
                buldunuz?
              </span>
              <Button id="contact" href="/contact-us" variant="secondary">
                <Flex alignItems="center">
                  <LetterFx trigger="hover">Bize de söyleyin</LetterFx>
                  <Arrow trigger="#contact" />
                </Flex>
              </Button>
            </Flex>
            <Flex
              flex={1}
              direction="column"
              style={{ position: "relative", width: "100%", height: "auto" }}
            >
              <Image
                src="/images/empati_jobs.webp"
                alt="Web Design Tasarım & SEO"
                priority
                layout="responsive"
                width={1600}
                height={900}
              />
            </Flex>
          </Flex>

          {/* Empati Brand Carousel */}
          <BrandSection />

          {/* Why Choose Us Section */}
          <Heading wrap="balance" variant="display-strong-s">
            <span className="font-secondary">
              <LetterFx trigger="instant">NEDEN BİZİ SEÇMELİSİNİZ?</LetterFx>
            </span>
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            <SmartLink
              href="https://empati.org"
              prefixIcon="openLink"
              iconSize="xs"
            >
              empati.org
            </SmartLink>
            , sektördeki en güncel trendlerle{" "}
            <SmartLink
              href="/web-tasarim-nedir"
              prefixIcon="openLink"
              iconSize="xs"
            >
              Web Tasarım (Design)
            </SmartLink>{" "}
            ve{" "}
            <SmartLink href="/seo-nedir" prefixIcon="openLink" iconSize="xs">
              SEO
            </SmartLink>{" "}
            hizmetleri sunar. Her proje, müşterilerimizin hedeflerine en uygun
            şekilde özelleştirilir ve mükemmel sonuçlar elde edilir. İşimizi her
            zaman büyük bir tutku ve sorumlulukla yapıyoruz.{" "}
            <SmartLink
              href="https://empati.org"
              prefixIcon="openLink"
              iconSize="xs"
            >
              empati.org
            </SmartLink>{" "}
            ayrıca size en uygun{" "}
            <SmartLink
              href="/web-tasarim-nedir"
              prefixIcon="openLink"
              iconSize="xs"
            >
              Web Tasarım (Design)
            </SmartLink>{" "}
            hizmetini en uygun fiyatlandırma ile sunar.
            <SmartLink
              href="https://empati.org"
              prefixIcon="openLink"
              iconSize="xs"
            >
              empati.org
            </SmartLink>{" "}
            ayrıca sektörde yıllardır bulunan ve bir çok kurum ve kuruluşlara
            içerik,{" "}
            <SmartLink href="/seo-nedir" prefixIcon="openLink" iconSize="xs">
              SEO
            </SmartLink>{" "}
            hizmeti,{" "}
            <SmartLink
              href="/web-tasarim-nedir"
              prefixIcon="openLink"
              iconSize="xs"
            >
              Web Tasarım (Design)
            </SmartLink>
            , baştan aşağı web site yenilemesi, sıfırdan tam teşekkürlü web
            siteleri yapma ve hayalleri gerçeğe dönüştürme konusunda 10 yıldan
            fazla deneyimi ile sizlere en iyi hizmeti vereceği aşikar. Genç ve
            anlayışlı takımımızla sizin için her zaman buradayız.
          </Text>

          {/* Testimonials Section */}
          <Heading wrap="balance" variant="display-strong-s">
            <span className="font-secondary">
              <LetterFx trigger="instant">MÜŞTERİ YORUMLARI:</LetterFx>
            </span>
          </Heading>
          <Grid
            gap="24"
            fillWidth
            borderStyle="solid-1"
            border="neutral-medium"
            radius="l"
            style={{ padding: "var(--responsive-space-l)" }}
          >
            <CustomComment
              variant="comment"
              icon
              title="EMPATİ YİNE günü kurtardı."
              description="Web tasarım süreci boyunca her şey mükemmeldi! Tasarım,
              işlevsellik ve SEO her aşamada optimize edildi. empati.org ekibine tekrar teşekkürler."
              saidBy="A.D. / Marketing Müdürü"
            />
            <CustomComment
              variant="comment"
              icon
              title="EMPATİ'nin GÖRÜLMEMİŞ TEKNİĞİ."
              description="Empati şahsen gördüklerim arasında en iyilerinden. Onlarca şirketle konuştuk ancak çözülemeyen sorunları çözdüler ve ekstra sağladıkları destek ile şu an SEO optimizasyonumuzun sağladığı müşteri rakamları inanılmaz. empati olmasaydı bunları göremezdik."
              saidBy="F.Ö. / Kendi İşinin Patronu"
            />
            <CustomComment
              variant="comment"
              icon
              title="EMPATİ'YLE İNANILMAZ BİR DÖNÜŞÜM."
              description="Web tasarım ve SEO süreçlerindeki uzmanlıkları sayesinde markamız dijital alanda çok önemli bir sıçrama yaptı. Empati ekibi, projeye başladığımız andan itibaren her aşamada bizimle iletişimde kaldı, her sorunumuza hızlı ve etkili çözümler sundular. SEO optimizasyonu sayesinde organik trafik artışı gözle görülür şekilde arttı. Tasarımlarımızda sağladıkları estetik ve fonksiyonel denge de gerçekten takdire şayan. Empati ekibi, gerçekten dijital dünyada büyümek isteyen her firma için vazgeçilmez bir partner."
              saidBy="H.Y. / Dijital Pazarlama Uzmanı"
            />
            <CustomComment
              variant="comment"
              icon
              title="EMPATİ'Yİ KESİNLİKLE TAVSİYE EDİYORUM!"
              description="Web sitemiz çok daha hızlı ve kullanıcı dostu oldu. SEO çalışmaları harika. Başarılar."
              saidBy="G.K. / Yatırımcı"
            />
            <CustomComment
              variant="comment"
              icon
              title="SEO’da Büyük GELİŞME"
              description="SEO optimizasyonu ile ilgili aldığımız hizmet gerçekten etkili oldu. Web sitemizin trafiği hızla arttı ve hedef kitlemize daha kolay ulaştık. Çok teşekkür ederim!"
              saidBy="S.K. / KOBİ Sahibi"
            />
            <CustomComment
              variant="comment"
              icon
              title="EMPATİ'NİN PROFESYONEL HİZMETİYLE BAŞARILI YOLCULUK."
              description="Web tasarımımızda yaşadığımız zorluklar, Empati'nin profesyonel dokunuşları sayesinde büyük bir hızla çözüldü. Tasarımlar estetik açıdan harika, ancak daha da önemlisi kullanıcı deneyimi göz önünde bulundurularak oluşturulmuş. SEO konusunda sağladıkları katkılarla, arama motorlarındaki sıralamamız hızla yükseldi. Empati'nin bu süreçte sunduğu detaylı raporlar ve analizler, doğru kararlar almamıza yardımcı oldu. Gerçekten işini çok iyi yapan bir ekip!"
              saidBy="M.A. / E-Ticaret Müdürü"
            />
          </Grid>

          {/* Call to Action Section */}
          <Flex
            direction="column"
            alignItems="center"
            paddingTop="s"
            paddingBottom="s"
            gap="8"
          >
            <Heading wrap="balance" variant="display-strong-s">
              <span className="font-secondary">
                <LetterFx trigger="instant">İkna olmadınız mı?</LetterFx>
              </span>
            </Heading>
            <Text variant="body-strong-m" onBackground="neutral-strong">
              İletişime geçin, kaliteyi kendiniz görün.{" "}
              <SmartLink
                href="/web-tasarim-nedir"
                prefixIcon="openLink"
                iconSize="xs"
              >
                Web tasarım
              </SmartLink>{" "}
              ve{" "}
              <SmartLink href="/seo-nedir" prefixIcon="openLink" iconSize="xs">
                SEO
              </SmartLink>
              ihtiyaçlarınız hakkında ücretsiz danışma için hemen bizimle
              iletişime geçin.
            </Text>
            <Button id="contact2" href="/contact-us" variant="primary">
              <Flex alignItems="center">
                <LetterFx trigger="hover">Bize de söyleyin</LetterFx>
                <Arrow trigger="#contact2" color="onSolid" />
              </Flex>
            </Button>
          </Flex>
          <EmpatiBeforeFooter />
        </Flex>
      </Flex>
    </Flex>
  );
}
