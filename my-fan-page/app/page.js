import {items} from"./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
      title="LEGACY VEHICLES:BMW Series "
      tagline="Eat, sleep, drift, repeat😝💯"
      />
      <CardGrid items={items} />
    </main>
  );
}
