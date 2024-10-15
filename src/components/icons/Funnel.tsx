import * as React from "react";

function SvgFunnel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#funnel_svg__filter0_bdi_319_126)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 6a2 2 0 012-2h16a2 2 0 012 2v.818a3 3 0 01-.807 2.046l-5.655 6.06A2 2 0 0017 16.288v4.094a1 1 0 01-.553.894l-4 2A1 1 0 0111 22.382v-6.094a2 2 0 00-.538-1.364l-5.655-6.06A3 3 0 014 6.818V6z"
          fill="url(#funnel_svg__paint0_linear_319_126)"
        />
        <path
          d="M4.125 6c0-1.036.84-1.875 1.875-1.875h16c1.035 0 1.875.84 1.875 1.875v.818c0 .728-.276 1.429-.773 1.961l-5.655 6.06a2.125 2.125 0 00-.572 1.45v4.093a.875.875 0 01-.484.783l-4 2a.875.875 0 01-1.266-.783v-6.094c0-.538-.204-1.056-.572-1.45L4.898 8.78a2.875 2.875 0 01-.773-1.961V6z"
          stroke="url(#funnel_svg__paint1_linear_319_126)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.865 15.58a2.249 2.249 0 00-.115.708v4.094a.75.75 0 01-.415.671l-4 2a.75.75 0 01-1.085-.67v-3.529l5.615-3.275z"
        fill="#2AEAE7"
      />
      <defs>
        <linearGradient
          id="funnel_svg__paint0_linear_319_126"
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
          id="funnel_svg__paint1_linear_319_126"
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
          id="funnel_svg__filter0_bdi_319_126"
          x={0}
          y={0}
          width={28}
          height={27.383}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_126"
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
            in2="effect1_backgroundBlur_319_126"
            result="effect2_dropShadow_319_126"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_126"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_126" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgFunnel;
