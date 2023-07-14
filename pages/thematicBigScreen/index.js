import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../components/MenuAppBar";
import { Stack, Container, Typography, TextField, Chip, Tabs, Select, Button, MenuItem, InputLabel, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import ClearIcon from '@mui/icons-material/Clear';
import ThematicBigScreenList from "../../components/thematicBigScreen/ThematicBigScreenList";
import Navigation from "../../components/Navigation";
import thematicBigScreenListData from "../../data/stub/thematicBigScreenListData.json"
export default function Home({ data }) {
    const [multiSelectValue, setMultiSelectValue] = React.useState([])
    const selectRef = React.useRef(null);
    const selectedDepartment = (event) => {
        const {
            target: { value },
        } = event;
        setMultiSelectValue(
            typeof value === 'string' ? value.split(',') : value,
        );
    }
    const deleteDepart = (event, value) => {
        event.stopPropagation()
        const _val = multiSelectValue.filter(item => item !== value)
        setMultiSelectValue(_val)
    }
    const handleInputFocus = () => {
        selectRef.current.blur(); // set focus back to parent container
    };
    const [keywords, setKeywords] = React.useState('')
    const handleChangeKeywords = (event) => {
        setKeywords(event.target.value);
    }
    const [field, setField] = React.useState('')
    const handleChangeField = (event) => {
        setField(event.target.value);
    }
    const [classic, setClassic] = React.useState('')
    const handleChangeClassic = (event) => {
        setClassic(event.target.value);
    }
    const [number, setNumber] = React.useState('')
    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    }
    const [topic, setTopic] = React.useState('')
    const handleChangeTopic = (event) => {
        setTopic(event.target.value);
    }
    return (
        <Box sx={{ flexGrow: 1, }}>
            <MenuAppBar />
            <Container sx={{ flexGrow: 1 }} fixed maxWidth="1440px">
                <Stack direction="row" spacing={2}>
                    <Navigation />
                    <Box maxWidth="1200px">
                        <Grid item xs={12} marginTop={1}>
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
                                                    value={keywords}
                                                    onChange={handleChangeKeywords}
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
                                                            <IconButton onClick={() => setKeywords('')}>
                                                                <HighlightOffIcon />
                                                            </IconButton>

                                                        </InputAdornment>
                                                    }
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
                                                    value={field}
                                                    onChange={handleChangeField}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={'field1'}>领域1</MenuItem>
                                                    <MenuItem value={'field2'}>领域2</MenuItem>
                                                    <MenuItem value={'field3'}>领域3</MenuItem>
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
                                                    value={classic}
                                                    onChange={handleChangeClassic}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={'classic1'}>分类1</MenuItem>
                                                    <MenuItem value={'classic2'}>分类2</MenuItem>
                                                    <MenuItem value={'classic3'}>分类3</MenuItem>
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
                                                    multiple
                                                    ref={selectRef}
                                                    value={multiSelectValue}
                                                    sx={{
                                                        width: '100%',
                                                        '& fieldset': { border: 0 },
                                                        '&>div': { backgroundColor: 'rgba(0,0,0,0.04)' },
                                                        '& div:before': { borderBottom: 'none' }
                                                    }}
                                                    onChange={selectedDepartment}
                                                    size="small"
                                                    onFocus={handleInputFocus}
                                                    renderValue={(selected) => (
                                                        <Box sx={{
                                                            '& div': { height: '100%', backgroundColor: '#fff', borderRadius: 0, },
                                                            display: 'flex', gap: 0.5, '& button': {
                                                                padding: 0
                                                            }
                                                        }}
                                                        >
                                                            {selected.map((value, index) => (
                                                                <Box key={index} display="flex" alignItems="center">
                                                                    <Chip label={value} onMouseDown={(event) => {
                                                                        event.stopPropagation(); // prevent event from propagating to parent
                                                                    }} />
                                                                    <IconButton size={'small'} onMouseDown={(event) => deleteDepart(event, value)}>
                                                                        <ClearIcon />
                                                                    </IconButton>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    )}
                                                >
                                                    <MenuItem value={'城管局'}>城管局</MenuItem>
                                                    <MenuItem value={'消防大队'}>消防大队</MenuItem>
                                                    <MenuItem value={'检察院'}>检察院</MenuItem>
                                                    <MenuItem value={'人社局'}>人社局</MenuItem>
                                                    <MenuItem value={'政府办'}>政府办</MenuItem>
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
                                            value={number}
                                            onChange={handleChangeNumber}
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
                                                    value={topic}
                                                    onChange={handleChangeTopic}
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
                                                    <MenuItem value={10}>违章建筑专题</MenuItem>
                                                    <MenuItem value={20}>违章停车专题</MenuItem>
                                                    <MenuItem value={30}>消防专题</MenuItem>
                                                    <MenuItem value={30}>公益诉讼专题</MenuItem>
                                                    <MenuItem value={30}>文明城市专题</MenuItem>
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
