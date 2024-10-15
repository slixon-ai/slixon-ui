import * as React from "react";

function SvgGift(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <g
        filter="url(#gift_svg__filter0_bdi_319_183)"
        shapeRendering="crispEdges"
      >
        <path
          d="M21 18v-7H5v7a4 4 0 004 4h8a4 4 0 004-4z"
          fill="url(#gift_svg__paint0_linear_319_183)"
        />
        <path
          d="M15.5 11.125h5.375V18A3.875 3.875 0 0117 21.875H9A3.875 3.875 0 015.125 18v-6.875H15.5z"
          stroke="url(#gift_svg__paint1_linear_319_183)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#gift_svg__filter1_bdi_319_183)"
        shapeRendering="crispEdges"
      >
        <path
          d="M20.5 6h-15A1.5 1.5 0 004 7.5v3A1.5 1.5 0 005.5 12h15a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0020.5 6z"
          fill="url(#gift_svg__paint2_linear_319_183)"
        />
        <path
          d="M5.5 6.125h15c.76 0 1.375.616 1.375 1.375v3c0 .76-.616 1.375-1.375 1.375h-15c-.76 0-1.375-.616-1.375-1.375v-3c0-.76.616-1.375 1.375-1.375z"
          stroke="url(#gift_svg__paint3_linear_319_183)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        d="M13 4.5A2.5 2.5 0 0115.5 2h.5a2 2 0 012 2v0a2 2 0 01-2 2h-3V4.5zM13 4.5A2.5 2.5 0 0010.5 2H10a2 2 0 00-2 2v0a2 2 0 002 2h3V4.5z"
        stroke="#2AEAE7"
        strokeWidth={1.5}
      />
      <path d="M15.5 6v16h-5V6h5z" fill="#2AEAE7" />
      <defs>
        <linearGradient
          id="gift_svg__paint0_linear_319_183"
          x1={-0.2}
          y1={6.6}
          x2={19.608}
          y2={32.298}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="gift_svg__paint1_linear_319_183"
          x1={5.4}
          y1={12.65}
          x2={14.907}
          y2={24.503}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="gift_svg__paint2_linear_319_183"
          x1={-1.85}
          y1={3.6}
          x2={5.478}
          y2={23.207}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="gift_svg__paint3_linear_319_183"
          x1={4.45}
          y1={6.9}
          x2={8.039}
          y2={16.129}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="gift_svg__filter0_bdi_319_183"
          x={1}
          y={7}
          width={24}
          height={19}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_183"
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
            in2="effect1_backgroundBlur_319_183"
            result="effect2_dropShadow_319_183"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_183"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_183" />
        </filter>
        <filter
          id="gift_svg__filter1_bdi_319_183"
          x={0}
          y={2}
          width={26}
          height={14}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_183"
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
            in2="effect1_backgroundBlur_319_183"
            result="effect2_dropShadow_319_183"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_183"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_183" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgGift;
