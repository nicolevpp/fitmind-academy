import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/requireAuth';

// Routes
import Home from './routes/Home';
import Login from './routes/login';
import Signup from './routes/Signup';
import HomeExercises from './routes/HomeExercises';
import HomeBlock from './routes/HomeBlock';
import ExerciseDetail from './routes/ExerciseDetail';

// Scenes
import Dashboard from './scenes/dashboard'
import Invoices from './scenes/invoices/index'
import Contacts from './scenes/equipo/index'
import Bar from './scenes/bar/index'
import Form from './scenes/form/index'
import Line from './scenes/line'
// import Pie from './scenes/pie'
import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
import Calendar from './scenes/calendar/index'



// Css Baseline Resets Css to default and Theme Provider helps to use themes
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home/>,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/rutinas",
    element: <HomeExercises/>,
  }
  ,
  {
    path: "/exercise/:id",
    element: <ExerciseDetail/>,
  },
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
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/equipo",
    element: <Contacts/>,
  },
  {
    path: "/invoices",
    element: <Invoices/>,
  },
  {
    path: "/form",
    element: <Form/>,
  },
  {
    path: "/bar",
    element: <Bar/>,
  },
  // {
  //   path: "/pie",
  //   element: <Pie/>,
  // },
  {
    path: "/line",
    element: <Line/>,
  },
  {
    path: "/faq",
    element: <FAQ/>,
  },
  // {
  //   path: "/geography",
  //   element: <Geography/>,
  // },
  {
    path: "/calendar",
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

        
    )
}
