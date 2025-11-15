"use client";

/**
 * Libs
 */
import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
  FC,
} from "react";
import { cn } from "@/libs/cn";

/**
 * Components
 */
import { Icon } from "@/components/ui/icon";

interface SelectContextType<T> {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedValue: T | null;
  setSelectedValue: (value: T) => void;
  onValueChange?: (value: T) => void;
}

const SelectContext = createContext<SelectContextType<any> | undefined>(
  undefined,
);

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }
  return context;
};

interface SelectProps<T> {
  children: ReactNode;
  onValueChange?: (value: T) => void;
  defaultValue?: T;
}

export const Select = <T,>({
  children,
  onValueChange,
  defaultValue,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<T | null>(
    defaultValue || null,
  );
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleValueChange = (value: T) => {
    setSelectedValue(value);
    onValueChange?.(value);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedValue,
        setSelectedValue: handleValueChange,
      }}
    >
      <div className="relative" ref={selectRef}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

interface SelectTriggerProps {
  children: (value: any | null) => ReactNode;
  placeholder?: ReactNode;
  className?: string;
}

export const SelectTrigger: FC<SelectTriggerProps> = ({
  children,
  placeholder,
  className,
}) => {
  const { isOpen, setIsOpen, selectedValue } = useSelectContext();
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "border-border placeholder:text-foreground-muted focus:border-primary/50 focus:ring-primary/50 flex h-12 w-full items-center justify-between rounded-lg border bg-transparent px-3 py-2 text-sm focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {selectedValue ? children(selectedValue) : placeholder}
    </button>
  );
};

interface SelectContentProps {
  children: ReactNode;
  className?: string;
}

export const SelectContent: FC<SelectContentProps> = ({
  children,
  className,
}) => {
  const { isOpen } = useSelectContext();
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "shadow-level-3 border-border bg-background absolute top-full z-10 mt-2 w-full overflow-hidden rounded-lg border p-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface SelectItemProps<T> {
  value: T;
  children: ReactNode;
  className?: string;
}

export const SelectItem = <T,>({
  value,
  children,
  className,
}: SelectItemProps<T>) => {
  const { setSelectedValue, selectedValue } = useSelectContext();

  //FIXME: Khong nen dua vao object
  const isSelected = JSON.stringify(selectedValue) === JSON.stringify(value);

  return (
    <div
      onClick={() => setSelectedValue(value)}
      className={cn(
        "hover:bg-accent focus:bg-accent relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none",
        isSelected && "bg-primary-light",
        className,
      )}
    >
      {children}
      {isSelected && (
        <Icon
          name="check"
          size={14}
          className="text-primary absolute right-4"
        />
      )}
    </div>
  );
};
