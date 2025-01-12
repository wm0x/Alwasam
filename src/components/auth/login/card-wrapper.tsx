"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Header } from "./header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
}

export const CardWrapper = ({ children, headerLabel }: CardWrapperProps) => {
  return (
    <Card className="p-8 border-2 border-red-400/25 rounded-xl text-center backdrop-blur-lg bg-white/10 shadow-2xl transform transition duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(82,44,45,0.8)] max-w-[95%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
