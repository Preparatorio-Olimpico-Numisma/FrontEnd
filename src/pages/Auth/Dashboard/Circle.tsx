type circleProps = {
  color: string;
  time: number;
};

export function CircleSvg({ color, time }: circleProps) {
  return (
    <circle cx="200" cy="200" r="15" fill={color}>
      <animateMotion
        path="M 0, 0 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        dur={`${time}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}
