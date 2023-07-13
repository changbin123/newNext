import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../components/MenuAppBar";
import { Stack, Container, Typography, TextField, Select, Button, MenuItem, InputLabel, FormControl, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PushList from "../../components/push/PushList";
import Navigation from "../../components/Navigation";
import pushData from "../../data/stub/push.json"
import dayjs from 'dayjs';
export default function Home({ data }) {
  const [alertName, setAlertName] = React.useState('');
  const [alertId, setAlertId] = React.useState('');
  const [alertTag, setAlertTag] = React.useState('');
  const [receiptName, setReceiptName] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [receiptID, setReceiptID] = React.useState(
 ''
  );


  const handleChangeAlertName = (event) => {
    setAlertName(event.target.value);
  };
  const handleChangeAlertId = (event) => {
    setAlertId(event.target.value);
  };
  const handleChangeAlertTag = (event) => {
    setAlertTag(event.target.value);
  };
  const handleChangeReceiptName = (event)=>{
    setReceiptName(event.target.value);
  };
  const handleChangeReceiptID = (event)=>{
    setReceiptID(event.target.value);
  };
  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const reset = ()=>{
    setAlertName('')
    setAlertId('')
    setAlertTag('')
    setReceiptName('')
    setDepartment('')
    setReceiptID('')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Container sx={{ flexGrow: 1 }} fixed maxWidth="1440px">
        <Stack direction="row" spacing={2}>
          <Navigation />
          <Box maxWidth="1200px"> {/* hacking */}
            <Grid item xs={12} marginTop={1}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  预推送事件
                </Typography>
              </Box>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
            >
              <Grid
                item
                md={10}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="end"
                spacing={1}
              >
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '40%' }}>预警名称</Typography>
                    }
                    labelPlacement="start"
                    control={<TextField
                      sx={{
                        width: '100%',
                        marginBottom: 1,
                        '& fieldset': { border: 0 },
                        '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                        '& div:before': { borderBottom: 'none' }
                      }}
                      value={alertName}
                      onChange={handleChangeAlertName}
                      placeholder={'请输入预警名称'}
                      size="small" />
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '40%' }}>预警条目</Typography>
                    }
                    labelPlacement="start"
                    control={<TextField
                      sx={{
                        width: '100%',
                        marginBottom: 1,
                        '& fieldset': { border: 0 },
                        '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                        '& div:before': { borderBottom: 'none' }
                      }}
                      value={alertTag}
                      onChange={handleChangeAlertTag}
                      placeholder={'请输入预警条目'}
                      size="small" />
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '40%' }}>预警编号</Typography>
                    }
                    labelPlacement="start"
                    control={
                      <TextField
                        sx={{
                          width: '100%',
                          marginBottom: 1,
                          '& fieldset': { border: 0 },
                          '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                          '& div:before': { borderBottom: 'none' }
                        }}
                        value={alertId}
                        onChange={handleChangeAlertId}
                        placeholder={'请输入预警编号'}
                        size="small" />
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '40%' }}>提示单名称</Typography>
                    }
                    labelPlacement="start"
                    control={
                      <TextField
                        sx={{
                          width: '100%',
                          '& fieldset': { border: 0 },
                          '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                          '& div:before': { borderBottom: 'none' }
                        }}
                        value={receiptName}
                        onChange={handleChangeReceiptName}
                        placeholder={'请输入提示单名称'}
                        size="small" />
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '40%' }}>提示单编号</Typography>
                    }
                    labelPlacement="start"
                    control={
                      <TextField
                        sx={{
                          width: '100%',
                          '& fieldset': { border: 0 },
                          '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                          '& div:before': { borderBottom: 'none' }
                        }}
                        value={receiptID}
                        onChange={handleChangeReceiptID}
                        placeholder={'请输入提示单编号'}
                        size="small" />
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '40%' }}>发送部门</Typography>
                    }
                    size="small"
                    labelPlacement="start"
                    control={
                      <FormControl sx={{ width: '100%', }}>
                        <Select
                          value={department}
                          sx={{
                            width: '100%',
                            '& fieldset': { border: 0 },
                            '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                            '& div:before': { borderBottom: 'none' }
                          }}
                          size="small" onChange={handleChangeDepartment}
                        >
                          <MenuItem value={'department1'}>交通局</MenuItem>
                          <MenuItem value={'department2'}>住建局</MenuItem>
                          <MenuItem value={'department3'}>消防大队</MenuItem>
                          <MenuItem value={'department4'}>市监局</MenuItem>
                        </Select>
                      </FormControl>
                    }
                  />
                </Grid>

              </Grid>
              <Grid item md={1}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div style={{ width: '3px', height: '100%', paddingLeft: '20px', margin: 'auto', borderRight: '3px solid rgba(0, 0, 0, 0.06)' }}></div>
              </Grid>
              <Grid item md={1}
                container
                direction="column"
                justifyContent="space-between"
                alignItems='flex-end'
              >
                <Button sx={{ height:'40px'}} size="middle" startIcon={<SearchIcon />} variant="contained">查询</Button>
                <Button sx={{ bgcolor: 'rgba(0,0,0,0.06)', color: 'black', height:'40px'}} size="middle" startIcon={<RefreshIcon />} variant="contained" onClick={reset}>重置</Button>
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <div style={{ width: '100%', marginTop: '20px', marginBottom: '15px', borderTop: '3px solid rgba(0, 0, 0, 0.06)' }}></div>
            </Grid>
            <Grid item xs={12} sx={{ '&>div': { margin: 0 } }}>
              <PushList data={pushData} />
            </Grid>


          </Box>
        </Stack>
      </Container>

    </Box>
  );
}
