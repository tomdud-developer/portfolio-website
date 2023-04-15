import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {purple, blue, cyan, green, yellow, orange, red, teal, grey} from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    '&.Mui-checked': {
        color: theme.status.danger,
    },
}));

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: teal[500],
        },
        error: {
            main: red[500],
        },
        warning: {
            main: yellow[500],
        },
        info: {
            main: grey[500],
        },
        success: {
            main: blue[500],
        },
        background: {
            paper: '#282c34',
            default: '#282c34',
        },
        text: {
            primary: '#abb2bf',
            secondary: '#5c6370',
            disabled: '#6b7280',
        },
    },
});

export default function CustomStyles(props: { children?: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}