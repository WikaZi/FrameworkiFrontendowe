import Image from "next/image";
import LineChar from "./_components/LineChar";

export default function Home() {
  const size = 1024;
  return (
    <div className="mx-6 my-6">
      <svg viewBox="0 0 1024 1024" width="100" height="100">
        <line x1="50" y1="0" x2={size}  y2={size} strokeWidth="50" stroke="purple"> </line>     /zmienne w klamrowych wartosciach
        <circle cx={size/2} cy={size/2} r={size/2 - 5} strokeWidth="10" stroke="black" fill="none"> </circle>     /zmienne w klamrowych wartosciach
        <rect x={size/1.5} y1={size/1.5} width="122" height="512" strokeWidth="122"  stroke="orange" fill="none" strokeLinejoin="round" />
        <polygon points="1000,100 1500, 1900 500, 190" stroke="purple"  /> /trojkat
        <text x="100" y="512"  fill="green" fontSize="120" fontFamily="Verdana" >Hello</text>
        <polyline points="100 100 340 100 567 123" fill="none" strokeWidth="10" stroke="red" />
      </svg>
      <LineChar data={[15,2,3,8,5,6,12,7,8,2]} />
    </div>
  );
}
