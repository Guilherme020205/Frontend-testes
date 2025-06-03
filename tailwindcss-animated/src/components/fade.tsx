import useInView from "../hooks/useInView";

export default function Fade() {
    const [ref, inView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className={`${inView ? "animate-fade" : "opacity-0"}`}>
      <div className="bg-red-200 p-52">
        <p>Fade</p>
      </div>
    </div>
  );
}
