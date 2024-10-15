import * as React from "react";

function SvgDocumentDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 29 28" fill="none" {...props}>
      <g
        filter="url(#document_delete_svg__filter0_bdi_319_110)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 8a4 4 0 014-4H14.063a2 2 0 011.537.72l3.936 4.724a2 2 0 01.464 1.28V20a4 4 0 01-4 4H8a4 4 0 01-4-4V8z"
          fill="url(#document_delete_svg__paint0_linear_319_110)"
        />
        <path
          d="M4.125 8A3.875 3.875 0 018 4.125H14.063c.557 0 1.084.247 1.44.675l3.937 4.724c.281.337.435.762.435 1.2V20A3.875 3.875 0 0116 23.875H8A3.875 3.875 0 014.125 20V8z"
          stroke="url(#document_delete_svg__paint1_linear_319_110)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#document_delete_svg__filter1_bdi_319_110)"
        shapeRendering="crispEdges"
      >
        <path
          d="M21.75 22.75H23a1.75 1.75 0 100-3.5h-6a1.75 1.75 0 100 3.5h4.75z"
          fill="url(#document_delete_svg__paint2_linear_319_110)"
        />
        <path
          d="M23 22.625h-6a1.625 1.625 0 110-3.25h6a1.625 1.625 0 110 3.25z"
          stroke="url(#document_delete_svg__paint3_linear_319_110)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4.522V8a2 2 0 002 2h2.593a1.751 1.751 0 00-.249-.396L15.408 4.88A1.748 1.748 0 0015 4.522z"
        fill="#2AEAE7"
      />
      <path
        d="M17 21h6"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="document_delete_svg__paint0_linear_319_110"
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
          id="document_delete_svg__paint1_linear_319_110"
          x1={4.4}
          y1={7}
          x2={20.919}
          y2={18.327}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="document_delete_svg__paint2_linear_319_110"
          x1={12.162}
          y1={17.85}
          x2={16.762}
          y2={28.985}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="document_delete_svg__paint3_linear_319_110"
          x1={15.488}
          y1={19.775}
          x2={17.736}
          y2={25.006}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="document_delete_svg__filter0_bdi_319_110"
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
            result="effect1_backgroundBlur_319_110"
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
            in2="effect1_backgroundBlur_319_110"
            result="effect2_dropShadow_319_110"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_110"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_110" />
        </filter>
        <filter
          id="document_delete_svg__filter1_bdi_319_110"
          x={11.25}
          y={15.25}
          width={17.5}
          height={11.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_110"
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
            in2="effect1_backgroundBlur_319_110"
            result="effect2_dropShadow_319_110"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_110"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_110" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgDocumentDelete;
