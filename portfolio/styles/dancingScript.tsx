'use client';
import { Dancing_Script } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import {responsiveFontSizes} from '@mui/material/';

const dancingScript = Dancing_Script(
  {
    subsets:['latin'],
    weight: "700",
  });

const theme = createTheme({
  typography: {
    fontFamily: dancingScript.style.fontFamily,
    fontSize:20
  },
});

export default responsiveFontSizes(theme);
