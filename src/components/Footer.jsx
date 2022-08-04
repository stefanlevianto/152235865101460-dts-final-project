import {
  Box,
  ListItemText,
  ListItem,
  List,
  IconButton,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1976d2",
        width: "100%",
        marginTop: "7rem",
        marginBottom: "1rem",
        color: "white",
        borderTop: "white solid 1px",
      }}
    >
      <Box
        sx={{
          marginX: "auto",
          display: "flex",
          justifyContent: "space-between",
          paddingY: "1rem",
          maxWidth: "70%",
        }}
      >
        <Box
          sx={{
            maxWidth: 360,
            marginRight: { xl: "7rem", lg: "5rem", md: "1.5rem" },
          }}
        >
          <List>
            {["Barries", "Constest", "Encounters", "Evolution"].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={<IconButton aria-label="comment"></IconButton>}
                sx={{ padding: "0" }}
              >
                <ListItemButton sx={{ padding: "0" }}>
                  <ListItemText
                    primary={<Typography variant="body2">{value}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            maxWidth: 360,
            marginRight: { xl: "7rem", lg: "5rem", md: "1.5rem" },
          }}
        >
          <List>
            {["Games", "Items", "Locations"].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={<IconButton aria-label="comment"></IconButton>}
                sx={{ padding: "0" }}
              >
                <ListItemButton sx={{ padding: "0" }}>
                  <ListItemText
                    primary={<Typography variant="body2">{value}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            maxWidth: 360,
            marginRight: { xl: "7rem", lg: "5rem", md: "1.5rem" },
          }}
        >
          <List>
            {["Machines", "Moves", "Pokemons"].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={<IconButton aria-label="comment"></IconButton>}
                sx={{ padding: "0" }}
              >
                <ListItemButton sx={{ padding: "0" }}>
                  <ListItemText
                    primary={<Typography variant="body2">{value}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ maxWidth: 360 }}>
          <List>
            {["Contact Us", "Disclaimer", "Ads Information"].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={<IconButton aria-label="comment"></IconButton>}
                sx={{ padding: "0" }}
              >
                <ListItemButton sx={{ padding: "0" }}>
                  <ListItemText
                    primary={<Typography variant="body2">{value}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "70%", marginX: "auto" }}>
        <Typography variant="caption" color="White">
          Copyright © 2022 Stefan Levianto
        </Typography>
      </Box>
    </Box>
  );
}
