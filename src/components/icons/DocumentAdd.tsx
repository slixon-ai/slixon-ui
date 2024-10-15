import * as React from "react";

function SvgDocumentAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 29 30" fill="none" {...props}>
      <g
        filter="url(#document_add_svg__filter0_bdi_319_109)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 8a4 4 0 014-4H14.063a2 2 0 011.537.72l3.936 4.724a2 2 0 01.464 1.28V20a4 4 0 01-4 4H8a4 4 0 01-4-4V8z"
          fill="url(#document_add_svg__paint0_linear_319_109)"
        />
        <path
          d="M4.125 8A3.875 3.875 0 018 4.125H14.063c.557 0 1.084.247 1.44.675l3.937 4.724c.281.337.435.762.435 1.2V20A3.875 3.875 0 0116 23.875H8A3.875 3.875 0 014.125 20V8z"
          stroke="url(#document_add_svg__paint1_linear_319_109)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#document_add_svg__filter1_bdi_319_109)"
        shapeRendering="crispEdges"
      >
        <path
          d="M18.25 24a1.75 1.75 0 103.5 0v-1.25H23a1.75 1.75 0 100-3.5h-1.25V18a1.75 1.75 0 10-3.5 0v1.25H17a1.75 1.75 0 100 3.5h1.25V24z"
          fill="url(#document_add_svg__paint2_linear_319_109)"
        />
        <path
          d="M21.75 22.625a.125.125 0 00-.125.125V24a1.625 1.625 0 11-3.25 0v-1.25a.125.125 0 00-.125-.125H17a1.625 1.625 0 110-3.25h1.25a.125.125 0 00.125-.125V18a1.625 1.625 0 113.25 0v1.25c0 .069.056.125.125.125H23a1.625 1.625 0 110 3.25h-1.25z"
          stroke="url(#document_add_svg__paint3_linear_319_109)"
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
        d="M17 21h6M20 18v6"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="document_add_svg__paint0_linear_319_109"
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
          id="document_add_svg__paint1_linear_319_109"
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
          id="document_add_svg__paint2_linear_319_109"
          x1={12.162}
          y1={12.45}
          x2={29.738}
          y2={28.125}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="document_add_svg__paint3_linear_319_109"
          x1={15.488}
          y1={17.675}
          x2={23.8}
          y2={24.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="document_add_svg__filter0_bdi_319_109"
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
            result="effect1_backgroundBlur_319_109"
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
            in2="effect1_backgroundBlur_319_109"
            result="effect2_dropShadow_319_109"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_109"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_109" />
        </filter>
        <filter
          id="document_add_svg__filter1_bdi_319_109"
          x={11.25}
          y={12.25}
          width={17.5}
          height={17.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_109"
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
            in2="effect1_backgroundBlur_319_109"
            result="effect2_dropShadow_319_109"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_109"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_109" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgDocumentAdd;
