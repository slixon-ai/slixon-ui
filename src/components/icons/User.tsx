import * as React from "react";

function SvgUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 25" fill="none" {...props}>
      <circle
        cx={4}
        cy={4}
        r={4}
        transform="matrix(-1 0 0 1 16 4)"
        fill="#2AEAE7"
      />
      <g
        filter="url(#user_svg__filter0_bdi_319_205)"
        shapeRendering="crispEdges"
      >
        <path
          d="M5 16.935c0-.86.54-1.628 1.351-1.917a16.794 16.794 0 0111.298 0A2.036 2.036 0 0119 16.934v1.315c0 1.188-1.052 2.1-2.227 1.932l-.955-.136a27.002 27.002 0 00-7.636 0l-.955.136A1.951 1.951 0 015 18.25v-1.315z"
          fill="url(#user_svg__paint0_linear_319_205)"
        />
        <path
          d="M5.125 16.935a1.91 1.91 0 011.268-1.8 16.67 16.67 0 0111.214 0 1.91 1.91 0 011.268 1.8v1.315a1.826 1.826 0 01-2.084 1.808l-.955-.136a27.125 27.125 0 00-7.672 0l-.954.136a1.826 1.826 0 01-2.085-1.808v-1.315z"
          stroke="url(#user_svg__paint1_linear_319_205)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="user_svg__paint0_linear_319_205"
          x1={0.45}
          y1={10}
          x2={12.779}
          y2={30.526}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="user_svg__paint1_linear_319_205"
          x1={5.35}
          y1={14.125}
          x2={11.319}
          y2={23.676}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="user_svg__filter0_bdi_319_205"
          x={1}
          y={10.039}
          width={22}
          height={14.163}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_205"
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
            in2="effect1_backgroundBlur_319_205"
            result="effect2_dropShadow_319_205"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_205"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_205" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgUser;
