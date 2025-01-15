"use client";

import React, { useEffect } from "react";
import { Flex } from "@/once-ui/components";
import { EmpatiBeforeFooter } from "@/components/EmpatiBeforeFooter";

export default function Example() {
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

          {/* Before Footer (Optional) */}
          <EmpatiBeforeFooter />
        </Flex>
      </Flex>
    </Flex>
  );
}
