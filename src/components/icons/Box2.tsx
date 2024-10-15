import * as React from "react";

function SvgBox2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 26" fill="none" {...props}>
      <path
        d="M14 10.333l9.779-4.074a.1.1 0 000-.185L19 4.084 14.77 2.32a2 2 0 00-1.54 0L4.223 6.074a.1.1 0 000 .185L9 8.25l5 2.083z"
        fill="#2AEAE7"
      />
      <g
        filter="url(#box2_svg__filter0_bdi_319_119)"
        shapeRendering="crispEdges"
      >
        <path
          d="M14 22V10.333l9.861-4.109a.1.1 0 01.139.092v10.85a1 1 0 01-.615.924L14 22z"
          fill="url(#box2_svg__paint0_linear_319_119)"
        />
        <path
          d="M23.337 17.974l-9.212 3.838V10.416l9.75-4.062v10.813a.875.875 0 01-.538.807zM23.91 6.34s0 0 0 0h0l-.01-.024.01.024z"
          stroke="url(#box2_svg__paint1_linear_319_119)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinejoin="round"
        />
      </g>
      <g
        filter="url(#box2_svg__filter1_bdi_319_119)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 6.316v10.85a1 1 0 00.615.924L14 22V10.333L4.138 6.224A.1.1 0 004 6.316z"
          fill="url(#box2_svg__paint2_linear_319_119)"
        />
        <path
          d="M4.125 17.166V6.354l9.75 4.062v11.396l-9.212-3.838a.875.875 0 01-.538-.808z"
          stroke="url(#box2_svg__paint3_linear_319_119)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="box2_svg__paint0_linear_319_119"
          x1={10.75}
          y1={-0.167}
          x2={35.965}
          y2={14.037}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="box2_svg__paint1_linear_319_119"
          x1={14.25}
          y1={8.541}
          x2={25.988}
          y2={14.896}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="box2_svg__paint2_linear_319_119"
          x1={0.75}
          y1={-0.167}
          x2={25.965}
          y2={14.037}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="box2_svg__paint3_linear_319_119"
          x1={4.25}
          y1={8.541}
          x2={15.989}
          y2={14.896}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="box2_svg__filter0_bdi_319_119"
          x={10}
          y={2.216}
          width={18}
          height={23.784}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_119"
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
            in2="effect1_backgroundBlur_319_119"
            result="effect2_dropShadow_319_119"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_119"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_119" />
        </filter>
        <filter
          id="box2_svg__filter1_bdi_319_119"
          x={0}
          y={2.216}
          width={18}
          height={23.784}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_119"
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
            in2="effect1_backgroundBlur_319_119"
            result="effect2_dropShadow_319_119"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_119"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_119" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgBox2;
