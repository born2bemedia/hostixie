import {
  ClientResults,
  ClientReviews,
  ClientsOften,
  Experience,
  Hero,
  OurProcess,
  StartBuilding,
  WhatProjectsWork,
} from './components';

export default function Clients() {
  return (
    <main>
      <Hero />
      <WhatProjectsWork />
      <ClientResults />
      <ClientReviews />
      <ClientsOften />
      <OurProcess />
      <Experience />
      <StartBuilding />
    </main>
  );
}
