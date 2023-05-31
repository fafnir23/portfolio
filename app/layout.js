import Footer from "@/components/Footer/page";
import "./globals.css";
import Navigation from "@/components/Navbar/page";
import bg from "@/public/images/bg.jpg"

export const metadata = {
    title: "A Agapito",
    description: "A Agapito portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-Sans bg-left bg-auto md:bg-contain md:bg-right-bottom bg-fixed bg-blend-difference" style={{ backgroundImage: `url(${bg.src})` }}>
                <Navigation />
                <div className="container mx-auto px-4 lg:px-10 xl:px-20 ">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
