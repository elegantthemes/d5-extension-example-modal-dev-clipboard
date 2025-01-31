import React, { ReactElement, createElement, useState } from 'react';
import { __ } from '@wordpress/i18n';
// import { ErrorBoundary } from '@divi/error-boundary';
import { WrapperContainer, Header, BodyContainer, PanelContainer, FieldWrapper } from '@divi/modal';
import { v4 as uuid } from 'uuid';
// import './style.scss';
// Externals.
// @todo webpack should be updated for handling the following packages that is exposed
//       via global so these can be used as component using import instead of accessing global.
const {
  isArray,
  isObject,
  forEach,
  isString,
  keys,
  map,
} = window.lodash;

const {
  ErrorBoundary
} = window.divi.errorBoundary;

import './style.scss';

/**
 * Component for rendering clipboard item's payload item.
 *
 * @since 0.1.0
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
    <details>
      <summary className="et-devtool-clipboard-item-payload-item-title">{name}</summary>
      <ul className="et-devtool-clipboard-item-payload-item-value">
        {isArray(values) || isObject(values)
          ? keys(values).map((key) => (
              <li key={key}>
                {key}: {isString(values[key]) ? values[key] : JSON.stringify(values[key])}
              </li>
            ))
          : <li>{values}</li>}
      </ul>
    </details>
  </div>
);

/**
 * Component for rendering clipboard item.
 *
 * @since 0.1.0
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
    <div className={`et-devtool-clipboard-item-type et-devtool-clipboard-item-type--${clipboardType}`}>{clipboardType}</div>
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
 * @since 0.1.0
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
            <div className='helloo' style={{
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