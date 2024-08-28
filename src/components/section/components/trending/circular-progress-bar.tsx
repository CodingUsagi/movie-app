export const CircularProgressBar = (props: { percentage: number }) => {
  let { percentage } = props;
  const circleWidth = 50;
  const radius = 20;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="8px"
          r={radius}
          className="fill-[#204529] stroke-[#204529]"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="3px"
          r={radius}
          className="fill-none stroke-green-500"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.4em"
          textAnchor="middle"
          className="text-sm font-semibold fill-white"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};
