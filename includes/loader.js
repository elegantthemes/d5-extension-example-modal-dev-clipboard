// Internal Dependencies
import {
  DevClipboardContainer,
  name,
  type
} from './modal';

// Open divi/dev-clipboard, a registered modal, when clipboard menu item on admin bar is clicked.
// This ensure that the following function is registered on app window.
// @todo this top / window detection should be abstracted into util function.
if (window.top !== window) {

  // Listen to click event on top window's admin bar item. The condition above ensures that the
  // following is only executed in app window.
  window.top.jQuery('#wp-admin-bar-d5i-modal-dev-clipboard a').on('click', (event) => {
    event.preventDefault();

    // Open registered modal, divi/dev-clipboard.
    window.wp.data.dispatch('divi/modals').open({ name: 'divi/dev-clipboard' });
  });

  // On script load, register `divi/clipboard` modal to modals registry.
  window.divi.data.dispatch('divi/modals').addModal({
    name,
    type,
    component: DevClipboardContainer,
  });
}
