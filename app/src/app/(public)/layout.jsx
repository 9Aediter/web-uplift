import "@/style/tailwind.css";
import { ThemeProvider } from "next-themes";

//Title and description
export const metadata = {
  title: "Uplift",
  description: "Uplift yourr business with it solution",
  icons: {
    icon: "/img/logo.svg",
  },
};

// Main Layout Second Version
export default function RootLayout({ children }) {
  console.log("Rendering Root Layout");
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            
            {children}
            
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Main Layout First Version
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider attribute="class">
//           {children.type.layout ? (
//             // Render Nested Layout (local layout)
//             children
//           ) : (
//             // Render Global Layout
//             <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
//               <Navbar />
//               {children}
//               <Scroll />
//             </main>
//           )}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
