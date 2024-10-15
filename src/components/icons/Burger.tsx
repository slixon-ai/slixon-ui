import * as React from "react";

function SvgBurger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 24" fill="none" {...props}>
      <g filter="url(#burger_svg__filter0_d_319_199)">
        <path
          d="M21 6H5"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#burger_svg__filter1_bdi_319_199)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.75 12a.75.75 0 01-.75.75H5a.75.75 0 010-1.5h16a.75.75 0 01.75.75z"
          fill="url(#burger_svg__paint0_linear_319_199)"
        />
        <path
          d="M21.625 12c0 .345-.28.625-.625.625H5a.625.625 0 110-1.25h16c.345 0 .625.28.625.625z"
          stroke="url(#burger_svg__paint1_linear_319_199)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#burger_svg__filter2_d_319_199)">
        <path
          d="M21 18H5"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="burger_svg__filter0_d_319_199"
          x={2.25}
          y={3.25}
          width={21.5}
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
            result="effect1_dropShadow_319_199"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_199"
            result="shape"
          />
        </filter>
        <filter
          id="burger_svg__filter1_bdi_319_199"
          x={0.25}
          y={7.25}
          width={25.5}
          height={9.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_199"
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
            in2="effect1_backgroundBlur_319_199"
            result="effect2_dropShadow_319_199"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_199"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_199" />
        </filter>
        <filter
          id="burger_svg__filter2_d_319_199"
          x={2.25}
          y={15.25}
          width={21.5}
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
            result="effect1_dropShadow_319_199"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_199"
            result="shape"
          />
        </filter>
        <linearGradient
          id="burger_svg__paint0_linear_319_199"
          x1={28.75}
          y1={10.762}
          x2={28.371}
          y2={15.716}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="burger_svg__paint1_linear_319_199"
          x1={19.125}
          y1={11.287}
          x2={18.959}
          y2={13.552}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgBurger;
