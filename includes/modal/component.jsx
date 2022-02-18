// External dependencies.
import React, {
  createElement,
} from 'react';

// Local dependencies.
import './style.scss';

// Externals.
// @todo webpack should be updated for handling the following packages that is exposed
//       via global so these can be used as component using import instead of accessing global.
const {
  isArray,
  isObject,
  keys,
  map,
} = window.lodash;
const {
  __
} = window.wp.i18n;
const {
  WrapperContainer,
  Header,
  BodyContainer,
  PanelContainer,
} = window.divi.modal;
const {
  ErrorBoundary
} = window.divi.errorBoundary;
const {
  ObjectRenderer
} = window.divi.objectRenderer;

/**
 * Component for rendering clipboard item's payload item.
 *
 * @since ??
 *
 * @param {PayloadItemProps} param0 Component props.
 *
 * @returns {ReactElement}
 */
const PayloadItem = ({
  name,
  values,
}) => (
  <div className="et-devtool-clipboard-item-payload-item">
    <span className="et-devtool-clipboard-item-payload-item-title">{name}</span>
    <span className="et-devtool-clipboard-item-payload-item-value">
      {
        isArray(values) || isObject(values)
          ? createElement(
            ObjectRenderer, { values })
          : values
      }
    </span>
  </div>
);

/**
 * Component for rendering clipboard item.
 *
 * @since ??
 *
 * @param {ClipboardItemProps} param0 Component props.
 *
 * @returns {ReactElement}
 */
const ClipboardItem = ({
  clipboardType,
  origin,
  payload,
  itemIndex,
}) => (
  <div
    className="et-devtool-clipboard-item"
  >
    <div cl sName={`et-devtool-clipboard-item-type et-devtool-clipboard-item-type--${clipboardType}`}>{clipboardType}</div>
    <div className="et-devtool-clipboard-item-index">{`#${itemIndex}`}</div>
    <div className="et-devtool-clipboard-item-origin">{origin}</div>
    <div className="et-devtool-clipboard-item-payload">
      {keys(payload).map((payloadItemName) => (
        <PayloadItem
          name={payloadItemName}
          values={payload[payloadItemName]}
          key={`et-devtool-clipboard-item-payload--${payloadItemName}`}
        />
      ))}
    </div>
  </div>
);

/**
 * Component for rendering clipboard items.
 *
 * @since ??
 *
 * @param {ClipboardItemsProps} param0 Component props.
 *
 * @returns {ReactElement}
 */
const ClipboardItems = ({ items }) => (
  <div className="et-devtool-clipboard-items">
    {map(items, (item, itemIndex) => (
      createElement(
        ClipboardItem, {
        clipboardType: item.clipboardType,
        origin: item.origin,
        payload: item.payload,
        key: `et-devtool-clipboard-item--${itemIndex}`,
        itemIndex,
      },
      )
    ))}
  </div>
);

/**
 * Dev clipboard modal component which visualize the clipboard's state.
 *
 * @since ??
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
            <div style={{
              padding: '20px 20px 40px 20px',
              height: 400,
            }}
            >
              <ClipboardItems items={clipboardItems} />
            </div>
          </PanelContainer>
        </BodyContainer>
      </WrapperContainer>
    </ErrorBoundary>
  );
};
