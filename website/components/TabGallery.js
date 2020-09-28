import ThumbnailImage from "../components/ThumbnailImage.js";

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
            ? `bg-yellow-500 rounded text-background px-2 py-1 text-sm font-body font-medium`
            : `text-white px-2 py-1 text-sm font-body`
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
      <div className="flex">
        <TabList>
          <Tab label="Alle" isActive={0 === tabIndex} />
          <Tab label="Gerealiseerd" isActive={1 === tabIndex} />
          <Tab label="Ontwerpen" isActive={2 === tabIndex} />
        </TabList>
      </div>
      <TabPanels>
        <TabPanel>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-demir.jpg"
                  title="Gerealiseerd"
                  description="Notaris woning te Deventer"
                  href="/projecten/notaris-woning-deventer-1"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-schutte-jansen-holleboom.jpg"
                  title="Gerealiseerd"
                  description="Moderne woning te Heeten"
                  href="/projecten/moderne-woning-heeten-1"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-zwakenberg.jpg"
                  title="Gerealiseerd"
                  description="Veranda te Raalte"
                  href="/projecten/veranda-raalte-1"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-krosse.jpg"
                  title="Gerealiseerd"
                  description="Moderne woning te Raalte"
                  href="/projecten/moderne-woning-raalte-1"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row mt-8 ">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-bloemsma.jpg"
                  title="Gerealiseerd"
                  description="Vrijstaande woning te Deventer"
                  href="/projecten/vrijstaande-woning-deventer-1"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-pronk.jpg"
                  title="Gerealiseerd"
                  description="Twee-onder-een kap te Mariënheem"
                  href="/projecten/twee-onder-een-kap-marienheem-1"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-oostz-ontwerp1.jpg"
                  title="Ontwerp"
                  description="Twee-onder-een kap te Diepenveen"
                  href="/ontwerpen/oostz-ontwerp1"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-oostz-ontwerp2.jpg"
                  title="Ontwerp"
                  description="Vrijstaande woning te Hellendoorn"
                  href="/ontwerpen/oostz-ontwerp2"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-oostz-ontwerp3.jpg"
                  title="Ontwerp"
                  description="Moderne woning te Wijhe"
                  href="/ontwerpen/oostz-ontwerp3"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-oostz-ontwerp4.jpg"
                  title="Ontwerp"
                  description="Schuurwoning te Hellendoorn"
                  href="/ontwerpen/oostz-ontwerp4"
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-demir.jpg"
                  title="Gerealiseerd"
                  description="Notaris woning te Deventer"
                  href="/projecten/notaris-woning-deventer-1"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-schutte-jansen-holleboom.jpg"
                  title="Gerealiseerd"
                  description="Moderne woning te Heeten"
                  href="/projecten/moderne-woning-heeten-1"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-zwakenberg.jpg"
                  title="Gerealiseerd"
                  description="Veranda te Raalte"
                  href="/projecten/veranda-raalte-1"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-krosse.jpg"
                  title="Gerealiseerd"
                  description="Moderne woning te Raalte"
                  href="/projecten/moderne-woning-raalte-1"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row mt-8 ">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-bloemsma.jpg"
                  title="Gerealiseerd"
                  description="Vrijstaande woning te Deventer"
                  href="/projecten/vrijstaande-woning-deventer-1"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-pronk.jpg"
                  title="Gerealiseerd"
                  description="Twee-onder-een kap woning te Mariënheem"
                  href="/projecten/twee-onder-een-kap-marienheem-1"
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-oostz-ontwerp1.jpg"
                  title="Ontwerp"
                  description="Twee-onder-een kap te Diepenveen"
                  href="/ontwerpen/oostz-ontwerp1"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-oostz-ontwerp2.jpg"
                  title="Ontwerp"
                  description="Vrijstaande woning te Hellendoorn"
                  href="/ontwerpen/oostz-ontwerp2"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-oostz-ontwerp3.jpg"
                  title="Ontwerp"
                  description="Moderne woning te Wijhe"
                  href="/ontwerpen/oostz-ontwerp3"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/2">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/projecten/featured/featured-image-oostz-ontwerp4.jpg"
                  title="Ontwerp"
                  description="Schuurwoning te Hellendoorn"
                  href="/ontwerpen/oostz-ontwerp4"
                />
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabGallery;
