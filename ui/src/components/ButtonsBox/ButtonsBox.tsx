import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { buttonsBoxStyle } from "../../Styles/buttonsBoxStyles";
//Icons
import BackupIcon from "@mui/icons-material/Backup";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ButtonsBox({
  isTableEmpty,
  setOpen,
}: {
  isTableEmpty: boolean;
  setOpen(open: boolean): void;
}): JSX.Element {
  return (
    <Box sx={buttonsBoxStyle}>
      <Link to={{ pathname: "/import", search: window.location.search }}>
        <Button variant="contained" size="large" endIcon={<BackupIcon />}>
          Import Keystores
        </Button>
      </Link>
      <Button
        variant="contained"
        size="large"
        color="error"
        disabled={isTableEmpty}
        sx={{ marginRight: 4 }}
        endIcon={<DeleteForeverIcon />}
        onClick={() => setOpen(true)}
      >
        Delete Keystores
      </Button>
    </Box>
  );
}
