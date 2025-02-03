import { ReactElement } from 'react';
import { __ } from '@wordpress/i18n';
import { WrapperContainer, Header, BodyContainer, PanelContainer } from '@divi/modal';
import { ErrorBoundary } from '@divi/error-boundary';
import './style.scss';

/**
 * Dev clipboard modal component which visualize the clipboard's state.
 *
 * @since 0.1.0
 *
 * @param {Props} props Component props.
 *
 * @returns {ReactElement}
 */
export const DevClipboard = (props) => {
  const {
    name,
    clipboardItems,
  } = props;

  console.log('clipboardItems', clipboardItems.length);

  return (
    <ErrorBoundary
      key="et-vb-divi-modals--dev-clipboard"
      componentName="et-vb-divi-modals--dev-clipboard"
    >
      <WrapperContainer
        draggable
        resizable
        expandable
        snappable
        modalName={name}
      >
        <Header
          name={__('Clipboard', 'et_builder')}
        />
        <BodyContainer>
          <PanelContainer id="clipboard" opened>
            <div className="clipboard-content">
              <p className="clipboard-info">
                Clipboard contains <span className='clipboard-count'>{clipboardItems.length}</span> items.
              </p>
              <p className="clipboard-message">
                To display them, check <a target='_blank' href="https://github.com/elegantthemes/d5-extension-example-modal-dev-clipboard">the full repo</a>.
              </p>
            </div>
          </PanelContainer>
        </BodyContainer>
      </WrapperContainer>
    </ErrorBoundary>
  );
};