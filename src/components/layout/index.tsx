import Footer from "../footer";
import Header from "../header";

const Layout = ({
    children,
    showHeader = true,
    showFooter = true
}: {
    children: React.ReactNode;
    showHeader?: boolean;
    showFooter?: boolean;
}): JSX.Element => (
    <main className="h-full flex flex-col">
        {showHeader && <Header />}
        <div className="flex-1">
            {children}
        </div>
        {showFooter && <Footer />}

    </main >
);

export default Layout;