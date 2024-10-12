import './App.css';
import Header from './Components/Header/Header';
import HomeScreen from './Screen/HomeScreen';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginScreen from './Screen/AuthScreen/LoginScreen';
import RegisterScreen from './Screen/AuthScreen/RegisterScreen';
import DisplayBook from './Screen/BookScreen/DisplayBook';
import StoryOption from './Screen/AddStoryScreen/StoryOption';
import AboutUs from './Screen/AboutUs/AboutUs';
import DisplayChapter from './Screen/BookScreen/DisplayChapter';
import TestScreen from './Screen/TestScreen';
import ReadChapterScreen from './Screen/BookScreen/ReadChapterScreen';
import AddChapterScreen from './Screen/AddStoryScreen/AddChapterScreen';
import CreateStory from './Screen/AddStoryScreen/CreateStory';
import ListStoriesScreen from './Screen/AddStoryScreen/ListStoryiesScreen';
import ListChapterScreen from './Screen/AddStoryScreen/ListChapterScreen';
import EditChapter from './Screen/AddStoryScreen/EditChapter';
import { useDispatch } from 'react-redux';
import EditStoryScreen from './Screen/AddStoryScreen/EditStoryScreen';

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
  const auth = [
    { path: '/', component: HomeScreen },
    { path: '/login', component: LoginScreen },
    { path: '/register', component: RegisterScreen },
    { path: '/book/:id', component: DisplayBook },
    { path: '/about', component: AboutUs },
    { path: '/chapter/:id', component: DisplayChapter },
    { path: '/story/:storyid/chapter/:chapterid', component: ReadChapterScreen },

  ];

  const adminAuth = [
    { path: '/test', component: TestScreen },
    { path: '/story-option', component: StoryOption },
    { path: '/create-story', component: CreateStory },
    { path: '/edit-story/:storyid', component: EditStoryScreen },
    { path: '/list-story', component: ListStoriesScreen },
    { path: 'add/story/:storyid', component: ListChapterScreen },
    { path: 'add/story/:storyid/add', component: AddChapterScreen },
    { path: 'add/story/:storyid/chapter/:chapterid/edit', component: EditChapter },

  ]

  return (
    <div className="App bg-slate-50">
      <Router>
        <Layout>
          <Routes>
            {auth.map((a) => (
              <Route path={a.path}
                element={<a.component dispatch={dispatch} />}
                key={a.path} />
            ))}

            {adminAuth.map((a) => (
              <Route path={a.path}
                element={<a.component dispatch={dispatch} />}
                key={a.path} />
            ))}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
