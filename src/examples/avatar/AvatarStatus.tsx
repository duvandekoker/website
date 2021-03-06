/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as UserIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} status="away">
        <UserIcon role="img" aria-label="user" />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} status="available">
        <UserIcon role="img" aria-label="user" />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} badge={8}>
        <UserIcon role="img" aria-label="user" />
      </Avatar>
    </Col>
  </Row>
);

export default Example;
