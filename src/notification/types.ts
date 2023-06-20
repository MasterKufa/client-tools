import { AlertColor } from '@mui/material';

export type PayloadType = {
  message: string;
  type: AlertColor;
};

export type NotificationType = PayloadType & {
  id: string;
};
