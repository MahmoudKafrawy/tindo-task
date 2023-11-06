import { cn } from "@/lib/utils";
import { ITabsContent, ITabsPanelProps, ITabsProps, ITrigger } from "@/types/interfaces";
import { cva } from "class-variance-authority";
import { createContext, useContext, useState } from "react";

const TabContext = createContext({
  activeTab: "",
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

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn(tabsVariants({ variant, className }))}>{children}</div>
    </TabContext.Provider>
  );
};

const TabsPanel = ({ children, className }: ITabsPanelProps) => {
  return (
    <div role="tablist" className={cn("h-full", className)}>
      {children}
    </div>
  );
};

const Trigger = ({ children, className, value }: ITrigger) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <button
      role="tab"
      aria-controls={`tabpanel-${value}`}
      data-state={activeTab === value ? "true" : undefined}
      className={cn(
        "hover:bg-slate-500 cursor-pointer hover:text-white h-full flex items-center p-2 data-[state=true]:bg-slate-600 data-[state=true]:text-white",
        className
      )}
      onKeyDown={() => console.log(value)}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value }: ITabsContent) => {
  const { activeTab } = useContext(TabContext);

  if (activeTab == value) return <div data-selected="selected">{children}</div>;
  return null;
};

Tabs.TabsPanel = TabsPanel;
Tabs.TabsContent = TabsContent;
Tabs.Trigger = Trigger;

export { Tabs };
