import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../components/MenuAppBar";
import { Stack, Container, Typography, TextField, Tab, Tabs, Select, Button, MenuItem, InputLabel, FormControl, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

import EfficacyAnalysisList from "../../components/efficacyAnalysis/EfficacyAnalysisList";
import Navigation from "../../components/Navigation";
import efficacyAnalysisListData from "../../data/stub/efficacyAnalysisListData.json"
export default function Home({ data }) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ flexGrow: 1, }}>
            <MenuAppBar />
            <Container fixed maxWidth="1440px">
                <Stack direction="row" spacing={2}>
                    <Navigation />
                    <Box maxWidth="1200px">
                        <Grid item xs={12}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="镇街全况" />
                                    <Tab label="委办局全况" />
                                </Tabs>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ '&>div': { margin: 0 } }}>
                            <EfficacyAnalysisList data={efficacyAnalysisListData} />
                        </Grid>
                    </Box>
                </Stack>
            </Container>

        </Box>
    );
}
