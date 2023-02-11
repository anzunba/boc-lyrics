import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import songs from '../../songs.json';
import albums from '../../albums.json';

export default function Nav() {
  const [open, setOpen] = React.useState<string | undefined>();

  const handleClick = (album?: string) => {
    open === album ? setOpen(undefined) : setOpen(album);
  };
  return (
    <Box pt={1} width={260} bgcolor="rgba(144, 202, 249, .1)" position="fixed">
      <nav aria-label="main mailbox folders">
        <List>
          {albums.map((album, i) => (
            <>
              <ListItemButton onClick={() => handleClick(album.name)} disabled={!album.published}>
                <ListItemText primary={album.name} />
                {open === album.name ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {songs.map(
                (song, i) =>
                  song.albums.some((s) => s === album.name) && (
                    <Box key={i}>
                      <Collapse
                        in={open === album.name}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }} disabled={!song.published}>
                            <ListItemText primary={song.name.en} />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </Box>
                  )
              )}
            </>
          ))}
        </List>
      </nav>
    </Box>
  );
}
