// Local dependencies.
import { DevClipboard } from './component';

// Externals.
// @todo webpack should be updated for handling the following packages that is exposed
//       via global so these can be used as component using import instead of accessing global.
const {
  withSelect,
  useSelect,
} = window.divi.data;

export const DevClipboardContainer = withSelect((selectStore) => {
  const clipboardItems = selectStore('divi/clipboard').getItems();
  return {
    clipboardItems,
  };
})(DevClipboard);

