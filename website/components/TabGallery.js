import {
  Tabs,
  TabList,
  Tab as ReachTab,
  TabPanels,
  TabPanel,
} from "@reach/tabs";

function Tab({ isActive, label }) {
  return (
    <ReachTab style={{ padding: 0 }}>
      <div
        className={`${
          isActive
            ? `bg-yellow-500 rounded text-gray-900 px-2 py-1`
            : `text-white`
        }`}
      >
        {label}
      </div>
    </ReachTab>
  );
}

function TabGallery() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Tabs index={tabIndex} onChange={handleTabsChange}>
      <div className="flex justify-center">
        <TabList>
          <Tab label="Alle" isActive={0 === tabIndex} />
          <Tab label="Gerealiseerd" isActive={1 === tabIndex} />
          <Tab label="Ontwerpen" isActive={2 === tabIndex} />
        </TabList>
      </div>
      <TabPanels>
        <TabPanel>Alle</TabPanel>
        <TabPanel>Gerealiseerd</TabPanel>
        <TabPanel>Ontwerpen</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabGallery;
