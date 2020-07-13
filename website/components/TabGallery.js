import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

function TabGallery() {
  return (
    <div className="flex justify-center">
      <Tabs>
        <TabList>
          <Tab>Alle</Tab>
          <Tab>Gerealiseerd</Tab>
          <Tab>Ontwerp</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Alle</TabPanel>
          <TabPanel>Gerealiseerd</TabPanel>
          <TabPanel>Ontwerpen</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default TabGallery;
