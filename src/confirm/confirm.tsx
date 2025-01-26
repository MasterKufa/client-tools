import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { $currentConfirm, close } from "./confirm.model";
import { useUnit } from "effector-react";
import { Content } from "./styles";

export const Component = () => {
  const confirm = useUnit($currentConfirm);
  const actions = useUnit({ close });

  if (!confirm) return null;

  return (
    <Dialog open onClose={actions.close}>
      <DialogTitle>{confirm.title}</DialogTitle>
      <DialogContent sx={Content}>
        <DialogContentText>{confirm.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => {
            confirm.onSubmit();
            actions.close();
          }}
        >
          Confirm
        </Button>
        <Button variant="outlined" onClick={actions.close}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
