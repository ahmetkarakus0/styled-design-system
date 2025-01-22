import { FC, memo } from "react";
import { StyledTabItem } from "./Tabs.styled";
import { TabsProps } from "./Tabs.types";

interface Props extends TabsProps {
  setActive: (val: string) => void;
  active: string;
}

const TabItems: FC<Props> = ({ tabs, active, setActive, onTabChange }) => {
  return tabs.map((tab) => (
    <StyledTabItem
      key={tab.value}
      onClick={() => {
        setActive(tab.value);
        if (onTabChange) {
          onTabChange(tab.value);
        }
      }}
      active={active === tab.value}
    >
      {tab.label}
    </StyledTabItem>
  ));
};

const MemoizedTabItems = memo(TabItems);

export { MemoizedTabItems };
