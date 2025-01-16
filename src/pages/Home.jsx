import Movie from "./Movie";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

export default function Home() {
  return (
    <>
      <Navbar />
      <Movie />
      <Pagination />
    </>
  );
}
