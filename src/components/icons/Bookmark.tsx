import * as React from "react";

function SvgBookmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 27" fill="none" {...props}>
      <g
        filter="url(#bookmark_svg__filter0_bdi_319_111)"
        shapeRendering="crispEdges"
      >
        <path
          d="M5 8a4 4 0 014-4h6a4 4 0 014 4v13.168a1 1 0 01-1.54.841l-4.379-2.814a2 2 0 00-2.162 0L6.54 22.01A1 1 0 015 21.17V8z"
          fill="url(#bookmark_svg__paint0_linear_319_111)"
        />
        <path
          d="M5.125 8A3.875 3.875 0 019 4.125h6A3.875 3.875 0 0118.875 8v13.168a.875.875 0 01-1.348.736l-4.378-2.814c-.7-.45-1.598-.45-2.298 0l-4.378 2.814a.875.875 0 01-1.348-.736V8z"
          stroke="url(#bookmark_svg__paint1_linear_319_111)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#bookmark_svg__filter1_d_319_111)">
        <path
          d="M9 7.5h6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#bookmark_svg__filter2_d_319_111)">
        <path
          d="M11.524 10.463a.5.5 0 01.952 0l.534 1.646a.5.5 0 00.476.346h1.73a.5.5 0 01.294.904l-1.4 1.018a.5.5 0 00-.181.559l.534 1.646a.5.5 0 01-.769.559l-1.4-1.018a.5.5 0 00-.588 0l-1.4 1.018a.5.5 0 01-.77-.56l.535-1.645a.5.5 0 00-.181-.56l-1.4-1.017a.5.5 0 01.294-.904h1.73a.5.5 0 00.476-.346l.534-1.646z"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <filter
          id="bookmark_svg__filter0_bdi_319_111"
          x={1}
          y={0}
          width={22}
          height={26.17}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_111"
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
            in2="effect1_backgroundBlur_319_111"
            result="effect2_dropShadow_319_111"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_111"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_111" />
        </filter>
        <filter
          id="bookmark_svg__filter1_d_319_111"
          x={6.25}
          y={4.75}
          width={11.5}
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
            result="effect1_dropShadow_319_111"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_111"
            result="shape"
          />
        </filter>
        <filter
          id="bookmark_svg__filter2_d_319_111"
          x={6.283}
          y={8.118}
          width={11.435}
          height={11.12}
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
            result="effect1_dropShadow_319_111"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_111"
            result="shape"
          />
        </filter>
        <linearGradient
          id="bookmark_svg__paint0_linear_319_111"
          x1={0.45}
          y1={-3.6}
          x2={32.926}
          y2={17.743}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="bookmark_svg__paint1_linear_319_111"
          x1={5.35}
          y1={6.85}
          x2={20.541}
          y2={16.444}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgBookmark;
