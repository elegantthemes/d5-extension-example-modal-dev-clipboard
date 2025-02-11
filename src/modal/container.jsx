// Local dependencies.
import {
  withSelect,
} from '@divi/data';

import { DevClipboard } from './component';

/**
 * Container component for the DevClipboard.
 * 
 * This component connects the DevClipboard component to the Divi clipboard store
 * using the withSelect higher-order component.
 * 
 * @param {Function} withSelect - Higher-order component to connect to the Divi data store.
 * @param {Function} selectStore - Function to select the Divi clipboard store.
 * @returns {Object} - An object containing the clipboard items.
 */
export const DevClipboardContainer = withSelect(selectStore => {
  const clipboardItems = selectStore('divi/clipboard').getItems();
  return {
    clipboardItems,
  };
})(DevClipboard);
