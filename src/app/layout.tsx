import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import { headers } from "next/headers";
import { Metadata } from "next";

// For Google Analaytics and Google Tag Manager (Optional)
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import {
  baseURL,
  style,
  meta,
  og,
  schema,
  social,
} from "@/once-ui/resources/config";

import { Background, Flex, RevealFx } from "@/once-ui/components";

import { Roboto_Mono, Big_Shoulders_Display } from "next/font/google";
import Horizon_Outlined from "next/font/local";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const primary = Big_Shoulders_Display({
  variable: "--font-primary",
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const code = Roboto_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary = Horizon_Outlined({
  variable: "--font-secondary",
  src: [
    {
      path: "../../public/fonts/horizon.otf",
      weight: "200",
    },
  ],
});
const tertiary: FontConfig | undefined = undefined;
/*
 */

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  const metadataBase = host ? new URL(`https://${host}`) : undefined;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://" + baseURL,
      type: og.type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
    },
    metadataBase,
  };
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": schema.type,
  url: "https://" + baseURL,
  logo: schema.logo,
  name: schema.name,
  description: schema.description,
  email: schema.email,
  sameAs: Object.values(social).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="tr"
      direction="column"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-border={style.border}
      data-theme={style.theme}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        primary.variable,
        code.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : ""
      )}
    >
      <head>
        {/* Google Tag Manager Here */}
        {process.env.GTAG ? (
          <GoogleTagManager gtmId={process.env.GTAG} />
        ) : null}
        {/* Analytics Here */}
        {process.env.GANALYTICS ? (
          <GoogleAnalytics gaId={process.env.GANALYTICS} />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <Flex as="body" direction="column" flex={1} margin="0" padding="0">
        <Background
          style={{ zIndex: "-1" }}
          position="fixed"
          mask="cursor"
          dots={{
            display: true,
            opacity: 0.3,
            size: "24",
          }}
          gradient={{
            display: true,
            opacity: 0.7,
          }}
        />
        <Flex direction="column" flex={1}>
          <RevealFx>
            <SiteHeader />
            {children}
            <SiteFooter />
          </RevealFx>
        </Flex>
      </Flex>
    </Flex>
  );
}
