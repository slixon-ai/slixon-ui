import * as React from "react";

function SvgUpload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 29 26" fill="none" {...props}>
      <g
        filter="url(#upload_svg__filter0_bdi_319_190)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4.5 12.5v5a4 4 0 004 4h12a4 4 0 004-4v-5a4 4 0 00-4-4h-12a4 4 0 00-4 4z"
          fill="url(#upload_svg__paint0_linear_319_190)"
        />
        <path
          d="M4.625 17.5v-5A3.875 3.875 0 018.5 8.625h12a3.875 3.875 0 013.875 3.875v5a3.875 3.875 0 01-3.875 3.875h-12A3.875 3.875 0 014.625 17.5z"
          stroke="url(#upload_svg__paint1_linear_319_190)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#upload_svg__filter1_d_319_190)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <path d="M17.5 5.5l-2.293-2.293a1 1 0 00-1.414 0L11.5 5.5M14.5 3.5v12" />
      </g>
      <defs>
        <linearGradient
          id="upload_svg__paint0_linear_319_190"
          x1={-3.5}
          y1={25.725}
          x2={15.236}
          y2={-6.594}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="upload_svg__paint1_linear_319_190"
          x1={7.5}
          y1={21.175}
          x2={15.889}
          y2={6.117}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="upload_svg__filter0_bdi_319_190"
          x={0.5}
          y={4.5}
          width={28}
          height={21}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_190"
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
            in2="effect1_backgroundBlur_319_190"
            result="effect2_dropShadow_319_190"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_190"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_190" />
        </filter>
        <filter
          id="upload_svg__filter1_d_319_190"
          x={8.75}
          y={0.164}
          width={11.5}
          height={18.086}
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
            result="effect1_dropShadow_319_190"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_190"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgUpload;
