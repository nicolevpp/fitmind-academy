import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Home from '../routes/Home';


export default function Layout () {
  return (
    <main className="App">
      <Toaster/>
      <Outlet/>
      <Home/>
    </main>
  );
}


// <ColorModeContext.Provider value={colorMode}>
//   <ThemeProvider theme={theme}>
//     <CssBaseline/>
//     <RouterProvider router={router}/>
//   </ThemeProvider>
// </ColorModeContext.Provider>
