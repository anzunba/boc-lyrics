import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Cat } from '..';
import { Stack } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Stack mx="auto" textAlign="center" py={2} fontFamily='Gloria Hallelujah'>
            <Box pb={1}>
              <Cat size={32} />
            </Box>
            <Typography variant="h4" component="div">
              BUMP OF CHICKEN
            </Typography>
            <Typography variant="h6" component="div">
              Lyrics
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
