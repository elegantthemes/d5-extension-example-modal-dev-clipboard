// External Dependencies
import $ from 'jquery';

// Internal Dependencies
import modules from './modules';
import fields from './fields';

$(window).on('et_builder_api_ready', (event, API) => {
  API.registerModules(modules);
  API.registerModalFields(fields);
});

// Open divi/dev-clipboard, a registered modal, when clipboard menu item on admin bar is clicked.
// This ensure that the following function is registered on app window.
if (window.top !== window) {

  // Listen to click event on top window's admin bar item. The condition above ensures that the
  // following is only executed in app window.
  window.top.jQuery('#wp-admin-bar-d5i-modal-dev-clipboard a').on('click', (event) => {
    event.preventDefault();

    // Open registered modal, divi/dev-clipboard.
    window.wp.data.dispatch('divi/modals').open({ name: 'divi/dev-clipboard' });
  });
}
