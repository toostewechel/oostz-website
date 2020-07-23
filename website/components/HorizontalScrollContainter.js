import Button from "../components/Button";

const cardStyle = {
  flex: "0 0 auto",
  width: "260px",
};

const wrapperStyle = {
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
};

function ProjectCard() {
  return (
    <div style={cardStyle} className="rounded mr-3">
      <div
        style={{
          backgroundImage: "url(/project1.png)",
          height: "160px",
        }}
      ></div>
      <div className="p-3 bg-yellow-100 rounded-b">
        <h4 className="text-base font-heading text-heading font-medium antialiased mb-1">
          Vrijstaand huis
        </h4>
        <p className="text-sm font-body text-body font-normal mb-6 antialiased">
          Fusce convallis metus id felis luctus adipiscing. Sed libero.
          Vestibulum volutpat pretium libero.
        </p>
        <div className="flex flex-row justify-between items-center">
          <Button label="Bekijken" />
          <p className="text-sm">Raalte</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalScrollContainer() {
  return (
    <section style={wrapperStyle} className="scrolling-touch mt-10 mb-10">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}

export default HorizontalScrollContainer;
