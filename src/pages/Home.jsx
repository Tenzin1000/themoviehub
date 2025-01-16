import Movie from "./Movie";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Movie />
      <Pagination />
      <About />
    </>
  );
}
