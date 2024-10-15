import * as React from "react";

function SvgUp2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g filter="url(#up2_svg__filter0_bdi_319_36)" shapeRendering="crispEdges">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 8.5a.75.75 0 01-.081 1.057l-6.93 6.012a.75.75 0 01-.977-1.139l6.93-6.012A.75.75 0 0112.5 8.5z"
          fill="url(#up2_svg__paint0_linear_319_36)"
        />
        <path
          d="M12.337 9.462h0l-6.93 6.013s0 0 0 0a.625.625 0 01-.814-.95h0l6.93-6.012h.001a.625.625 0 01.813.95z"
          stroke="url(#up2_svg__paint1_linear_319_36)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#up2_svg__filter1_d_319_36)">
        <path
          d="M12 9l7 6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="up2_svg__paint0_linear_319_36"
          x1={1.487}
          y1={5.246}
          x2={15.453}
          y2={19.362}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="up2_svg__paint1_linear_319_36"
          x1={4.463}
          y1={9.371}
          x2={11.1}
          y2={15.819}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="up2_svg__filter0_bdi_319_36"
          x={0.25}
          y={4.238}
          width={16.43}
          height={15.512}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_36"
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
            in2="effect1_backgroundBlur_319_36"
            result="effect2_dropShadow_319_36"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_36"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_36" />
        </filter>
        <filter
          id="up2_svg__filter1_d_319_36"
          x={9.25}
          y={6.25}
          width={12.5}
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
            result="effect1_dropShadow_319_36"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_36"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgUp2;
