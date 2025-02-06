import { addFilter } from '@wordpress/hooks';

import { devClipboard } from '../icons';
import { DevClipboardContainer } from './container';


addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {
  modals.DevClipboard = {
    name:      'divi/dev-clipboard',
    label:     'Dev Clipboard',
    type:      'multiInstanceModal',
    component: DevClipboardContainer,
  };
  return modals;
});

// Add module icons to the icon library.
addFilter('divi.iconLibrary.icon.map', 'extensionExample', icons => ({
  ...icons, // This is important. Without this, all other icons will be overwritten.
  [devClipboard.name]: devClipboard,

}));
