// Local dependencies.
import {
  withSelect,
} from '@divi/data';

import { DevClipboard } from './component';


export const DevClipboardContainer = withSelect(selectStore => {
  const clipboardItems = selectStore('divi/clipboard').getItems();
  return {
    clipboardItems,
  };
})(DevClipboard);
