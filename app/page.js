import Contact from "@/components/Contact/page";
import Introduction from "@/components/Introduction";
import Project from "@/components/Projects/page";
import Skills from "@/components/Skills/page";

export default function Home() {
    return (
        <main className="min-h-screen mb-40">
            <article>
                <Introduction />
            </article>
            <section className="mt-40 scroll-my-24" id="project" >
                <Project />
            </section>
            <section className="mt-20 scroll-my-24" id="technologies">
                <Skills />
            </section>
            <section className="mt-20 scroll-my-24" id="contact">
                <Contact />
            </section>
        </main>
    );
}
