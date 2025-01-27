import { DevClipboardContainer } from "./container";
console.log('DevClipboardContainer', DevClipboardContainer);
window.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {
  modals.DevClipboard = {
    name: "divi/dev-clipboard",
    label: "Clipboard",
    type: "multiInstanceModal",
    component: DevClipboardContainer,
  };
  return modals;
});


