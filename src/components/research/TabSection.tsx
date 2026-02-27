"use client";

import { useState, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabSectionProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function TabSection({ tabs, defaultTab }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "");

  // Support URL hash linking
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && tabs.find((t) => t.id === hash)) {
      setActiveTab(hash);
    }
  }, [tabs]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex: number | null = null;
    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    }
    if (newIndex !== null) {
      e.preventDefault();
      handleTabChange(tabs[newIndex].id);
      const button = document.getElementById(`tab-${tabs[newIndex].id}`);
      button?.focus();
    }
  };

  return (
    <div>
      {/* Tab List */}
      <div
        role="tablist"
        aria-label="Research areas"
        className="flex border-b border-[var(--ci-gray-200)] overflow-x-auto scrollbar-hide"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => handleTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`relative px-6 py-4 text-sm md:text-base font-bold whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "text-[var(--ci-blue)]"
                : "text-[var(--ci-gray-600)] hover:text-[var(--ci-blue)]"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-4 right-4 h-[3px] bg-[var(--ci-teal)] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className="pt-8"
        >
          {activeTab === tab.id && (
            <div className="animate-fadeIn">{tab.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
