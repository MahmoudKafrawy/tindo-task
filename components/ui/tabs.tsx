import { cn } from "@/lib/utils";
import { ITabsContent, ITabsPanelProps, ITabsProps, ITrigger } from "@/types/interfaces";
import { cva } from "class-variance-authority";
import { createContext, useContext, useState } from "react";

const TabContext = createContext({
  activeTab: "",
  tabUniqKey: 0,
  setActiveTab: (value: string) => {},
});

export const tabsVariants = cva("", {
  variants: {
    variant: {
      default: "",
      vertical: "flex",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Tabs = ({ children, className, defaultValue, variant }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);
  const [tabUniqKey] = useState(Math.floor(Math.random() * 1000));
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, tabUniqKey }}>
      <div className={cn(tabsVariants({ variant, className }))}>{children}</div>
    </TabContext.Provider>
  );
};

const TabsPanel = ({ children, className }: ITabsPanelProps) => {
  const { activeTab, setActiveTab, tabUniqKey } = useContext(TabContext);
  const activeIndex = children.findIndex((v: any) => v.props.value === activeTab);
  return (
    <div
      role="tablist"
      className={cn("h-full", className)}
      onKeyDown={(e) => {
        if ((e.key == "ArrowLeft" || e.key == "ArrowDown") && activeIndex > 0) {
          setActiveTab(children[activeIndex - 1].props.value);
          document.getElementById(`tab-${tabUniqKey}-${children[activeIndex - 1].props.value}`)?.focus();
        }
        if ((e.key == "ArrowRight" || e.key == "ArrowUp") && activeIndex < children.length - 1) {
          setActiveTab(children[activeIndex + 1].props.value);
          document.getElementById(`tab-${tabUniqKey}-${children[activeIndex + 1].props.value}`)?.focus();
        }
        if (activeIndex == children.length - 1) {
          setActiveTab(children[0].props.value);
          document.getElementById(`tab-${tabUniqKey}-${children[0].props.value}`)?.focus();
        }
      }}
    >
      {children}
    </div>
  );
};

const Trigger = ({ children, className, value }: ITrigger) => {
  const { activeTab, setActiveTab, tabUniqKey } = useContext(TabContext);

  return (
    <button
      role="tab"
      id={`tab-${tabUniqKey}-${value}`}
      data-selected={activeTab === value}
      className={cn(
        "hover:bg-slate-500 cursor-pointer hover:text-white h-full flex items-center p-2 data-[selected=true]:bg-slate-600 data-[selected=true]:text-white",
        className
      )}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value, className }: ITabsContent) => {
  const { activeTab } = useContext(TabContext);

  if (activeTab == value)
    return (
      <div data-selected="true" className={cn(className)}>
        {children}
      </div>
    );
  return null;
};

Tabs.TabsPanel = TabsPanel;
Tabs.TabsContent = TabsContent;
Tabs.Trigger = Trigger;

export { Tabs };
