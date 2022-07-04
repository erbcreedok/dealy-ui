import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { Global } from '@emotion/react'
import { NavPanel } from 'src/components/NavPanel'
import { ViewBox } from 'src/components/ViewBox'
import { globalStyles } from 'src/styles/global'
import { theme } from 'src/styles/theme'
import { CalendarView } from 'src/views/CalendarView'

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <ViewBox>
              <Routes>
                  <Route path="/calendar" element={<CalendarView />} />
                  <Route path="/" element={<Navigate to="/calendar" />} />
              </Routes>
              <NavPanel sx={{ mt: 'auto', mb: '16px' }} />
          </ViewBox>
      </ThemeProvider>
  );
}

export default App;
