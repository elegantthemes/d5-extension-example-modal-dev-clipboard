import { registerBuilderBarButton } from '@divi/app-ui';
import {
  dispatch,
  select,
} from '@divi/data';


registerBuilderBarButton({
  iconSvg: { name: 'dev-clipboard' },
  label:   'My Second Button',
  order:   20,
  name:    'divi/dev-clipboard',
  onClick: () => {
    // Check if the 'divi/dev-clipboard' modal is currently active
    if (select('divi/modal-library').getModal('divi/dev-clipboard')?.isActive) {
       // If the modal is active, close it
      dispatch('divi/modal-library').close({
        name: 'divi/dev-clipboard',
      });
    } else {
      // If the modal is not active, open it
      dispatch('divi/modal-library').open({
        name: 'divi/dev-clipboard',
      });
    }
  },
});