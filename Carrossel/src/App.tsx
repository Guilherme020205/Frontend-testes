import Carrossel from "./components/Carrossel";
import ceu from "./assets/ceu.mp4";
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-lg">
        <Carrossel autoSlide={true} autoSlideInterval={5000}>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carrossel>

        <p>Carrossel com video ⬇️</p>
        <Carrossel>
          {[
            ...slides.map((s) => <img src={s} />),
            <video src={ceu} autoPlay muted loop />,
          ]}
        </Carrossel>
      </div>
    </div>
  );
}

export default App;
