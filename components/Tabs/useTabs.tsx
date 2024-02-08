import { useState } from "react";
import { TabsPropsType } from "./type";

function useTabs(tabs: TabsPropsType["tabs"]): {
  tabs: TabsPropsType["tabs"];
  setTabs: (tabs: TabsPropsType["tabs"]) => void;
  activeTab: TabsPropsType["tabs"][0]["text"];
  setActiveTab: (tab: TabsPropsType["tabs"][0]["text"]) => void;
} {
  const [aTabs, setATabs] = useState(tabs[0].text);
  const [tabsState, setTabsState] = useState(tabs);

  const setTabs = (tabs: TabsPropsType["tabs"]) => {
    setTabsState(tabs);
  };

  const setActiveTab = (tab: TabsPropsType["tabs"][0]["text"]) => {
    setATabs(tab);
    setTabsState(tabsState.map((t) => ({ ...t, is_active: t.text === tab })));
  };

  return {
    tabs: tabsState,
    setTabs,
    activeTab: aTabs,
    setActiveTab,
  };
}

export default useTabs;
