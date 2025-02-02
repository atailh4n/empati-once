"use client";

import React, { forwardRef, ReactNode } from "react";
import { IconButton, Button, Icon, Flex, Text } from "@/once-ui/components";

interface FeedbackProps {
  variant?: "comment" | "danger" | "warning" | "success";
  icon?: boolean;
  title?: string;
  description?: string;
  saidBy?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  actionButtonProps?: React.ComponentProps<typeof Button>;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const variantIconMap: {
  [key in "comment" | "danger" | "warning" | "success"]: string;
} = {
  comment: "person",
  danger: "errorCircle",
  warning: "warningTriangle",
  success: "checkCircle",
};

const CustomComment = forwardRef<HTMLDivElement, FeedbackProps>(
  (
    {
      variant = "info",
      icon,
      title,
      description,
      saidBy,
      showCloseButton = false,
      onClose,
      actionButtonProps,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Flex
        fillWidth
        radius="l"
        ref={ref}
        borderStyle="solid-1"
        border={`info-medium`}
        background={`info-medium`}
        role="alert"
        aria-live="assertive"
        className={className}
        style={style}
        {...props}
      >
        {icon && (
          <Flex paddingY="16" paddingLeft="16" alignItems="flex-start">
            <Flex
              padding="4"
              radius="m"
              border={`info-medium`}
              borderStyle="solid-1"
            >
              <Icon
                onBackground={`info-medium`}
                name={"comment"}
                aria-hidden="true"
              />
            </Flex>
          </Flex>
        )}
        <Flex
          fillWidth
          padding="16"
          gap="24"
          justifyContent="center"
          direction="column"
        >
          {(title || description) && (
            <Flex direction="column" fillWidth gap="4">
              {title && (
                <Flex fillWidth gap="16">
                  <Flex fillWidth paddingY="4">
                    <Text
                      variant="heading-strong-xl"
                      onBackground={`info-medium`}
                      role="heading"
                      aria-level={2}
                    >
                      {title}
                    </Text>
                  </Flex>
                  {showCloseButton && (
                    <IconButton
                      onClick={onClose}
                      icon="close"
                      size="m"
                      tooltip="Hide"
                      tooltipPosition="top"
                      variant="ghost"
                      aria-label="Close alert"
                    />
                  )}
                </Flex>
              )}
              {description && (
                <Flex fillWidth>
                  <Text
                    variant="body-default-l"
                    onBackground={`info-strong`}
                  >
                    {description}
                  </Text>
                </Flex>
              )}
              {saidBy && (
                <Flex fillWidth>
                  <Text
                    variant="body-default-xs"
                    onBackground={`info-strong`}
                  >
                    - {saidBy}
                  </Text>
                </Flex>
              )}
            </Flex>
          )}
          {children}
          {actionButtonProps && (
            <Flex paddingBottom="4" gap="8">
              <Button {...actionButtonProps} />
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  }
);

CustomComment.displayName = "Custom Comment";
export { CustomComment };
