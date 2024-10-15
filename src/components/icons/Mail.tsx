import * as React from "react";

function SvgMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 24" fill="none" {...props}>
      <g
        filter="url(#mail_svg__filter0_bdi_319_157)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4}
          width={20}
          height={16}
          rx={5}
          fill="url(#mail_svg__paint0_linear_319_157)"
        />
        <rect
          x={4.125}
          y={4.125}
          width={19.75}
          height={15.75}
          rx={4.875}
          stroke="url(#mail_svg__paint1_linear_319_157)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#mail_svg__filter1_bdi_319_157)">
        <path
          d="M8 9l4.8 3.6a2 2 0 002.4 0L20 9"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <linearGradient
          id="mail_svg__paint0_linear_319_157"
          x1={-2.5}
          y1={-2.4}
          x2={27.119}
          y2={30.621}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="mail_svg__paint1_linear_319_157"
          x1={4.5}
          y1={6.4}
          x2={18.633}
          y2={21.543}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="mail_svg__filter0_bdi_319_157"
          x={0}
          y={0}
          width={28}
          height={24}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_157"
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
            in2="effect1_backgroundBlur_319_157"
            result="effect2_dropShadow_319_157"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_157"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_157" />
        </filter>
        <filter
          id="mail_svg__filter1_bdi_319_157"
          x={3.25}
          y={4.25}
          width={21.5}
          height={13.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_157"
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
            in2="effect1_backgroundBlur_319_157"
            result="effect2_dropShadow_319_157"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_157"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_157" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgMail;
