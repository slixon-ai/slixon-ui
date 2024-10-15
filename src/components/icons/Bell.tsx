import * as React from "react";

function SvgBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 25" fill="none" {...props}>
      <circle cx={12} cy={20} r={3} fill="#2AEAE7" />
      <g filter="url(#bell_svg__filter0_bdi_360_4168)">
        <mask id="bell_svg__a" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.826 4a6.087 6.087 0 00-6.087 6.087v2.093c0 1.1-.709 2.062-1.273 3.007A3.304 3.304 0 004 16.885c0 1.603 1.145 2.978 2.733 3.198 1.577.22 3.547.439 5.093.439 1.546 0 3.517-.22 5.093-.439 1.588-.22 2.733-1.595 2.733-3.198 0-.62-.17-1.201-.466-1.698-.564-.945-1.273-1.907-1.273-3.007v-2.093A6.087 6.087 0 0011.826 4z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.826 4a6.087 6.087 0 00-6.087 6.087v2.093c0 1.1-.709 2.062-1.273 3.007A3.304 3.304 0 004 16.885c0 1.603 1.145 2.978 2.733 3.198 1.577.22 3.547.439 5.093.439 1.546 0 3.517-.22 5.093-.439 1.588-.22 2.733-1.595 2.733-3.198 0-.62-.17-1.201-.466-1.698-.564-.945-1.273-1.907-1.273-3.007v-2.093A6.087 6.087 0 0011.826 4z"
          fill="url(#bell_svg__paint0_linear_360_4168)"
          shapeRendering="crispEdges"
        />
        <path
          d="M4 16.885h-.25H4zm2.733 3.198l.034-.247-.034.247zm10.186 0l-.034-.247.034.247zM4.466 15.187l-.214-.128.214.128zm1.523-5.1a5.837 5.837 0 015.837-5.837v-.5a6.337 6.337 0 00-6.337 6.337h.5zm0 2.093v-2.093h-.5v2.093h.5zM4.25 16.885c0-.574.157-1.11.431-1.57l-.43-.256a3.554 3.554 0 00-.501 1.826h.5zm2.517 2.95c-1.458-.201-2.517-1.466-2.517-2.95h-.5c0 1.722 1.231 3.208 2.949 3.446l.068-.495zm5.06.437c-1.53 0-3.485-.218-5.06-.436l-.068.495c1.578.219 3.563.441 5.127.441v-.5zm5.058-.436c-1.575.218-3.53.436-5.059.436v.5c1.565 0 3.549-.222 5.128-.44l-.07-.496zm2.517-2.95c0 1.483-1.059 2.748-2.517 2.95l.069.495c1.717-.238 2.948-1.724 2.948-3.446h-.5zm-.431-1.57c.274.458.431.995.431 1.57h.5c0-.668-.183-1.292-.502-1.827l-.429.256zm-1.308-5.229v2.093h.5v-2.093h-.5zM11.826 4.25a5.837 5.837 0 015.837 5.837h.5c0-3.5-2.837-6.337-6.337-6.337v.5zM19.4 15.06c-.29-.489-.596-.945-.838-1.43-.24-.479-.399-.955-.399-1.45h-.5c0 .604.195 1.16.451 1.673.253.508.584 1.005.857 1.462l.43-.256zM5.49 12.18c0 .495-.16.971-.4 1.45-.242.485-.547.941-.838 1.43l.43.255c.272-.457.603-.955.856-1.462.256-.514.451-1.07.451-1.673h-.5z"
          fill="url(#bell_svg__paint1_linear_360_4168)"
          fillOpacity={0.7}
          mask="url(#bell_svg__a)"
        />
      </g>
      <defs>
        <linearGradient
          id="bell_svg__paint0_linear_360_4168"
          x1={-1.087}
          y1={-2.609}
          x2={29.247}
          y2={23.022}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="bell_svg__paint1_linear_360_4168"
          x1={4.391}
          y1={6.478}
          x2={18.709}
          y2={18.104}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="bell_svg__filter0_bdi_360_4168"
          x={0}
          y={0}
          width={23.652}
          height={24.522}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_360_4168"
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
            in2="effect1_backgroundBlur_360_4168"
            result="effect2_dropShadow_360_4168"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_360_4168"
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
          <feBlend in2="shape" result="effect3_innerShadow_360_4168" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgBell;
