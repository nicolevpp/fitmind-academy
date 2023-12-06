import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/requireAuth';

// Routes
import Home from './routes/Home';
import Login from './routes/login';
import Signup from './routes/Signup';
import HomeBlock from './routes/HomeBlock';
import ExerciseDetail from './routes/ExerciseDetail';

// Scenes
import Dashboard from './routes/Dashboard';
import Invoices from './routes/Invoices';
import Contacts from './routes/Equipo';
import Bar from './routes/Bar';
import Form from './routes/Form';
import Line from './routes/Line';
import FAQ from './routes/FAQ';
import Calendar from './routes/Calendar';
import Routines from './routes/Routines';



// Css Baseline Resets Css to default and Theme Provider helps to use themes
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import HomeExercises from './routes/homeExercesises';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home/>,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <Signup/>,
  },
  {
    path: '/rutinas',
    element: <HomeExercises/>,
  }
  ,
  {
    path: '/exercise/:id',
    element: <ExerciseDetail/>,
  },
  {
    path: '/ver',
    element: <Routines/>,
  }
  ,
  // {
  //   path: "/private",
  //   element:
  //   <PersistLogin>
  //     <RequireAuth>
  //       <HomeBlock/>
  //     </RequireAuth>
  //   </PersistLogin>,
  // }
  // }
  {
    element: <PersistLogin />,
    children: [ {
      element: <RequireAuth home={false}/>,
      children: [{
        path: '/private',
        element: <HomeBlock/>
      }]
    }
    ]
  },
  {
    element: <PersistLogin />,
    children: [ {
      element: <RequireAuth home={true}/>,
      children: [{
        path: '/',
        element: <Home/>
      }]
    }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    path: '/equipo',
    element: <Contacts/>,
  },
  {
    path: '/invoices',
    element: <Invoices/>,
  },
  {
    path: '/form',
    element: <Form/>,
  },
  {
    path: '/bar',
    element: <Bar/>,
  },
  {
    path: '/line',
    element: <Line/>,
  },
  {
    path: '/faq',
    element: <FAQ/>,
  },
  {
    path: '/calendar',
    element: <Calendar/>,
  }
]);


export default function App(){

  const [theme, colorMode] = useMode();

  return (

  // <ColorModeContext.Provider value={colorMode}>
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline/>
  //       <AuthProvider>
  //           <RouterProvider router={router}/>
  //       </AuthProvider>
  //   </ThemeProvider>
  // </ColorModeContext.Provider>

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AuthProvider>
          <RouterProvider router={router}/>
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>


  );
}
