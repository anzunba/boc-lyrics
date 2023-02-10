import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import data from '../../data.json';
const Detail = () => {
  return (
    <Box bgcolor="rgba(144, 202, 249, .2)" width="100%" ml="260px">
      <Grid container spacing={0} p={3}>
        <Grid item xs={2} p={3}>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/z-DvnM298yw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={5} p={3} color="secondary.contrastText">
          <Typography variant="h4" pb={3}>
            {data[0].ja.title}
          </Typography>
          {data[0].ja.lyrics.map((phrase, i) => (
            <Box key={i} pb={3}>
              {phrase.map((line, j) => (
                <Typography key={`${i}_${j}`}>{line}</Typography>
              ))}
            </Box>
          ))}
        </Grid>
        <Grid item xs={5} p={3}>
        <Typography variant="h4" pb={3}>
            {data[0].en.title}
          </Typography>
          {data[0].en.lyrics.map((phrase, i) => (
            <Typography key={i} pb={3}>
              {phrase}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
