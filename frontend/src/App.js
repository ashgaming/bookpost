import './App.css';
import React, { Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React 

// Screens
import Header from './Components/Header/Header';
import Loader from './Components/Message/Loader';
import ContentSettings from './Helper/ContentSettings';

// Lazy load components
const HomeScreen = React.lazy(() => import('./Screen/HomeScreen'));
const LoginScreen = React.lazy(() => import('./Screen/AuthScreen/LoginScreen'));
const RegisterScreen = React.lazy(() => import('./Screen/AuthScreen/RegisterScreen'));
const DisplayBook = React.lazy(() => import('./Screen/BookScreen/DisplayBook'));
const StoryOption = React.lazy(() => import('./Screen/AddStoryScreen/StoryOption'));
const AboutUs = React.lazy(() => import('./Screen/AboutUs/AboutUs'));
const DisplayChapter = React.lazy(() => import('./Screen/BookScreen/DisplayChapter'));
const TestScreen = React.lazy(() => import('./Screen/TestScreen'));
const ReadChapterScreen = React.lazy(() => import('./Screen/BookScreen/ReadChapterScreen'));
const AddChapterScreen = React.lazy(() => import('./Screen/AddStoryScreen/AddChapterScreen'));
const CreateStory = React.lazy(() => import('./Screen/AddStoryScreen/CreateStory'));

const ListStoriesScreen = React.lazy(() => import('./Screen/AddStoryScreen/ListStoriesScreen'));
const ListChapterScreen = React.lazy(() => import('./Screen/AddStoryScreen/ListChapterScreen'));
const EditChapter = React.lazy(() => import('./Screen/AddStoryScreen/EditChapter'));
const EditStoryScreen = React.lazy(() => import('./Screen/AddStoryScreen/EditStoryScreen'));
const createAnocementScreen = React.lazy(() => import('./Screen/AddEvent/createAnocementScreen'));


gsap.registerPlugin(useGSAP);
// Layout component to handle Header visibility
function Layout({ children }) {
  const { pathname } = useLocation();
  
  // Define paths where you want to hide the header
  const noHeaderRoutes = ['/login', '/register', '/Login', '/Register'];
  
  return (
    <div>
      {/* Conditionally render Header based on the current route */}
      {!noHeaderRoutes.includes(pathname) && <Header />}
      {children}
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const container = useRef()


  ContentSettings();


  const authRoutes = [
    { path: '/', component: HomeScreen },
    { path: '/login', component: LoginScreen },
    { path: '/register', component: RegisterScreen },
    { path: '/book/:id', component: DisplayBook },
    { path: '/about', component: AboutUs },
    { path: '/chapter/:id', component: DisplayChapter },
    { path: '/story/:storyid/chapter/:chapterid', component: ReadChapterScreen },
  ];

  const adminAuthRoutes = [
    { path: '/test', component: TestScreen },
    { path: '/story-option', component: StoryOption },
    { path: '/create-story', component: CreateStory },
    { path: '/edit-story/:storyid', component: EditStoryScreen },
    { path: '/list-story', component: ListStoriesScreen },
    { path: '/add/story/:storyid', component: ListChapterScreen },
    { path: '/add/story/:storyid/add', component: AddChapterScreen },
    { path: '/add/story/:storyid/chapter/:chapterid/edit', component: EditChapter },
    { path: '/create/annoucemnt', component: createAnocementScreen },
  ];

  return (
    <div ref={container} className="App" style={{ userSelect: 'none' }}>
      <Router>
        <Layout>
          <Routes>
            {/* Render routes with lazy loading */}
            {authRoutes.map((route) => (
              <Route
                path={route.path}
                key={route.path}
                element={
                  <Suspense fallback={<Loader />}>
                    <route.component dispatch={dispatch} />
                  </Suspense>
                }
              />
            ))}
            {adminAuthRoutes.map((route) => (
              <Route
                path={route.path}
                key={route.path}
                element={
                  <Suspense fallback={<Loader />}>
                    <route.component dispatch={dispatch} />
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
