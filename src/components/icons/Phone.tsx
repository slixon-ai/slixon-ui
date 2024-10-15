import * as React from "react";

function SvgPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 28" fill="none" {...props}>
      <g
        filter="url(#phone_svg__filter0_bdi_319_210)"
        shapeRendering="crispEdges"
      >
        <path
          d="M13.993 5.274a1.25 1.25 0 001.136-.742c.12-.265.364-.506.645-.432A3.001 3.001 0 0118 7v14a3 3 0 01-3 3H9a3 3 0 01-3-3V7c0-1.381.933-2.544 2.203-2.893.284-.079.532.169.656.436.2.428.637.731 1.134.731h4z"
          fill="url(#phone_svg__paint0_linear_319_210)"
        />
        <path
          d="M13.993 5.399c.56 0 1.034-.34 1.25-.815a.78.78 0 01.224-.295c.089-.068.18-.093.275-.068A2.876 2.876 0 0117.875 7v14A2.875 2.875 0 0115 23.875H9A2.875 2.875 0 016.125 21V7c0-1.324.894-2.438 2.111-2.773.095-.026.189 0 .28.068.092.07.174.18.23.3.22.47.698.804 1.247.804h4z"
          stroke="url(#phone_svg__paint1_linear_319_210)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="phone_svg__paint0_linear_319_210"
          x1={2.1}
          y1={-3.987}
          x2={33.079}
          y2={12.599}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="phone_svg__paint1_linear_319_210"
          x1={6.3}
          y1={7.008}
          x2={20.701}
          y2={14.418}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="phone_svg__filter0_bdi_319_210"
          x={2}
          y={0.086}
          width={20}
          height={27.913}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_210"
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
            in2="effect1_backgroundBlur_319_210"
            result="effect2_dropShadow_319_210"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_210"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_210" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgPhone;
