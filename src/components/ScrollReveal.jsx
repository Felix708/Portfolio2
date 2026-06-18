import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * 
 * Automatically detects when this component scrolls into the viewport
 * and triggers a clean, smooth fade and translate ("float up/down") transition.
 * 
 * Props:
 * - children: The React elements to animate
 * - direction: 'up' (floats from bottom to top) or 'down' (floats from top to bottom)
 * - delay: Wait time in milliseconds before starting the animation (great for staggering items in a list or grid)
 */
export default function ScrollReveal({ children, direction = 'up', delay = 0 }) {
    // State to track if the element has scrolled into view
    const [isVisible, setIsVisible] = useState(false);
    
    // Reference to the DOM node we want to observe
    const elementRef = useRef(null);

    useEffect(() => {
        // Create an Intersection Observer to watch our element
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the element crosses our threshold (is 10% visible in the viewport)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    
                    // Once visible, we unobserve to prevent repeated animations when scrolling up and down
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        // Start observing the element
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        // Clean up the observer on component unmount
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    // Helper to determine the starting offset class based on the requested float direction
    const getDirectionClass = () => {
        if (direction === 'up') return 'translate-y-8'; // Start 8 units lower (floats up)
        if (direction === 'down') return '-translate-y-8'; // Start 8 units higher (floats down)
        return 'translate-y-8';
    };

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-1000 ease-out transform ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : `opacity-0 ${getDirectionClass()}`
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
