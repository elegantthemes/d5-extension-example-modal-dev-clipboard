// Local dependencies.
import { DevClipboard } from './component';

import {
  withSelect,
} from '@divi/data';

export const DevClipboardContainer = withSelect((selectStore) => {
  const clipboardItems = selectStore('divi/clipboard').getItems();
  return {
    clipboardItems,
  };
})(DevClipboard);

