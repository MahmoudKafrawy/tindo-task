import { cn } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

const TabContext = createContext({
  activeTab: "",
  setActiveTab: (value: string) => {},
});

const Tabs = ({
  children,
  className,
  defaultValue,
}: {
  children: React.ReactNode;
  className?: string;
  defaultValue: string;
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn(className)}>{children}</div>
    </TabContext.Provider>
  );
};

const TabsPanel = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn(className)}>{children}</div>;
};

const TabsContent = ({ children, value }: { children: React.ReactNode; value: string }) => {
  const { activeTab } = useContext(TabContext);
  if (activeTab == value) return <div data-selected="selected">{children}</div>;
  return null;
};

const Trigger = ({ children, className, value }: { children: React.ReactNode; className?: string; value: string }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <button
      role="tab"
      data-state={activeTab === value ? "active" : undefined}
      className={cn(
        "hover:bg-slate-500 cursor-pointer hover:text-white h-full flex items-center p-2 data-[state=active]:bg-slate-600 data-[state=active]:text-white",
        className
      )}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

Tabs.TabsPanel = TabsPanel;
Tabs.TabsContent = TabsContent;
Tabs.Trigger = Trigger;

export { Tabs };
