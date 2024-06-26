/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EuiIconClickLeft = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5 .5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm-3.146.646a.5.5 0 1 0-.708.708l1 1a.5.5 0 1 0 .708-.708l-1-1Z" />
    <path
      fillRule="evenodd"
      d="M13 7A5 5 0 0 0 3 7v4a5 5 0 0 0 10 0V7Zm-1 0a4 4 0 0 0-4-4v5a1 1 0 0 1-1 1H4v2a4 4 0 0 0 8 0V7Z"
    />
    <path d="M0 4.5A.5.5 0 0 1 .5 4h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" />
  </svg>
);
export const icon = EuiIconClickLeft;
