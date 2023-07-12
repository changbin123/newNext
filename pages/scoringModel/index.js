import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../components/MenuAppBar";
import { Stack, Container, Typography, TextField, Select, Button, MenuItem, InputLabel, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import InputAdornment from '@mui/material/InputAdornment';
import ScoringModelList from "../../components/scoringModel/ScoringModelList";
import Navigation from "../../components/Navigation";
import scoringModelListData from "../../data/stub/scoringModelListData.json"
import dayjs from 'dayjs';
export default function Home({ data }) {
    const [lowSatisfaction, setLowSatisfaction] = React.useState('');
    const [timeoutSetting, setTimeoutSetting] = React.useState('');
    const [state, setState] = React.useState('');
    const handleChangeLowSatisfaction = (event) => {
        let newValue = event.target.value;
        if (newValue >= 0 && newValue <= 100) {
            setLowSatisfaction(newValue);
        }
    };
    const handleChangeTimeoutSetting = (event) => {
        let newValue = event.target.value;
        if (newValue >= 0 && newValue <= 100) {
            setTimeoutSetting(newValue);
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuAppBar />

            <Container fixed maxWidth="1440px">
                <Stack direction="row" spacing={2}>
                    <Navigation />
                    <Box maxWidth="1200px">
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="h5" gutterBottom>
                                    阈值设置
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            container
                            direction="row"
                            justifyContent="space-between"
                            spacing={2}
                        >

                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">低满意度的设定</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        label={
                                            <Typography variant="body2" sx={{ width: '20%' }}>低于</Typography>
                                        }
                                        labelPlacement="start"
                                        control={<TextField
                                            type="number"
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }}
                                            size="small"
                                            value={lowSatisfaction}
                                            onChange={handleChangeLowSatisfaction}
                                            placeholder='0%'
                                            inputProps={{
                                                min: 0,
                                                max: 100,
                                                pattern: '\\d*',
                                            }}
                                        />
                                        }
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">超时的设定</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        label={
                                            <Typography variant="body2" sx={{ width: '20%' }}>超过</Typography>
                                        }
                                        labelPlacement="start"
                                        control={<TextField
                                            type="number"
                                            placeholder='几个工作日'
                                            value={timeoutSetting}
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }}
                                            size="small"
                                            onChange={handleChangeTimeoutSetting}
                                            inputProps={{
                                                min: 0,
                                            }}
                                        />
                                        }
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">推诿的设定</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        label={
                                            <Typography variant="body2" sx={{ width: '100%' }}>部门反复流转各超过</Typography>
                                        }
                                        labelPlacement="start"
                                        control={<TextField
                                            type="number"
                                            placeholder='几次'
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }}
                                            size="small"
                                            inputProps={{
                                                min: 0,
                                            }}
                                        />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">重复事件的设定</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0, fontSize: '12px' }}
                                        labelPlacement="start"
                                        control={
                                            <Stack direction="row" spacing={1} sx={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>
                                                <TextField sx={{ width: '55%', '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} placeholder="诉求人" size="small" />
                                                <TextField sx={{ width: '65%', '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} placeholder="诉求事件" size="small" />
                                                <div style={{ width: '48px' }}>重复</div>
                                                <TextField
                                                    inputProps={{
                                                        min: 0,
                                                    }}
                                                    sx={{ width: '40%', '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} placeholder="次数" size="small" />

                                            </Stack>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">低满意所占扣分比重(扣分上限)</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={<TextField
                                            type="number"
                                            placeholder='30'
                                            inputProps={{
                                                min: 0,
                                            }}
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} size="small" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">低满意度单次扣分</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={<TextField
                                            type="number"
                                            placeholder='-2'
                                            inputProps={{
                                                max: 0,
                                            }}
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} size="small" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">超时单次扣分</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={<TextField
                                            type="number"
                                            placeholder='-3'
                                            inputProps={{
                                                max: 0,
                                            }}
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} size="small" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">推诿单次扣分</FormLabel>

                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={<TextField
                                            type="number"
                                            placeholder='-5'
                                            inputProps={{
                                                max: 0,
                                            }}
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} size="small" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">重复事件单次扣分</FormLabel>

                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={<TextField
                                            type="number"
                                            placeholder='-4'
                                            inputProps={{
                                                max: 0,
                                            }}
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }} size="small" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ 
                                paddingTop:'10px',
                                paddingBottom:'10px',
                                width:'100%',
                                boxShadow: '0px -6px 6px -3px rgba(0,0,0,0.2)',
                                display:'flex',
                                justifyContent:'flex-end',
                                borderBottom:'2px solid rgba(0, 0, 0, 0.06)'
                                }}
                                >
                                <Button sx={{ bgcolor: 'rgba(0,0,0,0.06)', color: 'black', marginRight: '10px' }} size="middle" variant="contained" >重置</Button>
                                <Button size="middle" variant="contained">查询</Button>
                            </div>

                        </Grid>
                        <Grid item xs={12} sx={{ '&>div': { margin: 0 } }}>
                            <ScoringModelList data={scoringModelListData} />
                        </Grid>


                    </Box>
                </Stack>
            </Container>

        </Box>
    );
}
