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
  const [classification, setClassification] = React.useState('');
  const [filter, setFilter] = React.useState('');
  const [state, setState] = React.useState('');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Container sx={{ flexGrow: 1 }} fixed maxWidth="1440px">
        <Stack direction="row" spacing={2}>
          <Navigation />
          <Box maxWidth="1200px"> {/* hacking */}
            <Grid item xs={12}>
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
                      <Typography variant="body2" sx={{ width: '30%' }}>预警名称</Typography>
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
                      label="请输入预警名称"
                      size="small" />
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '30%' }}>预警条目</Typography>
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
                      label="请输入预警条目"
                      size="small" />
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '30%' }}>具体分类</Typography>

                    }
                    labelPlacement="start"
                    control={
                      <FormControl sx={{ width: '100%' }}>
                        <InputLabel sx={{ top: -5 }}>全部</InputLabel>
                        <Select label="全部"
                          value={classification}
                          sx={{
                            width: '100%',
                            marginBottom: 1,
                            '& fieldset': { border: 0 },
                            '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                            '& div:before': { borderBottom: 'none' }
                          }}
                          size="small"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '30%' }}>筛选方式</Typography>
                    }
                    labelPlacement="start"
                    control={
                      <FormControl sx={{ width: '100%' }}>
                        <InputLabel>全部</InputLabel>
                        <Select label="全部"
                          value={filter}

                          sx={{
                            width: '100%',
                            marginTop: 1,
                            '& fieldset': { border: 0 },
                            '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                            '& div:before': { borderBottom: 'none' }
                          }}
                          size="small"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%' }}
                    label={
                      <Typography variant="body2" sx={{ width: '30%' }}>创建时间</Typography>
                    }
                    labelPlacement="start"
                    control={
                      <FormControl sx={{ width: '100%' }}>
                        <BasicDateRangePicker></BasicDateRangePicker>

                      </FormControl>
                    }
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControlLabel
                    sx={{ width: '90%', justifyContent: 'space-between' }}
                    label={
                      <Typography variant="body2" sx={{ width: '30%' }}>状态</Typography>
                    }
                    size="small"
                    labelPlacement="start"
                    control={
                      <FormControl sx={{ width: '100%', }}>
                        <InputLabel >全部</InputLabel>
                        <Select label="全部"
                          value={state}

                          sx={{
                            width: '100%',
                            marginTop: 1,
                            '& fieldset': { border: 0 },
                            '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                            '& div:before': { borderBottom: 'none' }
                          }}
                          size="small"

                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
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
                <Button size="middle" startIcon={<SearchIcon />} variant="contained">查询</Button>
                <Button sx={{ bgcolor: 'rgba(0,0,0,0.06)', color: 'black' }} size="middle" startIcon={<RefreshIcon />} variant="contained" >重置</Button>
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
export function BasicDateRangePicker() {
  const [value0, setValue0] = React.useState(
    dayjs('2022-04-17'),
  );
  const [value1, setValue1] = React.useState(
    dayjs('2022-04-17'),
  );
  return (
    <div style={{
      width: '100%',
      borderRadius: '4px',
      backgroundColor: 'rgba(0,0,0,0.04)',
      borderBottom: 'none',
    }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack direction="row" spacing={1} alignItems={"center"}>
          <DatePicker
            sx={{ '&>div': { padding: '0px' }, '&>div>button': { padding: '0px', margin: 0 }, '& input': { padding: '0px', height: '40px', fontSize: '14px' }, '& fieldset': { border: 0 } }}
            label="开始日期"
            value={value0}
            onchange={(newvalue) => setValue0(dayjs(newvalue))}
            
            />
          <DatePicker
            sx={{ '&>div': { padding: '0px' }, '& div>button': { padding: '0px', margin: 0 }, '& input': { padding: '0px', height: '40px', fontSize: '14px' }, '& fieldset': { border: 0 } }}
            label="结束日期"
            value={value1}

            onchange={(newvalue) => setValue1(dayjs(newvalue))}
          />
        </Stack>

      </LocalizationProvider>
    </div>

  );
}