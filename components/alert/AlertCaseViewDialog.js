import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {
  InputLabel,
  Typography,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

function AlertCaseViewDialog(props) {
  const { onClose, open, selectedValue } = props;

  const handleSubmit = (event) => {
    onClose();
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle>xxxxxxxx</DialogTitle>
      <DialogContent>
        <Box sx={{ my: 1, display: "flex", justifyContent: "left" }}>
          <Typography>jksjfksjf</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleSubmit}>保存</Button>
      </DialogActions>
    </Dialog>
  );
}
export default AlertCaseViewDialog;
