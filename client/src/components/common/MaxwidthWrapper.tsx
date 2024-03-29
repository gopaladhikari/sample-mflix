import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function MaxwidthWrapper({ className, children }: Props) {
  return (
    <div
      className={cn(
        "container antialiased min-h-[90vh] px-6 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
