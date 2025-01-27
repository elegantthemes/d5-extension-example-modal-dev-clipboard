import React, { ReactElement } from 'react';
import { __ } from '@wordpress/i18n';
// import { ErrorBoundary } from '@divi/error-boundary';
import { WrapperContainer, Header, BodyContainer, PanelContainer, FieldWrapper } from '@divi/modal';
// import './style.scss';

/**
 * Modal component for testing.
 *
 * @returns {ReactElement}
 */
export const DevClipboard = () => {
  console.log('Rendering DevClipboard');
  return (
    <WrapperContainer
      dimension={null}
      offset={null}
      snappable
      expandable
      draggable
      resizable
      centered={false}
      modalName="divi/dev-clipboard"
      bodySiblingHeight={null}
    >
      <Header name={__('Clipboard', 'et_builder')} />
      <BodyContainer>
        <PanelContainer id="dev-clipboard" opened>
          <p>Hello from my modal</p>
          <FieldWrapper
            label={__('Field 1', 'et_builder')}
            id="field-1"
          >
            {/* Empty content for testing */}
          </FieldWrapper>
          <FieldWrapper
            label={__('Field 2', 'et_builder')}
            id="field-2"
          >
            {/* Empty content for testing */}
          </FieldWrapper>
          <FieldWrapper
            label={__('Field 3', 'et_builder')}
            id="field-3"
          >
            {/* Empty content for testing */}
          </FieldWrapper>
        </PanelContainer>
      </BodyContainer>
    </WrapperContainer>
  );
};