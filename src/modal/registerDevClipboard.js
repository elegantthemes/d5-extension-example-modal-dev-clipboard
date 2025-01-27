import { DevClipboardContainer } from "./container";
window.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {
  modals.DevClipboard = {
    name: "divi/dev-clipboard",
    label: "Clipboard",
    type: "multiInstanceModal",
    component: DevClipboardContainer,
  };
  return modals;
});


