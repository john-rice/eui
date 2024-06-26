import React from 'react';
import {
  EuiCommentList,
  EuiComment,
  EuiCode,
  EuiText,
  EuiAvatar,
} from '../../../../src/components';

export default () => (
  <EuiCommentList aria-label="An example with different timeline icons">
    <EuiComment
      username="andred"
      timelineAvatarAriaLabel="Andre Diaz"
      event="is using a default avatar"
    >
      <EuiText size="s">
        <p>
          The avatar initials is generated from the <EuiCode>username</EuiCode>{' '}
          prop.
        </p>
      </EuiText>
    </EuiComment>

    <EuiComment
      username="system"
      timelineAvatarAriaLabel="System"
      timelineAvatar="dot"
      event={
        <>
          The <EuiCode>timelineAvatar</EuiCode> is using a{' '}
          <EuiCode>dot</EuiCode> icon.
        </>
      }
    />

    <EuiComment
      username="cat"
      timelineAvatarAriaLabel="Beautiful cat"
      event="is using a custom avatar"
      timelineAvatar={
        <EuiAvatar name="Cat" imageUrl="https://picsum.photos/id/40/64" />
      }
    >
      <EuiText size="s">
        <p>
          The <EuiCode>timelineAvatar</EuiCode> is using a custom{' '}
          <strong>EuiAvatar</strong>.
        </p>
      </EuiText>
    </EuiComment>
  </EuiCommentList>
);
