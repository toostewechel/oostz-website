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

function ProjectCard(props) {
  return (
    <div style={cardStyle} className="rounded mr-3">
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          height: "160px",
        }}
      ></div>
      <div className="p-3 bg-yellow-100 rounded-b">
        <h3 className="text-lg font-heading text-heading font-bold antialiased mb-1">
          {props.title}
        </h3>
        <p className="text-sm font-body text-body font-normal mb-6 antialiased">
          {props.description}
        </p>
        <div className="flex flex-row justify-between items-center">
          <Button href={props.href} label="Bekijken" />
          <div class="inline-flex items-center">
            <img src="/locatie.svg"></img>
            <p className="text-xs text-gray-900">{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalScrollContainer() {
  return (
    <section style={wrapperStyle} className="scrolling-touch mt-10 mb-10">
      <ProjectCard
        image="/images/placeholders/placeholder-project.svg"
        title="Vrijstaand huis"
        description="Lorem ipsum dolem suma. Dolem lorum ipsum solum dorum"
        location="Locatie"
        href="/projecten/mulder"
      />
      <ProjectCard
        image="/images/placeholders/placeholder-project.svg"
        title="Vrijstaand huis"
        description="Lorem ipsum dolem suma. Dolem lorum ipsum solum dorum"
        location="Locatie"
        href="/projecten/mulder"
      />
      <ProjectCard
        image="/images/placeholders/placeholder-project.svg"
        title="Vrijstaand huis"
        description="Lorem ipsum dolem suma. Dolem lorum ipsum solum dorum"
        location="Locatie"
        href="/projecten/mulder"
      />
      <ProjectCard
        image="/images/placeholders/placeholder-project.svg"
        title="Vrijstaand huis"
        description="Lorem ipsum dolem suma. Dolem lorum ipsum solum dorum"
        location="Locatie"
        href="/projecten/mulder"
      />
      <ProjectCard
        image="/images/placeholders/placeholder-project.svg"
        title="Vrijstaand huis"
        description="Lorem ipsum dolem suma. Dolem lorum ipsum solum dorum"
        location="Locatie"
        href="/projecten/mulder"
      />
      <ProjectCard
        image="/images/placeholders/placeholder-project.svg"
        title="Vrijstaand huis"
        description="Lorem ipsum dolem suma. Dolem lorum ipsum solum dorum"
        location="Locatie"
        href="/projecten/mulder"
      />
    </section>
  );
}

export default HorizontalScrollContainer;
