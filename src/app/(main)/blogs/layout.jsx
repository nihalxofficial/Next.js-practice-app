// app/blogs/layout.js
export const metadata = {
  title: "Blogs",
  description: "All blog posts",
};


const layout = ({children}) => {
    return (
        <>
        {children}
        </>
    );
};

export default layout;