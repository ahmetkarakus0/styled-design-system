export interface TabsProps {
  tabs: TabItemProps[];
  startValue?: string;
  onTabChange?: (val: string) => void;
}

export interface TabItemProps {
  label: string;
  value: string;
}
