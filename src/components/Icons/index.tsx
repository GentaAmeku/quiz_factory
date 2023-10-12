import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Xmark = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon {...props} icon={faXmark} />
);
