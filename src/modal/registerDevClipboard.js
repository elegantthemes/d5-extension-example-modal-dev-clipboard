import { devClipboard } from '../icons';
import { DevClipboardContainer } from './container';


window.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {
  modals.DevClipboard = {
    name:      'divi/dev-clipboard',
    label:     'Clipboard',
    type:      'multiInstanceModal',
    component: DevClipboardContainer,
  };
  return modals;
});

// Add module icons to the icon library.
window.vendor.wp.hooks.addFilter('divi.iconLibrary.icon.map', 'extensionExample', icons => ({
  ...icons, // This is important. Without this, all other icons will be overwritten.
  [devClipboard.name]: devClipboard,

}));
