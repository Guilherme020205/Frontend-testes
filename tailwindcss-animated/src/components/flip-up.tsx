import useInView from "../hooks/useInView";

export default function FlipUp() {
    const [ref, inView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className={`${inView ? "animate-flip-up" : "opacity-0"}`}>
      <div className="bg-blue-200 p-52">
        <p>flip-up</p>
      </div>
    </div>
  );
}
