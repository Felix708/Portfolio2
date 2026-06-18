/**
 * ProjectCardComponent
 * 
 * Renders a high-tech, rounded-edge card styled in the Arknights Endfield aesthetic.
 * This component handles only the visual styling and relies completely on props,
 * making it fully dynamic and reusable for both projects and certificates.
 * 
 * Props:
 * - title: The name of the project or certificate (string)
 * - description: A brief summary or bullet points explaining it (string)
 * - image: The URL or local asset filepath for the screenshot or image (string)
 * - link: Optional URL to open when clicked (defaults to "#" which prevents redirection)
 */
export default function ProjectCardComponent({ title, description, image, link = "#" }) {
    // A nice fallback futuristic image if no custom image is supplied via props
    const fallbackImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
    const cardImage = image || fallbackImage;

    return (
        <a
            href={link}
            target={link !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group block relative bg-ef-card/40 border border-white/5 hover:border-ef-accent/40 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:shadow-[0_10px_30px_rgba(93,169,236,0.12)] hover:-translate-y-1 select-none"
        >
            {/* 1. Header Technical Tag Line 
               Gives that precise, computerized file archive system feel */}
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/5 bg-ef-bg/40 font-mono text-[9px] text-ef-muted group-hover:text-ef-accent transition-colors duration-300">
                <span className="tracking-wider">SYS.LOG // ARCHIVE_DATA</span>
                <span className="font-semibold ">VERIFIED</span>
            </div>

            {/* 2. Image Screenshot Container (Rounded border but not a circle) */}
            <div className="relative h-44 w-full overflow-hidden bg-black/40">
                <img
                    src={cardImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* 3. High-Tech Bottom Fading Gradients & Sci-fi Overlays on Image */}
                <div className="absolute inset-0 bg-linear-to-t from-ef-bg via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-ef-accent/5 mix-blend-overlay pointer-events-none" />
            </div>

            {/* 4. Text Content and Metadata Area */}
            <div className="p-5 flex flex-col justify-between">
                <div>
                    {/* Reusable Project / Certificate Title */}
                    <h3 className="font-mono text-sm md:text-base font-semibold text-white tracking-wide group-hover:text-ef-accent transition-colors duration-300 mb-2 truncate">
                        {title}
                    </h3>

                    {/* Reusable Description */}
                    <p className="text-xs text-ef-muted leading-relaxed mb-4 line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* 5. Sleek Technical Action Bar */}
                <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-auto font-mono text-[9px]">
                    <span className="text-ef-muted uppercase group-hover:text-white transition-colors duration-300">
                        Status: Complete //
                    </span>
                </div>
            </div>
        </a>
    );
}
