import { CurrentTimeCard } from "@/components/current-time-card";

export const revalidate = 10;

// TODO: Dodaj revalidate = 10 i obserwuj stale-while-revalidate.
export default function IsrPage() {
  return (
    <CurrentTimeCard
      title="ISR"
      description="Ta trasa ma zostać odświeżona w tle po wygaśnięciu cache'a."
    />
  );
}
