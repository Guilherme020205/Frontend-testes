import Fade from "./components/fade";
import FlipUp from "./components/flip-up";
function App() {
  return (
    <div className="flex flex-col justify-center items-center h-full py-10 gap-96">
      <Fade />
      <FlipUp />
      <Fade />
      <FlipUp />
    </div>
  );
}

export default App;
