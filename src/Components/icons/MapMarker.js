export default function MapMarker() {
  return (
    <svg width={24} height={24} fill="none">
      <path
        clipRule="evenodd"
        d="M12 21.19l.721-.814a58.743 58.743 0 002.21-2.672l.54-.713c2.257-3.042 3.386-5.454 3.386-7.238 0-3.809-3.07-6.896-6.857-6.896-3.787 0-6.857 3.087-6.857 6.896 0 1.784 1.128 4.196 3.386 7.238l.54.713A62.663 62.663 0 0012 21.19z"
        stroke="#8A8A8A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.571a2.857 2.857 0 100-5.714 2.857 2.857 0 000 5.714z"
        stroke="#8A8A8A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
