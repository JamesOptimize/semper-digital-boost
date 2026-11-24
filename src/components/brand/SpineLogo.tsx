/** Semper spine mark — vector redraw of the official logo. Inherits color via currentColor. */
export function SpineLogo({ className = "" }: { className?: string }) {
  const dots: [number, number, number][] = [
    [17.5, 6, 1.6], [18.6, 10, 1.7], [19.2, 14.2, 1.8], [19.2, 18.6, 1.8],
    [18.6, 23, 1.7], [17.6, 27.2, 1.6], [16.4, 31.2, 1.5],
  ];
  return (
    <svg viewBox="0 0 28 64" className={className} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M13.5 2c2.6 6 3.2 13 1.6 20.5-1.8 8.2-6.4 13.6-7.4 22-.7 6 .9 11.8 4.3 17.5-5.4-4.6-8-10.6-7.6-17.6.5-8.6 5.4-14.2 7.3-22.4C13.2 15 13.4 8.4 13.5 2z" />
      {dots.map(([cx, cy, r]) => <circle key={cy} cx={cx} cy={cy} r={r} />)}
    </svg>
  );
}
