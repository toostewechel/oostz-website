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
          <div className="md:flex md:flex-row mt-8 mb-8">
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <div>
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row mb-8">
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <div>
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row ">
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <div>
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <div>
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:flex md:flex-row mt-8 mb-6">
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:mr-4 md:w-1/3">
              <div className="mb-8 md:mb-0">
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                  href="/projecten/mulder"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              {/* <div>
                <ThumbnailImage
                  src="/images/placeholders/placeholder-project-large.svg"
                  description="Fusce commodo aliquam arcu."
                />
              </div> */}
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabGallery;
