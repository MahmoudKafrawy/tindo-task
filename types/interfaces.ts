import { tabsVariants } from "@/components/ui/tabs";
import { VariantProps } from "class-variance-authority";

export interface ITabsProps extends VariantProps<typeof tabsVariants> {
  children: React.ReactNode;
  className?: string;
  defaultValue: string;
}

export interface ITabsPanelProps {
  children: React.ReactNode;
  className?: string;
}

export interface ITabsContent {
  children: React.ReactNode;
  value: string;
}

export interface ITrigger {
  children: React.ReactNode;
  className?: string;
  value: string;
}
