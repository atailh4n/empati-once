"use client";

import React, { useRef, useState } from "react";

import {
  Heading,
  Text,
  Flex,
  Button,
  LetterFx,
  Arrow,
  SmartImage,
} from "@/once-ui/components";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";
import BrandSection from "@/components/BrandSection";

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastY = useRef<number | null>(null);

  const items = [
    {
      id: 1,
      title: "besniuzumu.org",
      href: "https://besniuzumu.org",
      image: "https://www.ahmetefe.net/assets/img/popular4.jpg",
    },
    {
      id: 2,
      title: "yamanekspres.com",
      href: "https://yamanekspres.com",
      image: "https://www.ahmetefe.net/assets/img/popular6.jpg",
    },
    {
      id: 3,
      title: "ensarbilisim.com",
      href: "https://ensarbilisim.com",
      image: "https://www.ahmetefe.net/assets/img/popular2.jpg",
    },
    {
      id: 4,
      title: "besnimaviumut.com",
      href: "https://besnimaviumut.com",
      image: "https://www.ahmetefe.net/assets/img/popular3.jpg",
    },
    {
      id: 5,
      title: "alobaskan.com",
      href: "https://alobaskan.com",
      image: "https://www.ahmetefe.net/assets/img/popular5.jpg",
    },
    {
      id: 6,
      title: "zuhrebesni.com",
      href: "https://zuhrebesni.com",
      image: "https://www.ahmetefe.net/assets/img/popular7.jpg",
    },
    {
      id: 7,
      title: "cagrigiyimbesni.com",
      href: "https://cagrigiyimbesni.com",
      image: "https://www.ahmetefe.net/assets/img/popular8.jpg",
    },
    {
      id: 8,
      title: "herbalifeadiyaman.com",
      href: "https://herbalifeadiyaman.com",
      image: "https://www.ahmetefe.net/assets/img/popular9.jpg",
    },
    {
      id: 9,
      title: "fitlife.com",
      href: "https://fitlifebesni.vercel.app/",
      image: "https://www.ahmetefe.net/assets/img/popular10.jpg",
    },
  ];

  const handleMouseEnter = (id: number, e: React.MouseEvent) => {
    if (lastY.current !== null) {
      setDirection(e.clientY < lastY.current ? "up" : "down");
    }
    lastY.current = e.clientY;
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    lastY.current = null;
  };

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
              marginBottom="20"
              direction="column"
            >
              <Heading wrap="balance" variant="display-strong-s">
                <span className="font-secondary">
                  <LetterFx trigger="instant">PORTFOLYOMUZ</LetterFx>
                </span>
              </Heading>
              <span className="font-code font-size-xl">
                Empati.org, Web Tasarım ve SEO alanında deneyimli ekibiyle
                2017'den beridir sektörde kartları dağıtan şirket. Sadece bir
                şirket değiliz, biz bir fark yaratıyoruz! Evet, gerçekten. Bu da
                yaptığımız işler:
              </span>
              <Button id="contact" href="/contact-us" variant="secondary">
                <Flex alignItems="center">
                  <LetterFx trigger="hover">Bize ulaşın.</LetterFx>
                  <Arrow trigger="#contact" />
                </Flex>
              </Button>
            </Flex>
          </Flex>
          {/* Branding and hizmet section.*/}
          <BrandSection />
          <Heading wrap="balance" variant="display-strong-s">
            <span className="font-secondary">
              EMPATI.ORG TARAFINDAN YAPILAN SİTELER:
            </span>
          </Heading>
          <Flex
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            flex={1}
            direction="column"
            fillWidth
            position="relative"
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={(e) => handleMouseEnter(item.id, e)}
                onMouseLeave={handleMouseLeave}
              >
                <Flex padding="s">
                  <Text
                    variant="body-default-xl"
                    className={`transition-colors duration-300 ${
                      hoveredId === null || hoveredId === item.id
                        ? "text-neutral-strong"
                        : "text-neutral-weak"
                    }`}
                  >
                    {item.title}
                  </Text>
                </Flex>
              </Link>
            ))}
            <AnimatePresence initial={false}>
              {hoveredId !== null && (
                <motion.div
                  key={hoveredId}
                  initial={{ opacity: 0, y: direction === "up" ? 50 : -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: direction === "up" ? -50 : 50 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: "50%",
                  }}
                >
                  <SmartImage
                    src={
                      items.find((item) => item.id === hoveredId)?.image ?? ""
                    }
                    alt={
                      items.find((item) => item.id === hoveredId)?.title ?? ""
                    }
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Flex>
          <EmpatiBeforeFooter />
        </Flex>
      </Flex>
    </Flex>
  );
}
