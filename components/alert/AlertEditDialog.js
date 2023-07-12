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

function AlertEditDialog(props) {
  const { onClose, open, selectedValue } = props;

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [alertStandard, setAlertStandard] = useState("");

  useEffect(() => {
    setName(selectedValue.name);
    setId(selectedValue.id);
    setAlertStandard(selectedValue.alertStandard);
  }, [selectedValue]);

  const [threshold, setThreshold] = useState(1);
  const [send, setSend] = useState(1);
  const [alertType, setAlertType] = useState(1);
  const [alertSubject, setAlertSubject] = useState(1);

  const handleThreshold = (event) => {
    setThreshold(event.target.value);
  };
  const handleSend = (event) => {
    setSend(event.target.value);
  };
  const handleAlertTypeChange = (event) => {
    setAlertType(event.target.value);
  };
  const handleAlertSubjectChange = (event) => {
    setAlertSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    onClose();
  };
  const handleClose = () => {
    onClose();
  };
  const getAlertStandardValue = (s) => {
    if (s[0] == ">") {
      return 1;
    }
    if (s[0] == "<") {
      return 2;
    }
    if (s[0] == "=") {
      return 3;
    }
    return "";
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle>预警编辑</DialogTitle>
      <DialogContent>
        <Box sx={{ my: 1, display: "flex", justifyContent: "left" }}>
          <FormLabel sx={{ flexBasis: "100px", alignSelf: "center" }}>
            预警名称
          </FormLabel>
          <FormControlLabel
            control={
              <TextField
                size="small"
                value={name}
                id="alert-name"
                variant="outlined"
              />
            }
          />
        </Box>

        <Box sx={{ my: 1, display: "flex", justifyContent: "left" }}>
          <FormLabel sx={{ flexBasis: "100px", alignSelf: "center" }}>
            预警编号
          </FormLabel>
          <FormControlLabel
            control={
              <TextField
                size="small"
                disabled
                id="alert-id"
                value={id}
                variant="outlined"
              />
            }
          />
        </Box>
        <Box sx={{ my: 1, display: "flex", justifyContent: "left" }}>
          <FormLabel sx={{ flexBasis: "100px", alignSelf: "center" }}>
            预警类型
          </FormLabel>
          <FormControlLabel
            control={
              <Select
                labelId="alert-type"
                size="small"
                id="alert-type"
                value={alertType}
                onChange={handleAlertTypeChange}
              >
                <MenuItem value={1}>提醒单</MenuItem>
                <MenuItem value={2}>搜索单</MenuItem>
              </Select>
            }
          ></FormControlLabel>
        </Box>

        <Box sx={{ my: 1, display: "flex", justifyContent: "left" }}>
          <FormLabel sx={{ flexBasis: "100px", alignSelf: "center" }}>
            预警对象
          </FormLabel>
          <FormControlLabel
            control={
              <Select
                labelId="alert-subject"
                size="small"
                id="alert-subject"
                value={alertSubject}
                onChange={handleAlertSubjectChange}
              >
                <MenuItem value={1}>地点</MenuItem>
                <MenuItem value={2}>关键字</MenuItem>
                <MenuItem value={3}>手机号</MenuItem>
                <MenuItem value={4}>类型</MenuItem>
                <MenuItem value={5}>回复时间</MenuItem>
              </Select>
            }
          ></FormControlLabel>
          <FormControlLabel
            control={
              <TextField
                id="alert-subject-value"
                size="small"
                label="值"
                value={"运河世家"}
                variant="outlined"
              />
            }
          />
        </Box>

        <Box sx={{ my: 1, display: "flex", justifyContent: "left" }}>
          <FormLabel sx={{ flexBasis: "100px", alignSelf: "center" }}>
            计算周期
          </FormLabel>
          <FormControlLabel
            control={
              <OutlinedInput
                id="alert-rule"
                size="small"
                value={60}
                endAdornment={
                  <InputAdornment position="end">天</InputAdornment>
                }
                inputProps={{
                  "aria-label": "alert-rule",
                }}
              />
            }
          ></FormControlLabel>
        </Box>

        <Box sx={{ my: 1, display: "flex", justifyContent: "left" }}>
          <FormLabel sx={{ flexBasis: "100px", alignSelf: "center" }}>
            预警标准
          </FormLabel>
          <FormControlLabel
            control={
              <Select
                size="small"
                labelId="alert-standard"
                id="alert-standard"
                value={getAlertStandardValue(alertStandard)}
                // this is a bug
                onChange={handleThreshold}
              >
                <MenuItem value={1}>大于</MenuItem>
                <MenuItem value={2}>小于</MenuItem>
                <MenuItem value={3}>等于</MenuItem>
              </Select>
            }
          />
          <FormControlLabel
            control={
              <TextField
                size="small"
                id="alert-standard-value"
                label="值"
                variant="outlined"
                value={alertStandard.substring(2)}
              />
            }
          />
        </Box>
        <Box sx={{ my: 1, display: "flex", justifyContent: "left" }}>
          <FormLabel sx={{ flexBasis: "100px", alignSelf: "center" }}>
            发送设置
          </FormLabel>
          <FormControlLabel
            control={
              <Select
                size="small"
                labelId="alert-destination"
                id="alert-destination"
                value={send}
                onChange={handleSend}
              >
                <MenuItem value={1}>邮件</MenuItem>
                <MenuItem value={2}>短信</MenuItem>
              </Select>
            }
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleSubmit}>保存</Button>
      </DialogActions>
    </Dialog>
  );
}
export default AlertEditDialog;
