interface ResponsiveImageProps {
  avifSrcSet: string;
  webpSrcSet: string;
  jpgSrcSet: string;
  fallbackSrc: string;
  sizes: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export function ResponsiveImage({
  avifSrcSet,
  webpSrcSet,
  jpgSrcSet,
  fallbackSrc,
  sizes,
  alt,
  width,
  height,
  className,
  imgClassName,
  loading = "lazy",
  fetchPriority,
}: ResponsiveImageProps) {
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={fallbackSrc}
        srcSet={jpgSrcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={imgClassName}
      />
    </picture>
  );
}
