"use client";

import { Tabs } from "@/components/ui/tabs";
const tabsConfig = [
  {
    label: "Tab1",
    content: "Content Panel 1",
    icon: "😍",
  },
  {
    label: "Tab2",
    content: "Content Panel 2",
    icon: "🤓",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div>
        <h1>1.Horizontal Tabs</h1>
        <Tabs defaultValue="A">
          <Tabs.TabsPanel className="bg-gray-200 h-10 flex  items-center">
            <Tabs.Trigger value="A">Tab A</Tabs.Trigger>
            <Tabs.Trigger value="B"> Tab B</Tabs.Trigger>
          </Tabs.TabsPanel>
          <Tabs.TabsContent value="A">Content for A</Tabs.TabsContent>
          <Tabs.TabsContent value="B">Content for B</Tabs.TabsContent>
        </Tabs>
      </div>
      <div>
        <h1>2.Vertical Tabs</h1>
        <Tabs className="flex" defaultValue="A">
          <Tabs.TabsPanel className="bg-gray-200 h-full flex-col  items-center">
            <Tabs.Trigger value="A">Tab A</Tabs.Trigger>
            <Tabs.Trigger value="B"> Tab B</Tabs.Trigger>
          </Tabs.TabsPanel>
          <Tabs.TabsContent value="A">Content for A</Tabs.TabsContent>
          <Tabs.TabsContent value="B">Content for B</Tabs.TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
