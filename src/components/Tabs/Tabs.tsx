import { FC, useState } from "react";
import { MemoizedTabItems } from "./TabItems";
import { StyledTabs } from "./Tabs.styled";
import { TabsProps } from "./Tabs.types";

const Tabs: FC<TabsProps> = ({ tabs, startValue, onTabChange }) => {
  const [active, setActive] = useState(startValue ?? tabs[0].value);

  return (
    <StyledTabs>
      <MemoizedTabItems
        {...{
          tabs,
          active,
          setActive,
          onTabChange,
        }}
      />
    </StyledTabs>
  );
};

export default Tabs;
