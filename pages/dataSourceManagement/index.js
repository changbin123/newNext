import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../components/MenuAppBar";
import { Stack, Container, Typography, TextField, Tab, Tabs, Select, Button, MenuItem, InputLabel, FormControl, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import DataSourceManagementList from "../../components/dataSourceManagement/DataSourceManagementList";
import Navigation from "../../components/Navigation";
import dataSourceManagementListData from "../../data/stub/dataSourceManagementListData.json"
export default function Home({ data }) {
    return (
        <Box sx={{ flexGrow: 1, }}>
            <MenuAppBar />
            <Container fixed maxWidth="1440px">
                <Stack direction="row" spacing={2}>
                    <Navigation />
                    <Box maxWidth="1200px">
                        <Grid item xs={12} sx={{ '&>div': { margin: 0 }, marginTop: '10px' }}>
                            <DataSourceManagementList data={dataSourceManagementListData} />
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
