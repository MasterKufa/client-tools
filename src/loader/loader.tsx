import { Backdrop, CircularProgress } from "@mui/material";
import { theme } from "../theme";

export const Loader = ({
  open,
  noTransition,
}: {
  open?: boolean;
  noTransition?: boolean;
}) => (
  <Backdrop
    sx={{
      display: "flex",
      zIndex: 2,
      backgroundColor: theme.palette.grey[200],
      transition: noTransition ? "none !important" : undefined,
    }}
    open={!!open}
  >
    <CircularProgress sx={{ color: theme.palette.primary.main }} />
  </Backdrop>
);
