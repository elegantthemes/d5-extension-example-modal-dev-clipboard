import { MyModal } from '.';
window.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {
  modals.myModal = {
    name: "example/my-modal",
    label: "My Modal",
    type: "multiInstanceModal",
    component: MyModal,
  };
  return modals;
});


