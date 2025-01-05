"use client";

import React from "react";
import Image from "next/image";
import { Grid, Heading, LetterFx } from "@/once-ui/components";

const BrandSection = () => {
  const brands = [
    {
      src: "https://www.ahmetefe.net/assets/img/logo1.png",
      alt: "btk.gov.tr",
      about: "Bilgi Teknolojileri ve İletişim Kurumu",
    },
    {
      src: "https://www.ahmetefe.net/assets/img/logo2.png",
      alt: "turkiye.org",
      about: "E-Devlet Kapısı",
    },
    {
      src: "https://www.ahmetefe.net/assets/img/logo3.png",
      alt: "trt.net.tr",
      about: "TRT Haber",
    },
    {
      src: "https://www.ahmetefe.net/assets/img/logo4.png",
      alt: "adiyaman.bel.tr",
      about: "Adıyaman Belediyesi",
    },
    {
      src: "https://www.ahmetefe.net/assets/img/logo5.png",
      alt: "samsat.bel.tr",
      about: "Samsat Belediyesi",
    },
    {
      src: "https://www.ahmetefe.net/assets/img/logo6.png",
      alt: "besni.bel.tr",
      about: "Besni Belediyesi",
    },
    {
      src: "https://www.ahmetefe.net/assets/img/logo7.png",
      alt: "gapolay.com",
      about: "Gaplay Gazetesi",
    },
    {
      src: "https://www.ahmetefe.net/assets/img/logo8.png",
      alt: "yamanekspres.com",
      about: "YamanEkspres",
    },
  ];

  return (
    <Grid>
      <Heading wrap="balance" variant="display-strong-s">
        <span className="font-secondary">
          <LetterFx trigger="instant">HİZMET VERDİKLERİMİZ:</LetterFx>
        </span>
      </Heading>
      <Grid className="w-full overflow-hidden bg-background py-8">
        <div className="marquee-container flex">
          <div className="animate-marquee-rtl flex">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 white-logo">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  about={brand.about}
                  aria-description={brand.about}
                  width={435 / 2.7}
                  height={75}
                />
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default BrandSection;
