import { useRef, useState } from "react";

type PortfolioVideoCardProps = {
  title: string;
  src?: string;
  poster?: string;
};

export function PortfolioVideoCard({ title, src, poster }: PortfolioVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  };

  return (
    <figure className="group">
      <div
        className="relative aspect-video overflow-hidden rounded-3xl bg-[#171310] shadow-[0_10px_30px_-15px_rgba(60,30,20,0.25)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:shadow-[0_25px_50px_-20px_rgba(60,30,20,0.35)]"
      >
        {src ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={src}
            poster={poster}
            muted
            playsInline
            preload="metadata"
            controls={playing}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1e18] via-[#171310] to-[#0f0a08]" />
        )}

        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Play ${title}`}
            className="absolute inset-0 flex items-center justify-center focus:outline-none"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-black/45 backdrop-blur-sm ring-1 ring-white/20 transition-all duration-300 group-hover:bg-black/60 group-hover:scale-110 md:h-20 md:w-20">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-7 w-7 fill-white md:h-9 md:w-9"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 text-center font-serif text-xl text-foreground md:text-2xl">
        {title}
      </figcaption>
    </figure>
  );
}
