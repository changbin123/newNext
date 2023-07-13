import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../components/MenuAppBar";
import { Stack, Container, Typography, TextField, Tab, Tabs, Select, Button, MenuItem, InputLabel, FormControl, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SortLibraryList from "../../components/sortLibrary/SortLibraryList";
import Navigation from "../../components/Navigation";
import sortLibraryListData from "../../data/stub/sortLibraryListData.json"
import dayjs from 'dayjs';
export default function Home({ data }) {
    const [claimant, setClaimant] = React.useState('');
    const [area, setArea] = React.useState('');
    const [appealChannel, setAppealChannel] = React.useState('');
    const [filterMethod, setFilterMethod] = React.useState('');
    const [creatTime0, setCreatTime0] = React.useState(      dayjs(new Date())
    );
    const [creatTime1, setCreatTime1] = React.useState(      dayjs(new Date())
    );
    const [status, setStatus] = React.useState(
      ''
    );
    const handleChangeClaimant = (event) => {
        setClaimant(event.target.value);
    };
    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };
    const handleChangeAppealChannel = (event) => {
        setAppealChannel(event.target.value);
    };
    const handleChangeFilterMethod = (event)=>{
        setFilterMethod(event.target.value);
    };
    const handleChangeCreatTime0 = (event)=>{
        setCreatTime0(event.target.value);
    };
    const handleChangeCreatTime1 = (event) => {
        setCreatTime1(event.target.value);
    };
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const reset = ()=>{
        setClaimant('')
        setArea('')
        setAppealChannel('')
        setFilterMethod('')
        setCreatTime0( dayjs(new Date()))
        setCreatTime1( dayjs(new Date()))
        setStatus('')
    }
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const docs = [
        { uri: "/dist/test.pdf" },
    ];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuAppBar />
            <Container fixed maxWidth="1440px">
                <Stack direction="row" spacing={2}>
                    <Navigation />
                    <Box maxWidth="1200px"> {/* hacking */}
                        <Grid item xs={12}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="诉求人员库(一人多诉)" />
                                    <Tab label="热点地区库(一地多事)" />
                                    <Tab label="突发事件库(一时多事)" />
                                    <Tab label="高频事件库(一事多人)" />
                                    <Tab label="疑难事件库(作风效能)" />
                                    <Tab label="焦点政策库" />
                                </Tabs>
                            </Box>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            marginTop={5}
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
                                            <Typography variant="body2" sx={{ width: '30%' }}>诉求人</Typography>
                                        }
                                        labelPlacement="start"
                                        control={<TextField
                                          value={claimant}
                                          onChange={handleChangeClaimant}
                                          sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} label="请输入诉求人姓名" size="small" />
                                        }
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <FormControlLabel
                                        sx={{ width: '90%' }}
                                        label={
                                            <Typography variant="body2" sx={{ width: '30%' }}>大致区域</Typography>
                                        }
                                        labelPlacement="start"
                                        control={<TextField
                                          value={area}
                                          onChange={handleChangeArea}

                                          sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} label="请输入区域名称" size="small" />
                                        }
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <FormControlLabel
                                        sx={{ width: '90%' }}
                                        label={
                                            <Typography variant="body2" sx={{ width: '30%' }}>诉求途径</Typography>

                                        }
                                        labelPlacement="start"
                                        control={
                                            <FormControl sx={{ width: '100%' }}>
                                                <Select
                                                    value={appealChannel}
                                                        onChange={handleChangeAppealChannel}

                                                        sx={{
                                                        width: '100%',
                                                        marginBottom: 1,
                                                        '& fieldset': { border: 0 },
                                                        '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                                                        '& div:before': { borderBottom: 'none' }
                                                    }}
                                                    size="small" displayEmpty
                                                >
                                                    <MenuItem value="">
                                                        <em>全部</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>12345</MenuItem>
                                                    <MenuItem value={2}>119</MenuItem>
                                                    <MenuItem value={3}>本地舆情</MenuItem>
                                                    <MenuItem value={4}>网格化</MenuItem>
                                                    <MenuItem value={4}>民生留言板</MenuItem>
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
                                                <Select
                                                    value={filterMethod}
                                                        onChange={handleChangeFilterMethod}

                                                        sx={{
                                                        width: '100%',
                                                        marginTop: 1,
                                                        '& fieldset': { border: 0 },
                                                        '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                                                        '& div:before': { borderBottom: 'none' }
                                                    }}
                                                    size="small" displayEmpty
                                                >
                                                    <MenuItem value="">
                                                        <em>全部</em>
                                                    </MenuItem>
                                                    <MenuItem value={'method1'}>方式1</MenuItem>
                                                    <MenuItem value={'method2'}>方式2</MenuItem>
                                                    <MenuItem value={'method3'}>方式3</MenuItem>
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
                                                              value={creatTime0}
                                                              onChange={handleChangeCreatTime0}

                                                            />
                                                            <DatePicker
                                                              sx={{ '&>div': { padding: '0px' }, '& div>button': { padding: '0px', margin: 0 }, '& input': { padding: '0px', height: '40px', fontSize: '14px' }, '& fieldset': { border: 0 } }}
                                                              label="结束日期"
                                                              value={creatTime1}
                                                              onChange={handleChangeCreatTime1}

                                                            />
                                                        </Stack>

                                                    </LocalizationProvider>
                                                </div>
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
                                                <Select
                                                    value={status}
                                                        onChange={handleChangeStatus}

                                                        sx={{
                                                        width: '100%',
                                                        marginTop: 1,
                                                        '& fieldset': { border: 0 },
                                                        '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                                                        '& div:before': { borderBottom: 'none' }
                                                    }}
                                                    size="small"
                                                    displayEmpty
                                                >
                                                    <MenuItem value="">
                                                        <em>全部</em>
                                                    </MenuItem>
                                                    <MenuItem value={'status1'}>状态1</MenuItem>
                                                    <MenuItem value={'status2'}>状态2</MenuItem>
                                                    <MenuItem value={'status3'}>状态3</MenuItem>
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
                                <Button onClick={reset} sx={{ bgcolor: 'rgba(0,0,0,0.06)', color: 'black' }} size="middle" startIcon={<RefreshIcon />} variant="contained" >重置</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <div style={{ width: '100%', marginTop: '20px', marginBottom: '15px', borderTop: '3px solid rgba(0, 0, 0, 0.06)' }}></div>
                        </Grid>
                        <Grid item xs={12} sx={{ '&>div': { margin: 0 } }}>
                            <SortLibraryList data={sortLibraryListData} />
                        </Grid>


                    </Box>
                </Stack>
            </Container>

        </Box>
    );
}
export function BasicDateRangePicker() {
    const [value0, setValue0] = React.useState([
        dayjs('2022-04-17'),
    ]);
    const [value1, setValue1] = React.useState([
        dayjs('2022-04-17'),
    ]);
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
                        defaultValue={dayjs('2022-04-17')} />
                    <DatePicker
                        sx={{ '&>div': { padding: '0px' }, '& div>button': { padding: '0px', margin: 0 }, '& input': { padding: '0px', height: '40px', fontSize: '14px' }, '& fieldset': { border: 0 } }}
                        label="结束日期"
                        defaultValue={dayjs('2022-05-17')}
                    />
                </Stack>

            </LocalizationProvider>
        </div>

    );
}
