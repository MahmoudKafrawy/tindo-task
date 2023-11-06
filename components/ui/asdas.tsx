"use client";
import { useRef, useState } from "react";

const Tabs = ({ tabsConfig, defaultIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

  const handleClick = (index) => setSelectedIndex(index);

  // to store reference to the tab element
  const tabRefs = useRef({});

  // Selected tab update helper
  const setIndex = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      // focus() will call the state setter
      // to display the associated tabpanel
      tab.focus();
    }
  };

  // onKeyDown handler for tab elements
  const onKeyDown = (event) => {
    const count = tabsConfig.length;
    const nextTab = () => setIndex((selectedIndex + 1) % count);
    const prevTab = () => setIndex((selectedIndex - 1 + count) % count);
    const firstTab = () => setIndex(0);
    const lastTab = () => setIndex(count - 1);

    const keyMap = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    };

    const action = keyMap[event.key];

    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <div>
      <div role="tablist" aria-orientation="horizontal">
        {tabsConfig.map((tab, index) => (
          <button
            key={`tab-${index}`}
            onClick={() => handleClick(index)}
            role="tab"
            ref={(element) => (tabRefs.current[index] = element)}
            aria-controls={`panel-id-${index}`}
            aria-selected={selectedIndex === index}
            id={`tab-id-${index}`}
            onKeyDown={onKeyDown}
            onFocus={() => setSelectedIndex(index)}
            tabIndex={selectedIndex === index ? 0 : -1}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabpanel-wrapper">
        {tabsConfig.map((tab, index) => (
          <section
            key={`tabpanel-${index}`}
            hidden={selectedIndex !== index}
            role="tabpanel"
            aria-labelledby={`tab-id${index}`}
            id={`panel-id-${index}`}
            tabIndex={0}
          >
            {tab.content}
          </section>
        ))}
      </div>
    </div>
  );
};

const Body = () => {
  return <>Hello</>;
};

Tabs.Body = Body;

export { Tabs };
