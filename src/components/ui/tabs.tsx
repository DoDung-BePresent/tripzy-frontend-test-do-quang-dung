"use client";
import { cn } from "@/libs/cn";
import { createContext, useContext, useState, ReactNode, FC } from "react";

interface TabsContextType {
  active: string;
  setActive: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({ defaultValue, children, className }) => {
  const [active, setActive] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={cn(className)}>{children}</div>
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: ReactNode;
}

export const TabsList: FC<TabsListProps> = ({ children }) => {
  return <div className="flex gap-2">{children}</div>;
};

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const TabsTrigger: FC<TabsTriggerProps> = ({
  value,
  children,
  className,
}) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used inside Tabs");

  const { active, setActive } = context;
  const isActive = active === value;

  return (
    <button
      onClick={() => setActive(value)}
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-4 py-2 font-medium transition-colors",
        className,
      )}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

export const TabsContent: FC<TabsContentProps> = ({ value, children }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used inside Tabs");

  if (context.active !== value) return null;

  return <div className="p-4">{children}</div>;
};
