/**
 * PillButtonComponent
 * 
 * Renders a pill-shaped action button in the Arknights Endfield aesthetic.
 * You can customize the button text dynamically via props so it can be reused anywhere in your App.jsx.
 * 
 * Props:
 * - text: The label displayed on the button (e.g. "SEE MORE")
 * - onClick: Trigger function when the user clicks the button
 * - type: Standard HTML button type (defaults to "button")
 */
export default function PillButtonComponent({ text, onClick, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="group relative flex items-center justify-center font-mono text-xs md:text-sm px-6 py-2.5 rounded-full border border-ef-accent/50 text-ef-accent bg-ef-bg/30 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-300 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(93,169,236,0.3)] select-none active:scale-95"
        >
            <div className="absolute inset-0 w-0 bg-linear-to-r from-ef-accent/20 to-ef-accent/5 transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />

            <span className="mr-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">[</span>

            {/* Dynamic text injected via React props */}
            <span className=" uppercase font-semibold">{text}</span>

            {/* Closing bracket and tech arrow index */}
            <span className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">&gt; ]</span>
        </button>
    );
}
