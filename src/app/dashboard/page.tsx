import React from "react";

import { auth } from "@/auth";
async function  HomePage() {
  const session = await auth();
  return (
    <>
      <div>
        <div className="sticky top-0 z-40 px-8">
          <div className="bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg text-center border border-gray-400">
            <h1 className="text-4xl font-extrabold tracking-wide text-[#882D37]">
              الصفحة الرئيسية
            </h1>
            <p className="flex items-center justify-center text-sm font-extrabold mt-2 space-x-1 text-[#D8B043]">
              <span>  أهلاً وسهلاً بك </span>
              {/** this is work but because i create programming user with out name with out name  */}
              <span className="text-red-700 mx-1"> {session?.user?.name} </span>
              <span>نتمنى لك يوماً مليئاً بالإبداع والإنجازات ! </span>
              <span className="ml-1">💼🚀</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
