import HeroSelection from "@/Components/HeroSelection";
import CardSelection from "@/Components/CardSelection";
import ServiceCard from "@/Components/ServiceCard";
import Content from "@/Components/Content";
import Form from "@/Components/Form";

export default function Home() {
  return (
    <main>
      <HeroSelection />
      <CardSelection />
      <ServiceCard />
      <Content />
      <Form />
    </main>
  );
}
