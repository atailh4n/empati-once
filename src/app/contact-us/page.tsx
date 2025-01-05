'use client'

import React from "react"
import { Flex, Text, Icon, Button } from "@/once-ui/components"
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter"

export default function ContactUs() {
  const whatsappNumber = "+905432050200" // WhatsApp numarasını buraya yazın.
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`

  return (
    <Flex
      fillWidth
      fillHeight
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="l"
      gap="l"
    >
      <Icon size="xl" name="whatsapp" />
      <Text variant="display-strong-s" align="center">
        BİZİMLE İLETİŞİME GEÇMEK İÇİN WhatsApp'ı KULLANABİLİRSİNİZ!
      </Text>
      <Text variant="body-default-l" align="center" onBackground="neutral-weak">
        Size daha hızlı ve kolay bir şekilde destek olabilmek için mesajınızı WhatsApp üzerinden gönderebilirsiniz.
      </Text>
      <Button
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="l"
      >
        WhatsApp'tan İletişime Geç
      </Button>
      <EmpatiBeforeFooter />
    </Flex>
  )
}
