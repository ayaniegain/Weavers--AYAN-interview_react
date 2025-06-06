import MYmap from "./Mymap/MYmap";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold mb-4">Google Maps in React</h1>
      <MYmap />

      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 px-5 py-3 bg-white shadow-lg border-none rounded-lg cursor-pointer font-bold"
      >
        Scroll to Top
      </button>
    </div>
  );
}

export default App;
