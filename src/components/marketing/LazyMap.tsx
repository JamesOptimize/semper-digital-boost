import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

interface LazyMapProps {
  className?: string;
  title?: string;
}

export function LazyMap({ className, title = "Semper Chiropractic location" }: LazyMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current || show) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [show]);

  return (
    <div ref={ref} className={className ?? "h-full w-full bg-muted"}>
      {show && (
        <iframe
          title={title}
          src={SITE.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      )}
    </div>
  );
}
