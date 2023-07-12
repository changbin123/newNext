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
  Paper,
  Typography,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

import ChartTitle from "../ChartTitle";

function AlertView(props) {
  const { selectedValue } = props;

  const [threshold, setThreshold] = useState(1);
  const [send, setSend] = useState(1);
  const [alertType, setAlertType] = useState(1);
  const [alertSubject, setAlertSubject] = useState(1);

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
    <>
      <Box
        sx={{ mx: 1, mt: 1, display: "flex", justifyContent: "space-between" }}
      >
        <ChartTitle title={"预警配置"} />
      </Box>

      <Paper
        sx={{ mx: 1 }}
        elevation={0}
        // style={{ backgroundColor: "#2A2A2A" }}
      >
        <Box sx={{ mx: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "left" }}>
            <FormLabel sx={{ flexBasis: "100px", alignSelf: "center" }}>
              预警名称
            </FormLabel>
            <FormControlLabel
              control={
                <TextField
                  value={selectedValue.name}
                  id="alert-name"
                  variant="outlined"
                  size="small"
                  disabled
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
                  disabled
                  id="alert-id"
                  size="small"
                  value={selectedValue.id}
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
                  id="alert-type"
                  value={alertType}
                  size="small"
                  disabled
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
                  id="alert-subject"
                  size="small"
                  value={(selectedValue && selectedValue.alertSubject) || 1}
                  disabled
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
                  label="值"
                  size="small"
                  defaultValue={"运河世家"}
                  variant="outlined"
                  disabled
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
                  defaultValue={60}
                  disabled
                  size="small"
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
                  labelId="alert-standard"
                  id="alert-standard"
                  value={getAlertStandardValue(selectedValue.alertStandard)}
                  disabled
                  size="small"
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
                  id="alert-standard-value"
                  label="值"
                  variant="outlined"
                  size="small"
                  disabled
                  value={selectedValue.alertStandard.substr(2)}
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
                  labelId="alert-destination"
                  id="alert-destination"
                  size="small"
                  value={selectedValue.send ? 2 : 1}
                  disabled
                >
                  <MenuItem value={1}>邮件</MenuItem>
                  <MenuItem value={2}>短信</MenuItem>
                </Select>
              }
            />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
export default AlertView;
