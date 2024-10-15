import * as React from "react";

function SvgRocket(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 27 27" fill="none" {...props}>
      <g filter="url(#rocket_svg__filter0_d_319_180)">
        <path
          d="M3.394 13.748l3.182-3.182a1 1 0 01.849-.283l2.838.27a.1.1 0 01.082.141l-2.113 4.528a1 1 0 01-1.013.572l-3.26-.349a1 1 0 01-.565-1.697z"
          fill="#2AEAE7"
        />
      </g>
      <g filter="url(#rocket_svg__filter1_d_319_180)">
        <path
          d="M13.293 23.648l3.182-3.182a1 1 0 00.283-.849l-.27-2.838a.1.1 0 00-.141-.082l-4.528 2.113a1 1 0 00-.571 1.013l.348 3.26a1 1 0 001.697.565z"
          fill="#2AEAE7"
        />
      </g>
      <g
        filter="url(#rocket_svg__filter2_bdi_319_180)"
        shapeRendering="crispEdges"
      >
        <path
          d="M7.881 16.821l2.34 2.34c.575.575 1.44.744 2.17.386 1.732-.85 4.917-2.587 6.913-4.738 2.224-2.398 3.05-6.196 3.357-8.537A1.663 1.663 0 0020.77 4.38c-2.341.306-6.138 1.134-8.536 3.358-2.152 1.995-3.89 5.18-4.738 6.912-.359.731-.19 1.596.386 2.171z"
          fill="url(#rocket_svg__paint0_linear_319_180)"
        />
        <path
          d="M10.309 19.072l-2.34-2.34c-.54-.54-.696-1.347-.362-2.027.848-1.73 2.578-4.897 4.71-6.876 2.368-2.195 6.13-3.019 8.468-3.325a1.538 1.538 0 011.752 1.752c-.306 2.338-1.13 6.1-3.325 8.468-1.978 2.133-5.145 3.862-6.876 4.71-.68.334-1.487.178-2.027-.362z"
          stroke="url(#rocket_svg__paint1_linear_319_180)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#rocket_svg__filter3_d_319_180)">
        <path
          d="M14.707 9.506a2 2 0 102.828 2.828 2 2 0 00-2.828-2.828z"
          fill="#2AEAE7"
        />
      </g>
      <g filter="url(#rocket_svg__filter4_d_319_180)">
        <path
          d="M6.93 20.112L4.1 22.941m.708-4.95l-1.414 1.414m5.657 2.828l-1.415 1.415"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="rocket_svg__filter0_d_319_180"
          x={1.1}
          y={8.273}
          width={11.254}
          height={9.526}
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
            result="effect1_dropShadow_319_180"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_180"
            result="shape"
          />
        </filter>
        <filter
          id="rocket_svg__filter1_d_319_180"
          x={9.242}
          y={14.688}
          width={9.526}
          height={11.254}
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
            result="effect1_dropShadow_319_180"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_180"
            result="shape"
          />
        </filter>
        <filter
          id="rocket_svg__filter2_bdi_319_180"
          x={3.307}
          y={0.365}
          width={23.37}
          height={23.37}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_180"
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
            in2="effect1_backgroundBlur_319_180"
            result="effect2_dropShadow_319_180"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_180"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_180" />
        </filter>
        <filter
          id="rocket_svg__filter3_d_319_180"
          x={12.122}
          y={6.92}
          width={8}
          height={8}
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
            result="effect1_dropShadow_319_180"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_180"
            result="shape"
          />
        </filter>
        <filter
          id="rocket_svg__filter4_d_319_180"
          x={0.644}
          y={15.241}
          width={11.157}
          height={11.157}
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
            result="effect1_dropShadow_319_180"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_180"
            result="shape"
          />
        </filter>
        <linearGradient
          id="rocket_svg__paint0_linear_319_180"
          x1={21.606}
          y1={-6.251}
          x2={31.53}
          y2={22.046}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="rocket_svg__paint1_linear_319_180"
          x1={16.857}
          y1={3.456}
          x2={21.624}
          y2={16.409}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgRocket;
