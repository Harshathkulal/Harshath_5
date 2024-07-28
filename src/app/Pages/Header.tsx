// "use client"

// import React from "react";
// import Link from "next/link";
// import { useState } from "react";
// import { ModeToggle } from "@/components/toggleButton";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Header = () => {
//     const [sidenav, setSidenav] = useState(false);
//   return (
//       <div className="w-full sticky top-0 z-50 border-b-[1px] border-b-gray-200 ">
//         <nav className="flex justify-between mx-2 m-1">
//           <Link href="/">
//             <div>Harshath</div>
//           </Link>
//           <div className="flex items-center justify-between h-full">
//             <div className="hidden lg:block">
//               <div className="flex gap-6 justify-center items-center m-4">
//                 <Link className="font-medium" href={"/shoe/"}>
//                   New & Featured
//                 </Link>
//                 <Link className="font-medium" href={"shoe/dunk"}>
//                   Men
//                 </Link>
//                 <Link className="font-medium" href={"shoe/"}>
//                   Women
//                 </Link>
//                 <Link className="font-medium" href={"shoe/"}>
//                   kids
//                 </Link>
//                 <Link className="font-medium" href={"shoe/"}>
//                   Sales
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="flex m-2 justify-center items-center gap-4">
//             <ModeToggle />

     
            
      

//             {/* Mobile View */}
//             <AiOutlineMenu
//               size={24}
//               onClick={() => setSidenav(!sidenav)}
//               className="md:hidden cursor-pointer"
//             />
//             {sidenav && (
//               <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-70  z-20">
//                 <div className="fixed top-0 right-0 w-[85%] h-full bg-white z-30 shadow-lg transition ease-in-out duration-500 ">
//                   <button
//                     onClick={() => setSidenav(false)}
//                     className="text-black right-2 absolute m-2 top-2"
//                   >
//                     <AiOutlineClose size={24} />
//                   </button>
                  
                  
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//   );
// };

// export default Header;
