import {
  Accordion as ReachAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";

function StyledAccordionPanel(props) {
  return (
    <AccordionPanel
      style={{
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingTop: "24px",
        paddingBottom: "24px",
        backgroundColor: "#FFF8E7",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
      {...props}
    />
  );
}

function StyledAccordionButton({ isActive, title, description }) {
  return (
    <AccordionButton style={{ display: "block", width: "100%" }}>
      <div
        className={`${
          isActive
            ? `p-4 flex rounded-t-sm items-center w-full justify-between bg-yellow-100`
            : `p-4 flex rounded-t-sm items-center w-full justify-between`
        }`}
      >
        <div className="flex flex-row">
          <div>
            <img src="placeholderAccordion.svg" className="mr-3"></img>
          </div>
          <div className="flex flex-col items-start ">
            <h4 className="text-base font-heading text-white font-semibold antialiased mb-1">
              Kennismaking
            </h4>
            <p className="text-sm font-body text-gray-200 font-normal antialiased">
              Leer ons kennen en vertel uw plannen
            </p>
          </div>
        </div>
        <div className="flex items-end">
          <svg
            className="fill-current text-white items-center"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path d="M8 13a1.534 1.534 0 01-1.153-.52L.307 5.045A1.231 1.231 0 012.155 3.42l5.72 6.502a.167.167 0 00.25 0l5.72-6.502a1.231 1.231 0 111.848 1.626l-6.538 7.432A1.54 1.54 0 018 13z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <path d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </AccordionButton>
  );
}

function Accordion() {
  const [index, setIndex] = React.useState(0);

  const handleTabsChange = (index) => {
    setIndex(index);
  };

  console.log(index);

  return (
    <ReachAccordion index={index} onChange={handleTabsChange}>
      <AccordionItem>
        <StyledAccordionButton isActive={0 === index}></StyledAccordionButton>
        <StyledAccordionPanel>
          Vertel ons vrijblijvend uw verhaal en maak kennis met Oostz ontwerp.
          Samen bespreken wij uw wensen en ideeën en wat u van ons kunt
          verwachten. Het is handig als u al zoveel mogelijk informatie
          meeneemt. Denk aan kaveldetails, stijlvoorkeuren en budget.
        </StyledAccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h3>
          <AccordionButton>Step 2: Do another thing</AccordionButton>
        </h3>
        <StyledAccordionPanel>
          Vertel ons vrijblijvend uw verhaal en maak kennis met Oostz ontwerp.
          Samen bespreken wij uw wensen en ideeën en wat u van ons kunt
          verwachten. Het is handig als u al zoveel mogelijk informatie
          meeneemt. Denk aan kaveldetails, stijlvoorkeuren en budget.
        </StyledAccordionPanel>
      </AccordionItem>
    </ReachAccordion>
  );
}

export default Accordion;
