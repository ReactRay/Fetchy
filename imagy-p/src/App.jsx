import ThemeToggle from './cmps/ThemeToggle'
import SearchForm from './cmps/SearchForm'
import Gallary from './cmps/Gallary'


console.log(import.meta.env.VITE_UNSPLASH_API_KEY)


const App = () => {
  return <main>
    <ThemeToggle />
    <SearchForm />
    <Gallary />
  </main>;
};
export default App;
