import * as React from "react";

function SvgDocument(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 28" fill="none" {...props}>
      <g
        filter="url(#document_svg__filter0_bdi_319_108)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 8a4 4 0 014-4H14.063a2 2 0 011.537.72l3.936 4.724a2 2 0 01.464 1.28V20a4 4 0 01-4 4H8a4 4 0 01-4-4V8z"
          fill="url(#document_svg__paint0_linear_319_108)"
        />
        <path
          d="M4.125 8A3.875 3.875 0 018 4.125H14.063c.557 0 1.084.247 1.44.675l3.937 4.724c.281.337.435.762.435 1.2V20A3.875 3.875 0 0116 23.875H8A3.875 3.875 0 014.125 20V8z"
          stroke="url(#document_svg__paint1_linear_319_108)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4.522V8a2 2 0 002 2h2.593a1.751 1.751 0 00-.249-.396L15.408 4.88A1.748 1.748 0 0015 4.522z"
        fill="#2AEAE7"
      />
      <g filter="url(#document_svg__filter1_d_319_108)">
        <path
          d="M8 14h8"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#document_svg__filter2_d_319_108)">
        <path
          d="M8 19h4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="document_svg__filter0_bdi_319_108"
          x={0}
          y={0}
          width={24}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_108"
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
            in2="effect1_backgroundBlur_319_108"
            result="effect2_dropShadow_319_108"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_108"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_108" />
        </filter>
        <filter
          id="document_svg__filter1_d_319_108"
          x={5.25}
          y={11.25}
          width={13.5}
          height={5.5}
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
            result="effect1_dropShadow_319_108"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_108"
            result="shape"
          />
        </filter>
        <filter
          id="document_svg__filter2_d_319_108"
          x={5.25}
          y={16.25}
          width={9.5}
          height={5.5}
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
            result="effect1_dropShadow_319_108"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_108"
            result="shape"
          />
        </filter>
        <linearGradient
          id="document_svg__paint0_linear_319_108"
          x1={-1.2}
          y1={-4}
          x2={34.017}
          y2={21.128}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="document_svg__paint1_linear_319_108"
          x1={4.4}
          y1={7}
          x2={20.919}
          y2={18.327}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgDocument;
