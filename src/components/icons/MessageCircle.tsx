import * as React from "react";

function SvgMessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 30" fill="none" {...props}>
      <g filter="url(#message_circle_svg__filter0_bdi_319_158)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 5C9.477 5 5 9.477 5 15c0 1.645.397 3.197 1.101 4.566.133.26.163.562.066.836L5.24 23.03c-.336.951.58 1.868 1.531 1.532l2.523-.892c.286-.1.6-.064.865.083A9.955 9.955 0 0015 25c5.523 0 10-4.477 10-10S20.523 5 15 5z"
          fill="url(#message_circle_svg__paint0_linear_319_158)"
          shapeRendering="crispEdges"
        />
        <path
          d="M5.239 23.03l-.118-.042.118.041zm1.531 1.53l.042.118-.042-.117zm2.523-.89l-.042-.119.042.118zm.865.082l-.06.11.06-.11zm-4.057-4.186l.111-.057-.111.057zm.066.836l-.118-.042.118.042zM5.125 15c0-5.454 4.421-9.875 9.875-9.875v-.25C9.408 4.875 4.875 9.408 4.875 15h.25zm1.087 4.51A9.832 9.832 0 015.125 15h-.25c0 1.665.402 3.237 1.115 4.623l.222-.114zm-.855 3.56l.928-2.626-.236-.084-.928 2.628.236.083zm1.372 1.373a1.075 1.075 0 01-1.372-1.372l-.236-.083c-.37 1.05.64 2.061 1.69 1.69l-.082-.235zm2.522-.892l-2.522.892.083.235 2.522-.891-.083-.236zM15 24.875a9.83 9.83 0 01-4.781-1.233l-.121.22A10.08 10.08 0 0015 25.124v-.25zM24.875 15c0 5.454-4.421 9.875-9.875 9.875v.25c5.592 0 10.125-4.533 10.125-10.125h-.25zM15 5.125c5.454 0 9.875 4.421 9.875 9.875h.25c0-5.592-4.533-10.125-10.125-10.125v.25zM9.335 23.787a.935.935 0 01.763.074l.12-.219a1.185 1.185 0 00-.967-.09l.084.235zM5.99 19.623a.934.934 0 01.06.737l.235.084c.11-.31.075-.648-.073-.935l-.222.114z"
          fill="url(#message_circle_svg__paint1_linear_319_158)"
          fillOpacity={0.7}
        />
      </g>
      <g filter="url(#message_circle_svg__filter1_d_319_158)" fill="#2AEAE7">
        <circle cx={10.05} cy={15.05} r={1.25} />
        <circle cx={15.05} cy={15.05} r={1.25} />
        <circle cx={20.05} cy={15.05} r={1.25} />
      </g>
      <defs>
        <linearGradient
          id="message_circle_svg__paint0_linear_319_158"
          x1={-1.5}
          y1={-3}
          x2={35.5}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="message_circle_svg__paint1_linear_319_158"
          x1={5.5}
          y1={8}
          x2={23}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="message_circle_svg__filter0_bdi_319_158"
          x={0.875}
          y={0.875}
          width={28.25}
          height={28.25}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_158"
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
            in2="effect1_backgroundBlur_319_158"
            result="effect2_dropShadow_319_158"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_158"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_158" />
        </filter>
        <filter
          id="message_circle_svg__filter1_d_319_158"
          x={6.8}
          y={11.8}
          width={16.5}
          height={6.5}
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
            result="effect1_dropShadow_319_158"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_158"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgMessageCircle;
