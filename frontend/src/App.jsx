import './index.css';
import { Route, Routes } from 'react-router-dom';
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/requireAuth';

// Routes
// import Home from './routes/Home';
import Login from './routes/Login';
// import Signup from './routes/Signup';
// import HomeBlock from './routes/HomeBlock';
// import ExerciseDetail from './routes/ExerciseDetail';

// Scenes
// import Dashboard from './routes/Dashboard';
// import Invoices from './routes/Invoices';
// import Contacts from './routes/Equipo';
import Form from './routes/Form';
import Calendar from './routes/Calendar';
import Routines from './routes/homeExercesises/Routines';
import Layout from './components/Layout';
import Unauthorized from './components/Unauthorized';



// Css Baseline Resets Css to default and Theme Provider helps to use themes
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import HomeExercises from './routes/homeExercesises';


// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <Home/>,
//   //   errorElement: <ErrorPage />,
//   // },
//   {
//     path: '/login',
//     element: <Login/>,
//   },
//   {
//     path: '/signup',
//     element: <Signup/>,
//   },
//   {
//     path: '/rutinas',
//     element: <Routines/>,
//   }
//   ,
//   {
//     path: '/exercise/:id',
//     element: <ExerciseDetail/>,
//   },
//   // {
//   //   path: 'rutinas/crear',
//   //   element: <HomeExercises/>,
//   // }
//   {
//     element: <PersistLogin />,
//     children: [ {
//       element: <RequireAuth home={false}/>,
//       children: [{
//         path: '/rutinas/crear',
//         element: <HomeExercises/>
//       }]
//     }
//     ]
//   },
//   // {
//   //   path: "/private",
//   //   element:
//   //   <PersistLogin>
//   //     <RequireAuth>
//   //       <HomeBlock/>
//   //     </RequireAuth>
//   //   </PersistLogin>,
//   // }
//   // }
//   {
//     element: <PersistLogin />,
//     children: [ {
//       element: <RequireAuth home={false}/>,
//       children: [{
//         path: '/private',
//         element: <HomeBlock/>
//       }]
//     }
//     ]
//   },
//   {
//     element: <PersistLogin />,
//     children: [ {
//       element: <RequireAuth home={true}/>,
//       children: [{
//         path: '/',
//         element: <Layout/>
//       }]
//     }
//     ]
//   },
//   {
//     path: '/dashboard',
//     element: <Dashboard/>,
//   },
//   {
//     path: '/equipo',
//     element: <Contacts/>,
//   },
//   {
//     path: '/invoices',
//     element: <Invoices/>,
//   },
//   {
//     path: '/form',
//     element: <Form/>,
//   },
//   {
//     path: '/calendar',
//     element: <Calendar/>,
//   }
// ]);


export default function App(){

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="unauthorized" element={<Unauthorized />} />


          {/* Rutinas accesibles al iniciar sesión */}
          <Route element={<PersistLogin/>}>
            <Route element={<RequireAuth  />}>
              <Route path="/" element={<Layout />}/>
              <Route path="rutinas" element={<Routines />} />
              <Route path="calendar" element={< Calendar/>} />
            </Route>

            <Route element={<RequireAuth isAdmin={true} />}>
              <Route path="rutinas/crear" element={<HomeExercises />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>




  );
}

{/* // <ColorModeContext.Provider value={colorMode}>
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline/>
  //       <AuthProvider>
  //           <RouterProvider router={router}/>
  //       </AuthProvider>
  //   </ThemeProvider>
  // </ColorModeContext.Provider>

  // <ColorModeContext.Provider value={colorMode}>
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline/>
  //     <RouterProvider router={router}/>
  //   </ThemeProvider>
  // </ColorModeContext.Provider> */}