export default function ProfilePictureComponent({ imageUrl, sizeClass = "w-48 h-48" }) {
    const src = imageUrl;

    return (
        <div className="relative flex items-center justify-center select-none group">
            {/* Clean, high-end circular frame with a fine accent border */}
            <div className={`${sizeClass} rounded-full overflow-hidden border border-ef-accent/30 p-1.5 bg-ef-card/40 transition-all duration-500 group-hover:border-ef-accent/80 group-hover:shadow-[0_0_20px_rgba(255,185,0,0.15)]`}>
                <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                        src={src}
                        alt="Profile Avatar"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Subtle warm vignette filter for visual depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(transparent_70%,rgba(0,0,0,0.35))] pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
