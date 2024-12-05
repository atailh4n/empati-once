"use client";

import React, { useRef, useState } from "react";
import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  LetterFx,
  Arrow,
  SmartImage,
} from "@/once-ui/components";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Headless CMS",
    href: "#",
    image: "/images/empati_jobs.png",
  },
  {
    id: 2,
    title: "Headless eCommerce",
    href: "#",
    image: "/images/empati_jobs.png",
  },
  {
    id: 3,
    title: "Enterprise App Builder",
    href: "#",
    image: "/images/empati_jobs.png",
  },
  {
    id: 4,
    title: "Digital Asset Management",
    href: "#",
    image: "/images/empati_jobs.png",
  },
];

export default function Home() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  const handleMouseEnter = (id: number, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredId(id);
    setDirection(rect.y + rect.height / 2 > window.innerHeight / 2 ? 'down' : 'up');
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
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
          <Flex padding="l">
            <Text
              variant="heading-strong-xl"
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
              src={items.find((item) => item.id === hoveredId)?.image || ""}
              alt={items.find((item) => item.id === hoveredId)?.title || ""}
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
}

