import { registerBuilderBarButton } from '@divi/app-ui';
import {
  dispatch,
  select,
} from '@divi/data';


registerBuilderBarButton({
  iconSvg: { name: 'dev-clipboard' },
  label:   'Dev Clipboard',
  order:   20,
  name:    'divi/dev-clipboard',
  onClick: () => {
    if (select('divi/modal-library').getModal('divi/dev-clipboard')?.isActive) {
      dispatch('divi/modal-library').close({
        name: 'divi/dev-clipboard',
      });
    } else {
      dispatch('divi/modal-library').open({
        name: 'divi/dev-clipboard',
      });
    }
  },
});
