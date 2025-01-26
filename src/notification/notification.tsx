import { Snackbar, Alert } from "@mui/material";
import { useUnit } from "effector-react";
import { $currentNotification, deleteNotification } from "./notification.model";

export const Component = () => {
  const currentNotification = useUnit($currentNotification);
  const actions = useUnit({ deleteNotification });

  if (!currentNotification) return null;

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(currentNotification)}
      autoHideDuration={6000}
      onClose={() => actions.deleteNotification(currentNotification.id)}
      onClick={() => actions.deleteNotification(currentNotification.id)}
    >
      <Alert severity={currentNotification.type}>
        {currentNotification.message}
      </Alert>
    </Snackbar>
  );
};
