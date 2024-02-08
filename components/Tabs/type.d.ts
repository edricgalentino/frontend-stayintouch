export type TabsPropsType = {
  tabs: {
    text: string;
    is_active: boolean;
    disabled?: boolean;
  }[];
  setActiveTab: (tab: string) => void;
};
