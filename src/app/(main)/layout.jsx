// app/(main)/layout.js

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PostProvider from "../context/postContext";

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";


export default function MainLayout({ children }) {
  return (
    <>
    <PostProvider>
        <Navbar />
        {children}
        <Footer />
    </PostProvider>
    {/* <Navbar />
        {children}
    <Footer /> */}
    </>
  );
}