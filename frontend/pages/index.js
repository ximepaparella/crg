import { IntroText } from "../components";

export default function Home() {
  return (
    <section className="home">
      <div className="flex-1 w-64">
        <IntroText />
      </div>
      <div className="flex-1 w-64">Testimonial</div>
      <div className="flex-1 w-64">Link Buttons</div>
    </section>
  );
}
