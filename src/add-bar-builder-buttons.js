import {
  dispatch,
  select,
  useSelect
} from '@divi/data';
import { getActiveStatus } from './modal/container';

window.divi.appUi.registerBuilderBarButton({
    active: getActiveStatus,
    iconSvg: { name: 'divi/dev-clipboard' },
    label: 'My Second Button',
    order: 20,
    name: 'my-second-button',
    onClick: () => {
      if(select('divi/modal-library').getModal('divi/dev-clipboard')?.isActive){
        dispatch('divi/modal-library').close({
          name: 'divi/dev-clipboard',
        });
      }else{

        dispatch('divi/modal-library').open({
          name: 'divi/dev-clipboard',
        });
      }

    },
  });



