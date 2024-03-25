export default function Video({ src, caption, ratio }) {
  return (
    <div>
      <video
        playsInline
        loop
        controls
        className="mt-6 rounded-xl border dark:border-zinc-800"
        style={{ aspectRatio: ratio }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <p className="mt-2">{caption}</p>
    </div>
  );
}
