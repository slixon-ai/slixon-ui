import * as React from "react";

function SvgRefresh(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <g
        filter="url(#refresh_svg__filter0_bdi_319_42)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.02 5.75a7.25 7.25 0 00-6.68 4.386.75.75 0 11-1.378-.593 8.75 8.75 0 0116.095.045.75.75 0 01-1.38.585A7.25 7.25 0 0013.02 5.75z"
          fill="url(#refresh_svg__paint0_linear_319_42)"
        />
        <path
          d="M13.02 5.625a7.375 7.375 0 00-6.795 4.461.625.625 0 01-1.148-.493 8.625 8.625 0 0115.865.044.625.625 0 11-1.15.487 7.375 7.375 0 00-6.771-4.499z"
          stroke="url(#refresh_svg__paint1_linear_319_42)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#refresh_svg__filter1_d_319_42)">
        <path
          d="M4.232 6.515l.73 3.16a1 1 0 001.199.75l3.16-.73"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#refresh_svg__filter2_bdi_319_42)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.04 20.25a7.25 7.25 0 006.673-4.513.75.75 0 011.39.566 8.75 8.75 0 01-16.168.09.75.75 0 011.382-.582 7.25 7.25 0 006.723 4.439z"
          fill="url(#refresh_svg__paint2_linear_319_42)"
        />
        <path
          d="M13.04 20.375a7.375 7.375 0 006.79-4.59.625.625 0 011.157.471 8.624 8.624 0 01-15.937.089.625.625 0 111.152-.485 7.375 7.375 0 006.839 4.515z"
          stroke="url(#refresh_svg__paint3_linear_319_42)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#refresh_svg__filter3_d_319_42)">
        <path
          d="M21.768 19.485l-.73-3.16a1 1 0 00-1.199-.75l-3.16.73"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="refresh_svg__paint0_linear_319_42"
          x1={-2.285}
          y1={6.88}
          x2={25.942}
          y2={17.464}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="refresh_svg__paint1_linear_319_42"
          x1={4.928}
          y1={9.373}
          x2={18.224}
          y2={14.064}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="refresh_svg__paint2_linear_319_42"
          x1={28.427}
          y1={19.047}
          x2={0.11}
          y2={8.323}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="refresh_svg__paint3_linear_319_42"
          x1={21.173}
          y1={16.566}
          x2={7.831}
          y2={11.809}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="refresh_svg__filter0_bdi_319_42"
          x={0.901}
          y={0.25}
          width={24.216}
          height={14.38}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_42"
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
            in2="effect1_backgroundBlur_319_42"
            result="effect2_dropShadow_319_42"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_42"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_42" />
        </filter>
        <filter
          id="refresh_svg__filter1_d_319_42"
          x={1.482}
          y={3.765}
          width={10.589}
          height={9.435}
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
            result="effect1_dropShadow_319_42"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_42"
            result="shape"
          />
        </filter>
        <filter
          id="refresh_svg__filter2_bdi_319_42"
          x={0.876}
          y={11.27}
          width={24.282}
          height={14.48}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_42"
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
            in2="effect1_backgroundBlur_319_42"
            result="effect2_dropShadow_319_42"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_42"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_42" />
        </filter>
        <filter
          id="refresh_svg__filter3_d_319_42"
          x={13.93}
          y={12.8}
          width={10.589}
          height={9.435}
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
            result="effect1_dropShadow_319_42"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_42"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgRefresh;
