import React from "react";

import { auth } from "@/auth";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";
async function HomePage() {
  const session = await auth();
  return (
    <>
      <div>
        <div className="sticky top-0 z-40 px-8">
          <div className="bg-gray-400/40 backdrop-blur-md rounded-xl p-4 pt-4 shadow-lg text-center border border-gray-400 ">
            <h1 className="text-4xl font-extrabold font-serif">
              الصفحة الرئيسية
            </h1>
            <p className="flex flex-wrap items-center justify-center text-sm font-extrabold mt-2 overflow-hidden text-center">
              <span>أهلاً وسهلاً بك</span>
              <span className="text-red-700 mx-1 whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
                {session?.user?.name || "{username}"}
              </span>
              <span className="truncate">
                نتمنى لك يوماً مليئاً بالإبداع والإنجازات!
              </span>
              <span className="ml-1">💼🚀</span>
            </p>
          </div>
        </div>
        <div className="carousel flex text-center items-center justify-center p-10">
          <ChevronRight/>
          <div>there will be create carousel</div>
          <ChevronLeft/>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
