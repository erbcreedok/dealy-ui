import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom'
import { Box, ThemeProvider } from '@mui/material'
import { Global } from '@emotion/react'
import { NavPanel } from 'src/components/NavPanel'
import { ViewWrapper } from 'src/components/ViewWrapper'
import { globalStyles } from 'src/styles/global'
import { theme } from 'src/styles/theme'
import { CalendarView } from 'src/views/CalendarView'
import { NAV_PANEL_BOTTOM_OFFSET } from './constants/constants'

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <ViewWrapper>
              <Routes>
                  <Route path="/calendar" element={<CalendarView />} />
                  <Route path="/" element={<Navigate to="/calendar" />} />
              </Routes>
              <NavPanel sx={{ mt: 'auto', zIndex: 1000, position: 'relative' }} />
              <Box minHeight={`${NAV_PANEL_BOTTOM_OFFSET}px`} sx={{ background: 'white' }} />
          </ViewWrapper>
      </ThemeProvider>
  );
}

export default App;
