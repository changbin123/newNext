import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../components/MenuAppBar";
import { Stack, Container, Typography, TextField, Tab, Tabs, Select, Button, MenuItem, InputLabel, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import ThematicBigScreenList from "../../components/thematicBigScreen/ThematicBigScreenList";
import Navigation from "../../components/Navigation";
import thematicBigScreenListData from "../../data/stub/thematicBigScreenListData.json"
export default function Home({ data }) {
    const [multiSelectValue, setMultiSelectValue] = React.useState(['11', '22'])
    const selectedDepartment = (e)=>{
        console.log('e',e);
    }
    return (
        <Box sx={{ flexGrow: 1, }}>
            <MenuAppBar />
            <Container fixed maxWidth="1440px">
                <Stack direction="row" spacing={2}>
                    <Navigation />
                    <Box maxWidth="1200px">
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="h5" gutterBottom>
                                    检索配置
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item md={10}>
                                <FormControlLabel
                                    sx={{ width: '100%', marginLeft: 0 }}
                                    label={
                                        <Typography variant="body2" sx={{ width: '10%' }}>输入关键词</Typography>
                                    }
                                    labelPlacement="start"
                                    control={
                                        <Stack sx={{ width: '100%' }} direction="row" alignItems={'center'}>
                                            <div style={{
                                                lineHeight: '40px',
                                                textAlign: 'center',
                                                marginBottom: '8px',
                                                width: '60px',
                                                height: '40px',
                                                backgroundColor: 'rgba(0,0,0,0.04)',
                                                borderRight: '1px solid rgb(214,214,214)',
                                                borderTopLeftRadius: 5
                                            }}
                                            >输入</div>
                                            <FormControl sx={{
                                                textAlign: 'center',
                                                marginBottom: '8px',
                                                width: '100%',
                                                height: '40px',
                                                backgroundColor: 'rgba(0,0,0,0.04)',
                                                '&>div': { height: '40px' }
                                            }} variant="outlined">
                                                <OutlinedInput
                                                    type={'text'}
                                                    sx={{
                                                        width: '100%',
                                                        marginBottom: 1,
                                                        '& fieldset': { border: 0 },
                                                        // '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                                                        // '&>div': { borderRadius: 0 },
                                                        // '& div:before': { borderBottom: 'none' },
                                                    }}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton>
                                                                <HighlightOffIcon />
                                                            </IconButton>

                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                />
                                            </FormControl>
                                        </Stack>

                                    }
                                />
                            </Grid>
                            <Grid item md={1}
                                container
                                display={'flex'}
                                justifyContent="center"
                                alignItems={'flex-start'}
                            >
                                <div style={{
                                    width: '3px',
                                    height: '40px',
                                    paddingLeft: '15px',
                                    borderRight: '3px solid rgba(0, 0, 0, 0.06)'
                                }}>

                                </div>

                            </Grid>
                            <Grid item md={1} alignItems={'end'}>
                                <Button size="middle" startIcon={<SearchIcon />} variant="contained">查询</Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} item xs={12}>
                            <Grid item md={4}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">领域</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={
                                            <FormControl sx={{ width: '100%', }}>
                                                <Select
                                                    sx={{
                                                        width: '100%',
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
                                </FormControl>
                            </Grid>
                            <Grid item md={4}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">分类</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={
                                            <FormControl sx={{ width: '100%', }}>
                                                <Select
                                                    sx={{
                                                        width: '100%',
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
                                </FormControl>
                            </Grid>
                            <Grid item md={4}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">部门</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={
                                            <FormControl sx={{ width: '100%', }}>
                                                <Select
                                                    // multiple
                                                    // value={multiSelectValue}
                                                    sx={{
                                                        width: '100%',
                                                        '& fieldset': { border: 0 },
                                                        '& div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                                                        '& div:before': { borderBottom: 'none' }
                                                    }}
                                                    // onChange={selectedDepartment}
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
                                </FormControl>
                            </Grid>
                            <Grid item md={4}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">编号</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={<TextField
                                            sx={{ width: '100%', marginBottom: 1, '& fieldset': { border: 0 }, '& div': { backgroundColor: 'rgba(0,0,0,0.04)' }, '& div:before': { borderBottom: 'none' } }}
                                            size="small"
                                        />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={4}>
                                <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">名称</FormLabel>
                                    <FormControlLabel
                                        sx={{ width: '100%', marginLeft: 0 }}
                                        labelPlacement="start"
                                        control={
                                            <FormControl sx={{ width: '100%', }}>
                                                <Select
                                                    sx={{
                                                        width: '100%',
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
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="h5" gutterBottom>
                                    大屏列表
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ '&>div': { margin: 0 } }}>
                            <ThematicBigScreenList data={thematicBigScreenListData} />
                        </Grid>
                    </Box>
                </Stack>
            </Container>

        </Box>
    );
}
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import Chip from '@mui/material/Chip';

// const rootStyled = styled('div')(({ theme }) => ({
//     backgroundColor: '#fff',
// }));

export function MultiSelect(props) {
    const { options, value, onChange } = props;
    // const classes = rootStyled();
    console.log({ options, value, onChange });

    const handleDelete = (item) => {
        const newValue = value.filter((v) => v !== item);
        onChange(newValue);
    };

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div>
            {value.map((item) => (
                <Chip key={item} label={item} onDelete={() => handleDelete(item)} />
            ))}
            <Select
                multiple
                value={value}
                onChange={handleChange}
                input={<Input />}

            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}