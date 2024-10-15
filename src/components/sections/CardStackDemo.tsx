"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "../../../lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-700/[0.2] dark:text-yellow-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "",
    designation: "",
    content: <p>Uma Diversidade de Bombas Solares</p>,
  },
  {
    id: 1,
    name: "",
    designation: "",
    content: <p>Uma Vasta Gama de Paineis Solares</p>,
  },
  {
    id: 2,
    name: "",
    designation: "",
    content: <p>Todo Tipo de Acessórios</p>,
  },
];
