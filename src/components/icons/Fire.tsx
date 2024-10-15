import * as React from "react";

function SvgFire(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 26" fill="none" {...props}>
      <g
        filter="url(#fire_svg__filter0_bdi_319_204)"
        shapeRendering="crispEdges"
      >
        <path
          d="M13.752 4.172c-.002-.076-.085-.126-.15-.087-3.466 2.07-3.402 7.264-3.36 8.205.003.071-.064.121-.129.09-.4-.188-1.547-.898-1.61-2.865-.003-.076-.085-.125-.15-.086C6.345 10.618 5 12.814 5 15.25 5 18.978 8.134 22 12 22s7-3.022 7-6.75c0-5.416-5.12-6.58-5.248-11.078z"
          fill="url(#fire_svg__paint0_linear_319_204)"
        />
        <path
          d="M10.728 8.641c.405-1.648 1.234-3.412 2.9-4.426.076 2.148 1.271 3.553 2.482 4.975l.219.257c1.293 1.527 2.546 3.143 2.546 5.803 0 3.655-3.074 6.625-6.875 6.625s-6.875-2.97-6.875-6.625c0-2.374 1.304-4.519 3.254-5.692.08 1.999 1.255 2.735 1.681 2.936.16.075.313-.057.307-.21a13.63 13.63 0 01.361-3.643z"
          stroke="url(#fire_svg__paint1_linear_319_204)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="fire_svg__paint0_linear_319_204"
          x1={0.45}
          y1={-3.2}
          x2={31.845}
          y2={18.579}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="fire_svg__paint1_linear_319_204"
          x1={5.35}
          y1={6.7}
          x2={20.061}
          y2={16.508}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="fire_svg__filter0_bdi_319_204"
          x={1}
          y={0.072}
          width={22}
          height={25.928}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_204"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_backgroundBlur_319_204"
            result="effect2_dropShadow_319_204"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_204"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.38 0" />
          <feBlend in2="shape" result="effect3_innerShadow_319_204" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgFire;
