import * as React from "react";

function SvgSend(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 27 27" fill="none" {...props}>
      <g
        filter="url(#send_svg__filter0_bdi_319_163)"
        shapeRendering="crispEdges"
      >
        <path
          d="M20.723 4.759a1.2 1.2 0 011.518 1.518l-5.056 15.17c-.329.985-1.669 1.116-2.182.213l-3.095-5.443a3 3 0 00-1.125-1.125L5.34 11.997c-.903-.513-.772-1.853.213-2.181l15.17-5.057z"
          fill="url(#send_svg__paint0_linear_319_163)"
        />
        <path
          d="M20.723 4.759a1.2 1.2 0 011.518 1.518l-5.056 15.17c-.329.985-1.669 1.116-2.182.213l-3.095-5.443a3 3 0 00-1.125-1.125L5.34 11.997c-.903-.513-.772-1.853.213-2.181l15.17-5.057z"
          stroke="url(#send_svg__paint1_linear_319_163)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.863 5.137c.27.27.4.68.26 1.1l-5.057 15.17c-.294.883-1.494 1-1.954.192l-3.095-5.443a3.123 3.123 0 00-.507-.666L21.863 5.137z"
        fill="#2AEAE7"
      />
      <defs>
        <linearGradient
          id="send_svg__paint0_linear_319_163"
          x1={-3.5}
          y1={-4}
          x2={33.5}
          y2={29}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="send_svg__paint1_linear_319_163"
          x1={3.5}
          y1={7}
          x2={21}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="send_svg__filter0_bdi_319_163"
          x={0.608}
          y={0.57}
          width={25.822}
          height={25.822}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_163"
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
            in2="effect1_backgroundBlur_319_163"
            result="effect2_dropShadow_319_163"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_163"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_163" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgSend;
