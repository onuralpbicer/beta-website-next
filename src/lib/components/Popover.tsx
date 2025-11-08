'use client';

import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-popover';
import React from 'react';

export function Popover(options: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Root>
      <Trigger className="button">{options.trigger}</Trigger>
      <Portal>
        <Content className="popover">
          {options.children}
          <Arrow className="arrow" />
        </Content>
      </Portal>
    </Root>
  );
}
