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

export default function Example() {
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
          {/* Content Start */}
          <Heading variant="display-strong-m" align="center">
            Lorem ipsum dolor sit amet
          </Heading>

          {/* Opening */}
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-strong"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            varius, ligula eu venenatis feugiat, nisi eros iaculis tellus, in
            iaculis nulla odio sit amet justo. Etiam ac dolor eget neque
            pellentesque fermentum non ac odio. In eleifend augue lorem, a
            ornare eros dictum sed. Aenean ipsum lacus, lacinia vel dui in,
            commodo accumsan arcu. In in pharetra dolor, ut malesuada neque.
            Maecenas id justo ut lectus interdum lobortis eget quis diam. Cras
            efficitur nisl luctus blandit molestie. Donec imperdiet mi et justo
            pretium venenatis. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Nunc faucibus ultricies massa vel dictum.
          </Text>

          {/* Paragraph */}
          <Heading variant="display-default-s">Quisque urna turpis</Heading>
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-weak"
          >
            Quisque urna turpis, scelerisque scelerisque accumsan in, convallis
            non lorem. Ut odio sem, molestie vel sollicitudin sit amet, laoreet
            in tellus. Mauris eget urna eget dolor faucibus viverra. Cras
            fermentum feugiat hendrerit. Suspendisse nec risus maximus,
            convallis lacus quis, placerat velit. Sed nec fringilla ante.
            Phasellus vitae scelerisque orci, nec hendrerit mi. Suspendisse at
            felis efficitur, rutrum justo ac, suscipit ligula. Suspendisse
            fermentum, sem a pellentesque gravida, ante risus molestie libero,
            convallis molestie magna sem non leo.
          </Text>
          <ul>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                <strong>Maecenas</strong> ante magna, eleifend hendrerit luctus
                quis, tincidunt vel ex. Mauris non ex et magna auctor fermentum
                eu non nisl. Nam consectetur vitae dui eu consectetur. Aenean
                commodo arcu eros, ut fringilla leo pretium ac. Morbi semper
                magna turpis, vitae ullamcorper ligula blandit in. Mauris
                efficitur mollis porta. Curabitur blandit aliquam placerat.
                Nullam lacus dolor, facilisis eu mi in, efficitur ornare mauris.
                Quisque in bibendum velit. Nulla sit amet enim erat. Cras quis
                mi lobortis, lobortis leo vitae, efficitur quam. Sed sodales ac
                nisi pellentesque viverra. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Integer luctus eros vestibulum,
                vehicula urna ut, mollis erat. Fusce consectetur, velit a
                dignissim euismod, sapien lacus semper ipsum, a viverra nisl
                mauris sed neque. Aenean gravida ultrices tincidunt.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Suspendisse accumsan dignissim neque. Cras dapibus ante vel odio
                tempus, id tempor neque suscipit. Nulla id augue auctor tellus
                ultricies gravida. Maecenas volutpat accumsan lacus. Vivamus
                consequat nulla magna, a iaculis ipsum dignissim ut. Nulla et
                molestie odio. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Praesent quam nibh,
                bibendum faucibus velit sed, hendrerit imperdiet diam. Nam enim
                justo, consectetur at nisl sit amet, vestibulum ultricies odio.
                Vestibulum volutpat, sapien sit amet venenatis fringilla, quam
                nulla mattis orci, sed maximus urna nisi nec lacus.
              </Text>
            </li>
          </ul>

          {/* Paragraph */}
          <Heading variant="display-default-s" align="left">
            Aenean tristique mauris elit
          </Heading>
          <Text
            variant="body-default-l"
            align="justify"
            onBackground="neutral-weak"
          >
            Aenean tristique mauris elit, sit amet dapibus neque porttitor at.
            Duis nec iaculis justo. Maecenas fermentum risus sed nulla vehicula,
            sed semper est viverra. Vestibulum tortor ante, rutrum sit amet
            malesuada a, aliquet vel risus. Donec condimentum magna vel mauris
            sodales congue. Integer placerat augue a elit pretium, quis eleifend
            ligula ultrices. Integer eget molestie metus. Praesent finibus
            tristique purus, nec placerat est egestas id. Praesent lobortis
            luctus pretium. Phasellus vitae ultrices neque. Etiam accumsan
            turpis scelerisque rhoncus tincidunt. Nam sollicitudin non orci ut
            malesuada.
          </Text>
          <ul>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Lorem ipsum dolor sit amet.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Quisque urna turpis.
              </Text>
            </li>
            <li>
              <Text
                variant="body-default-l"
                align="justify"
                onBackground="neutral-weak"
              >
                Maecenas ante magna.
              </Text>
            </li>
          </ul>

          {/* CTA */}
          <Flex direction="column" alignItems="center" gap="m">
            <Text
              variant="body-strong-xl"
              align="center"
              onBackground="neutral-strong"
            >
              Sed vel elementum urna?{" "}
              <SmartLink
                href="https://example.com"
                prefixIcon="openLink"
                iconSize="xs"
              >
                Sed vitae
              </SmartLink>{" "}
              sed pellentesque neque ac augue mollis, ut aliquam magna volutpat. 
            </Text>
            <Button id="contact" href="/contact-us" variant="primary">
              <Flex alignItems="center">
                <LetterFx trigger="hover">Sed volutpat convallis nisl</LetterFx>
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
