import * as React from "react";

function SvgFolder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 26" fill="none" {...props}>
      <g
        filter="url(#folder_svg__filter0_bdi_319_102)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 9a5 5 0 015-5h1.956a3 3 0 012.441 1.256l.706.988a3 3 0 002.44 1.256H19a5 5 0 015 5V17a5 5 0 01-5 5H9a5 5 0 01-5-5V9z"
          fill="url(#folder_svg__paint0_linear_319_102)"
        />
        <path
          d="M4.125 9A4.875 4.875 0 019 4.125h1.956c.929 0 1.8.448 2.34 1.204l.705.987a3.125 3.125 0 002.543 1.309H19a4.875 4.875 0 014.875 4.875V17A4.875 4.875 0 0119 21.875H9A4.875 4.875 0 014.125 17V9z"
          stroke="url(#folder_svg__paint1_linear_319_102)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.971 9.462A5 5 0 0018 5h-4.808c.073.081.141.167.205.256l.706.988a3 3 0 002.44 1.256H19c1.619 0 3.058.77 3.971 1.962z"
        fill="#2AEAE7"
      />
      <g filter="url(#folder_svg__filter1_d_319_102)">
        <path
          d="M14 17.5h6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <linearGradient
          id="folder_svg__paint0_linear_319_102"
          x1={-2.5}
          y1={-3.2}
          x2={31.017}
          y2={30.015}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="folder_svg__paint1_linear_319_102"
          x1={4.5}
          y1={6.7}
          x2={20.419}
          y2={21.86}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="folder_svg__filter0_bdi_319_102"
          x={0}
          y={0}
          width={28}
          height={26}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_102"
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
            in2="effect1_backgroundBlur_319_102"
            result="effect2_dropShadow_319_102"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_102"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_102" />
        </filter>
        <filter
          id="folder_svg__filter1_d_319_102"
          x={11.25}
          y={14.75}
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
            result="effect1_dropShadow_319_102"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_102"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgFolder;
