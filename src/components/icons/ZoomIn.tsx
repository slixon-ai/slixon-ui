import * as React from "react";

function SvgZoomIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <g
        filter="url(#zoom_in_svg__filter0_bdi_319_100)"
        shapeRendering="crispEdges"
      >
        <circle
          cx={12}
          cy={12}
          r={8}
          fill="url(#zoom_in_svg__paint0_linear_319_100)"
        />
        <circle
          cx={12}
          cy={12}
          r={7.875}
          stroke="url(#zoom_in_svg__paint1_linear_319_100)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#zoom_in_svg__filter1_d_319_100)">
        <path
          d="M18.542 19l3.958 3.958"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#zoom_in_svg__filter2_d_319_100)">
        <path
          d="M9 12h6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#zoom_in_svg__filter3_d_319_100)">
        <path
          d="M12 9v6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="zoom_in_svg__filter0_bdi_319_100"
          x={0}
          y={0}
          width={24}
          height={24}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_100"
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
            in2="effect1_backgroundBlur_319_100"
            result="effect2_dropShadow_319_100"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_100"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_100" />
        </filter>
        <filter
          id="zoom_in_svg__filter1_d_319_100"
          x={15.792}
          y={16.25}
          width={9.458}
          height={9.458}
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
            result="effect1_dropShadow_319_100"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_100"
            result="shape"
          />
        </filter>
        <filter
          id="zoom_in_svg__filter2_d_319_100"
          x={6.25}
          y={9.25}
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
            result="effect1_dropShadow_319_100"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_100"
            result="shape"
          />
        </filter>
        <filter
          id="zoom_in_svg__filter3_d_319_100"
          x={9.25}
          y={6.25}
          width={5.5}
          height={11.5}
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
            result="effect1_dropShadow_319_100"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_100"
            result="shape"
          />
        </filter>
        <linearGradient
          id="zoom_in_svg__paint0_linear_319_100"
          x1={-1.2}
          y1={-2.4}
          x2={28.4}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="zoom_in_svg__paint1_linear_319_100"
          x1={4.4}
          y1={6.4}
          x2={18.4}
          y2={18.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgZoomIn;
