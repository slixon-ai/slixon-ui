import * as React from "react";

function SvgMoreCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#more_circle_svg__filter0_bdi_319_149)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4}
          width={20}
          height={20}
          rx={10}
          fill="url(#more_circle_svg__paint0_linear_319_149)"
        />
        <rect
          x={4.125}
          y={4.125}
          width={19.75}
          height={19.75}
          rx={9.875}
          stroke="url(#more_circle_svg__paint1_linear_319_149)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#more_circle_svg__filter1_d_319_149)" fill="#2AEAE7">
        <circle cx={9.05} cy={14.05} r={1.25} />
        <circle cx={14.05} cy={14.05} r={1.25} />
        <circle cx={19.05} cy={14.05} r={1.25} />
      </g>
      <defs>
        <linearGradient
          id="more_circle_svg__paint0_linear_319_149"
          x1={-2.5}
          y1={-4}
          x2={34.5}
          y2={29}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="more_circle_svg__paint1_linear_319_149"
          x1={4.5}
          y1={7}
          x2={22}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="more_circle_svg__filter0_bdi_319_149"
          x={0}
          y={0}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_149"
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
            in2="effect1_backgroundBlur_319_149"
            result="effect2_dropShadow_319_149"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_149"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_149" />
        </filter>
        <filter
          id="more_circle_svg__filter1_d_319_149"
          x={5.8}
          y={10.8}
          width={16.5}
          height={6.5}
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
            result="effect1_dropShadow_319_149"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_149"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgMoreCircle;
