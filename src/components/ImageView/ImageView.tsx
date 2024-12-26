import { CSSProperties, Key, useMemo, useState } from "react";

interface ImageViewProps {
  src: string;
  alt?: string;
  ariaHidden?: boolean;
  className?: string;
  style?: CSSProperties;
  key?: Key;
}

const ImageView = ({
  src,
  alt,
  ariaHidden,
  className,
  style,
  key,
}: ImageViewProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const placeholderUrl = useMemo(
    () => src.replace("/images/", "/placeholders/"),
    [src],
  );
  return (
    <div
      style={{
        position: "relative",
        ...style,
      }}
      className={className}
    >
      <img
        key={key ?? placeholderUrl}
        src={placeholderUrl}
        alt={alt ?? placeholderUrl}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: loaded ? "none" : "blur(10px)",
          transition: "filter 0.3s ease-out",
        }}
        aria-hidden={ariaHidden}
      />
      <img
        key={key ?? src}
        src={src}
        alt={alt ?? src}
        onLoad={() => setLoaded(true)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
        aria-hidden={ariaHidden}
      />
    </div>
  );
};

export default ImageView;
