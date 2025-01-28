// Local dependencies.
import { DevClipboard } from './component';

// Externals.
// @todo webpack should be updated for handling the following packages that is exposed
//       via global so these can be used as component using import instead of accessing global.
const {
  withSelect,
  useSelect,
} = window.divi.data;

 export const getActiveStatus = () => {
  console.log('getActiveStatus');
  const active = useSelect((select) => select('divi/modal-library').getModal('divi/dev-clipboard')?.isActive);
  console.log('Active status:', active);
  return active;
};

export const DevClipboardContainer = withSelect((selectStore) => {
  const clipboardItems = selectStore('divi/clipboard').getItems();
  return {
    clipboardItems,
  };
})(DevClipboard);

