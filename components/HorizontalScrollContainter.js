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
          backgroundSize: "cover",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
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
        image="/images/projecten/featured/featured-image-demir.jpg"
        title="Notaris woning"
        description="In Deventer is deze fraaie vrijstaande woning gerealiseerd"
        location="Deventer"
        href="/projecten/notaris-woning-deventer-1"
      />
      <ProjectCard
        image="/images/projecten/featured/featured-image-bloemsma.jpg"
        title="Vrijstaand huis"
        description="Deze moderne woning staat op plan Spijkvoorderhout te Deventer"
        location="Deventer"
        href="/projecten/vrijstaande-woning-deventer-1"
      />
      <ProjectCard
        image="/images/projecten/featured/featured-image-krosse.jpg"
        title="Moderne woning"
        description="Deze unieke woning staat op het Franciscushof te Raalte"
        location="Raalte"
        href="/projecten/moderne-woning-raalte-1"
      />
      <ProjectCard
        image="/images/projecten/featured/featured-image-oostz-ontwerp4.jpg"
        title="Schuurwoning"
        description="Modern landelijke schuurwoning te Hellendoorn"
        location="Hellendoorn"
        href="/ontwerpen/oostz-ontwerp-4"
      />
      <ProjectCard
        image="/images/projecten/featured/featured-image-oostz-ontwerp1.jpg"
        title="Twee-onder-een kap"
        description="Unieke twee-onder-een kap te Diepenveen"
        location="Diepenveen"
        href="/ontwerpen/oostz-ontwerp-1"
      />
      <ProjectCard
        image="/images/projecten/featured/featured-image-oostz-ontwerp5.jpg"
        title="Moderne woning"
        description="Moderne woning met paardenverblijf te Mariënheem"
        location="Mariënheem"
        href="/ontwerpen/oostz-ontwerp-5"
      />
    </section>
  );
}

export default HorizontalScrollContainer;
