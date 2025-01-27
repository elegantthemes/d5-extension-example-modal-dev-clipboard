import {
  dispatch,
} from '@divi/data';
  window.divi.appUi.registerBuilderBarButton({
    active: false,
    iconSvg: { name: 'divi/move' },
    label: 'My Second Button',
    order: 20,
    name: 'my-second-button',
    onClick: () => {
      dispatch('divi/modal-library').open({
        name: 'example/my-modal',
      });
    },
  });



