import * as React from "react";

function SvgCallMissed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <g
        filter="url(#call_missed_svg__filter0_bdi_319_214)"
        shapeRendering="crispEdges"
      >
        <path
          d="M20.062 21.218c-1.954 1.955-6.96.118-11.179-4.101-4.22-4.22-6.056-9.225-4.101-11.18l1.286-1.286c.889-.888 2.353-.865 3.27.053l1.993 1.993c.917.917.94 2.38.052 3.27l-.276.275a1.333 1.333 0 00-.08 1.794c.429.52.892 1.04 1.395 1.542.502.503 1.021.966 1.542 1.396.54.446 1.314.399 1.793-.081l.277-.276c.888-.889 2.352-.865 3.27.052l1.992 1.993c.918.918.941 2.381.053 3.27l-1.287 1.286z"
          fill="url(#call_missed_svg__paint0_linear_319_214)"
        />
        <path
          d="M19.974 21.13c-.922.922-2.596.974-4.609.235-2.002-.734-4.293-2.237-6.393-4.337-2.1-2.1-3.603-4.39-4.337-6.393-.739-2.013-.687-3.687.235-4.609L6.157 4.74c.837-.837 2.221-.82 3.092.052l1.993 1.993c.872.871.89 2.256.053 3.093l-.276.276a1.457 1.457 0 00-.09 1.961c.433.524.899 1.046 1.405 1.551.505.506 1.027.972 1.55 1.404.59.487 1.437.436 1.962-.089l.276-.276c.837-.837 2.222-.819 3.093.053l1.993 1.993c.871.87.89 2.255.052 3.092l-1.286 1.287z"
          stroke="url(#call_missed_svg__paint1_linear_319_214)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#call_missed_svg__filter1_d_319_214)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 9l5-5M17 4l5 5" />
      </g>
      <defs>
        <linearGradient
          id="call_missed_svg__paint0_linear_319_214"
          x1={-1.85}
          y1={-3.2}
          x2={31.45}
          y2={26.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="call_missed_svg__paint1_linear_319_214"
          x1={4.45}
          y1={6.7}
          x2={20.2}
          y2={20.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="call_missed_svg__filter0_bdi_319_214"
          x={0}
          y={0}
          width={26}
          height={26}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_214"
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
            in2="effect1_backgroundBlur_319_214"
            result="effect2_dropShadow_319_214"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_214"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_214" />
        </filter>
        <filter
          id="call_missed_svg__filter1_d_319_214"
          x={14.25}
          y={1.25}
          width={10.5}
          height={10.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.35 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_319_214"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_214"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCallMissed;
