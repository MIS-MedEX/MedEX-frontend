import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DataList from "../components/NestedList_Data";
import ToolBar from "../components/ToolBar";
import Toolbar from "@mui/material/Toolbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import ReportAIResult from "../components/ReportAIResult";
import { Canvas } from "../components/Canvas";
import { CanvasProvider } from "../components/CanvasContext";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import {
  OriginButton,
  CardioButton,
  PleuralButton,
  PneumoButton,
} from "../components/ImageButtons";
import { ButtonGroup } from "@mui/material";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Personal_Page() {
  const theme = useTheme();
  const [btnNum, setBtnNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [canvasOpen, setCanvasOpen] = useState(0);
  let res = JSON.parse(localStorage.getItem("response"));


  const handleImage = () => {
    setCanvasOpen(canvasOpen + 1);
    setBtnNum(1);
  };

  const handleButtonNum = (num) => {
    setBtnNum(num);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    console.log("Reset")
    let empty_more_res = {error: 0.0, prob: 0.0}
    let empty_our_res = {error: 0.0, prob: 0.0, vis_base64: "", vis_path: ""}
    let res = {
      highlight: [],
      img_label: "",
      image_base64: "",
      pred_label: "",
      report: "",
      res_baseline_cardio: empty_more_res,
      res_baseline_pleural: empty_more_res,
      res_baseline_pneumo: empty_more_res,
      res_our_cardio: empty_our_res,
      res_our_pleural: empty_our_res,
      res_our_pneumo: empty_our_res,
    }
    localStorage.setItem("response", JSON.stringify(res))
  }

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              MedEX
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" color="inherit" href="/" onClick={handleReset}>
                <HomeIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <DataList imgOnChange={handleImage} />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <React.StrictMode>
            <CanvasProvider>
              <Stack spacing={2}>
                <ToolBar />
                <Grid container>
                  <Grid item md={0.25} />
                  <Grid item md={6.75}>
                    <ButtonGroup fullWidth={true} sx={{ mb: 1 }}>
                      <OriginButton
                        btnNums={btnNum}
                        btnOnChange={handleButtonNum}
                      />
                      <CardioButton
                        btnNums={btnNum}
                        btnOnChange={handleButtonNum}
                      />
                      <PleuralButton
                        btnNums={btnNum}
                        btnOnChange={handleButtonNum}
                      />
                      <PneumoButton
                        btnNums={btnNum}
                        btnOnChange={handleButtonNum}
                      />
                    </ButtonGroup>
                    <Canvas canvasOpen={canvasOpen} />
                  </Grid>
                  <Grid item md={0.25} />
                  <Grid item md={4.75}>
                    <ReportAIResult />
                  </Grid>
                </Grid>
              </Stack>
            </CanvasProvider>
          </React.StrictMode>
        </Main>
      </Box>
    </React.Fragment>
  );
}

export const PersonalPage = Personal_Page;
