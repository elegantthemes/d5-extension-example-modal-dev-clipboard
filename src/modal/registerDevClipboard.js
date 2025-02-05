import { devClipboard } from '../icons';
import { DevClipboardContainer } from './container';
import { addFilter } from '@wordpress/hooks';

addFilter('divi.modalLibrary.modalMapping', 'd5-dev-clipboard', modals => {
  modals.DevClipboard = {
    name:      'divi/dev-clipboard',
    label:     'Clipboard',
    type:      'multiInstanceModal',
    component: DevClipboardContainer,
  };
  return modals;
});

// Add module icons to the icon library.
addFilter('divi.iconLibrary.icon.map', 'd5-dev-clipboard', icons => ({
  ...icons, // This is important. Without this, all other icons will be overwritten.
  [devClipboard.name]: devClipboard,

}));
