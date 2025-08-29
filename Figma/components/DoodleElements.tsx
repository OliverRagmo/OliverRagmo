export const DoodleArrow = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg
    className={`inline-block ${className}`}
    viewBox="0 0 100 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 20C20 18 30 22 40 20C50 18 60 22 70 20C75 19 80 21 85 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M80 16L85 20L80 24"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const DoodleUnderline = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg
    className={`absolute bottom-0 left-0 w-full ${className}`}
    viewBox="0 0 200 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5C20 3 40 7 60 5C80 3 100 7 120 5C140 3 160 7 180 5C185 4.5 190 5.5 195 5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const DoodleCircle = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg
    className={`${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 10C70 10 85 20 90 35C92 50 85 65 75 75C65 85 50 90 35 85C20 80 10 65 8 50C6 35 15 20 30 12C35 10 42 8 50 10Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const DoodleStar = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg
    className={`${className}`}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 5L35 20L50 25L35 30L30 45L25 30L10 25L25 20L30 5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const DoodleHeart = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg
    className={`${className}`}
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 70C45 65 15 40 15 25C15 15 25 5 35 10C40 12 45 15 50 20C55 15 60 12 65 10C75 5 85 15 85 25C85 40 55 65 50 70Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);