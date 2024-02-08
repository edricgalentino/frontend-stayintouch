import { TabsPropsType } from "./type";

const Tabs = ({ tabs, setActiveTab }: TabsPropsType) => {
  return (
    <div className="tabs tabs-boxed w-full flex justify-center items-center">
      {tabs.map((tab) => (
        <span
          className={`tab ${tab.is_active ? "tab-active" : ""} w-1/${tabs.length} capitalize`}
          onClick={() => {
            setActiveTab(tab.text);
          }}
        >
          {tab.text}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
