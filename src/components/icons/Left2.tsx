import * as React from "react";

function SvgLeft2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#left2_svg__filter0_bdi_319_39)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.262 11.5a.75.75 0 011.057.081l6.013 6.93a.75.75 0 01-1.14.977l-6.011-6.93a.75.75 0 01.08-1.058z"
          fill="url(#left2_svg__paint0_linear_319_39)"
        />
        <path
          d="M9.225 11.663h0l6.012 6.93s0 0 0 0a.625.625 0 01-.95.814h0l-6.012-6.93v-.001a.625.625 0 01.95-.813z"
          stroke="url(#left2_svg__paint1_linear_319_39)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#left2_svg__filter1_d_319_39)">
        <path
          d="M8.762 12l6-7"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="left2_svg__paint0_linear_319_39"
          x1={5.008}
          y1={22.512}
          x2={19.124}
          y2={8.547}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="left2_svg__paint1_linear_319_39"
          x1={9.133}
          y1={19.538}
          x2={15.581}
          y2={12.9}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="left2_svg__filter0_bdi_319_39"
          x={4}
          y={7.319}
          width={15.512}
          height={16.431}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_39"
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
            in2="effect1_backgroundBlur_319_39"
            result="effect2_dropShadow_319_39"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_39"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_39" />
        </filter>
        <filter
          id="left2_svg__filter1_d_319_39"
          x={6.012}
          y={2.25}
          width={11.5}
          height={12.5}
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
            result="effect1_dropShadow_319_39"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_39"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLeft2;
