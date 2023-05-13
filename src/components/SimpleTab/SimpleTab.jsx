import { TabPanel, TabView } from "primereact/tabview";
function SimpleTab(props) {
  const { items } = props;
  return (
    <TabView>
      {items.map((data, index) => {
        return (
          <TabPanel
            key={index}
            header={data.name}
            leftIcon={`${data.icon} mr-2`}
            //   className="justify-center "
            headerClassName="mr-2 px-3 py-2 text-base text-black bg-gray-100 rounded-full flex justify-start items-center"
          >
            <div className="w-full">{data.component()}</div>
          </TabPanel>
        );
      })}
    </TabView>
  );
}

export default SimpleTab;
