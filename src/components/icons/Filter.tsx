import * as React from "react";

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 24" fill="none" {...props}>
      <g
        filter="url(#filter_svg__filter0_bdi_319_181)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.7 7a.75.75 0 00-.75-.75h-10a.75.75 0 000 1.5h10A.75.75 0 0023.7 7z"
          fill="url(#filter_svg__paint0_linear_319_181)"
        />
        <path
          d="M23.575 7a.625.625 0 00-.625-.625h-10a.625.625 0 100 1.25h10c.345 0 .625-.28.625-.625z"
          stroke="url(#filter_svg__paint1_linear_319_181)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter_svg__filter1_d_319_181)">
        <circle
          cx={2}
          cy={2}
          r={2}
          transform="matrix(-1 0 0 1 9 5)"
          fill="#2AEAE7"
        />
      </g>
      <g
        filter="url(#filter_svg__filter2_bdi_319_181)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.75 17a.75.75 0 00-.75-.75H5a.75.75 0 000 1.5h10a.75.75 0 00.75-.75z"
          fill="url(#filter_svg__paint2_linear_319_181)"
        />
        <path
          d="M15.625 17a.625.625 0 00-.625-.625H5a.625.625 0 100 1.25h10c.345 0 .625-.28.625-.625z"
          stroke="url(#filter_svg__paint3_linear_319_181)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter_svg__filter3_d_319_181)">
        <circle cx={21} cy={17} r={2} fill="#2AEAE7" />
      </g>
      <defs>
        <linearGradient
          id="filter_svg__paint0_linear_319_181"
          x1={27.438}
          y1={5.65}
          x2={26.638}
          y2={11.119}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="filter_svg__paint1_linear_319_181"
          x1={23.413}
          y1={6.475}
          x2={23.017}
          y2={9.071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="filter_svg__paint2_linear_319_181"
          x1={19.488}
          y1={15.65}
          x2={18.688}
          y2={21.119}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="filter_svg__paint3_linear_319_181"
          x1={15.463}
          y1={16.475}
          x2={15.067}
          y2={19.071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="filter_svg__filter0_bdi_319_181"
          x={8.2}
          y={2.25}
          width={19.5}
          height={9.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_181"
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
            in2="effect1_backgroundBlur_319_181"
            result="effect2_dropShadow_319_181"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_181"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_181" />
        </filter>
        <filter
          id="filter_svg__filter1_d_319_181"
          x={3}
          y={3}
          width={8}
          height={8}
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
            result="effect1_dropShadow_319_181"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_181"
            result="shape"
          />
        </filter>
        <filter
          id="filter_svg__filter2_bdi_319_181"
          x={0.25}
          y={12.25}
          width={19.5}
          height={9.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_181"
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
            in2="effect1_backgroundBlur_319_181"
            result="effect2_dropShadow_319_181"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_181"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_181" />
        </filter>
        <filter
          id="filter_svg__filter3_d_319_181"
          x={17}
          y={13}
          width={8}
          height={8}
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
            result="effect1_dropShadow_319_181"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_181"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgFilter;
