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

// Layout component to handle Header visibility
function Layout({ children }) {
  const { pathname } = useLocation();

  // Define paths where you want to hide the header
  const noHeaderRoutes = ['/login', '/register','/Login', '/Register'];

  return (
    <div>
      {/* Conditionally render Header based on the current route */}
      {!noHeaderRoutes.includes(pathname) && <Header />}
      {children}
    </div>
  );
}

function App() {
  const auth = [
    { path: '/', component: HomeScreen },
    { path: '/login', component: LoginScreen },
    { path: '/register', component: RegisterScreen },
    { path: '/book/:id', component: DisplayBook },
    { path: '/story-option', component: StoryOption },
    { path: '/about', component: AboutUs },
    { path: '/chapter/:id', component: DisplayChapter },
    { path: '/story/:storyid/chapter/:chapterid', component: ReadChapterScreen },
    { path: '/create-story', component: CreateStory },
    { path: '/list-story', component: ListStoriesScreen },
    { path: 'add/story/:storyid', component: ListChapterScreen },
    { path: 'add/story/:storyid/add', component: AddChapterScreen },
    { path: 'add/story/:storyid/chapter/:chapterid/edit', component: EditChapter },
    { path: '/test', component: TestScreen },
  ];

  return (
    <div className="App bg-slate-50">
      <Router>
        <Layout>
          <Routes>
            {auth.map((a) => (
              <Route path={a.path} element={<a.component />} key={a.path} />
            ))}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
