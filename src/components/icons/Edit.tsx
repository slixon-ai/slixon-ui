import * as React from "react";

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 25 26" fill="none" {...props}>
      <g
        filter="url(#edit_svg__filter0_bdi_319_216)"
        shapeRendering="crispEdges"
      >
        <path
          d="M15.044 5.336a1.998 1.998 0 012.828-.001l2.492 2.491c.774.775.782 2.029.018 2.813l-9.234 9.473a2.997 2.997 0 01-2.146.906H6.249a1.5 1.5 0 01-1.498-1.564l.119-2.81a3.002 3.002 0 01.874-1.994l9.3-9.314z"
          fill="url(#edit_svg__paint0_linear_319_216)"
        />
        <path
          d="M15.133 5.424a1.873 1.873 0 012.65 0l2.492 2.49c.726.727.734 1.902.017 2.638l-9.233 9.473a2.873 2.873 0 01-2.057.868H6.249a1.375 1.375 0 01-1.373-1.434l.118-2.809c.03-.72.33-1.402.839-1.912l9.3-9.314z"
          stroke="url(#edit_svg__paint1_linear_319_216)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#edit_svg__filter1_d_319_216)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.949 12.777l2.254-2.313a1.752 1.752 0 00-.016-2.46L17.695 5.51a1.748 1.748 0 00-2.474.001l-2.267 2.27 4.995 4.995z"
          fill="#2AEAE7"
        />
      </g>
      <g filter="url(#edit_svg__filter2_d_319_216)">
        <path
          d="M15.393 20.945h6.122"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="edit_svg__filter0_bdi_319_216"
          x={0.75}
          y={0.749}
          width={24.2}
          height={24.269}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_216"
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
            in2="effect1_backgroundBlur_319_216"
            result="effect2_dropShadow_319_216"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_216"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_216" />
        </filter>
        <filter
          id="edit_svg__filter1_d_319_216"
          x={10.954}
          y={2.999}
          width={11.745}
          height={11.777}
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
            result="effect1_dropShadow_319_216"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_216"
            result="shape"
          />
        </filter>
        <filter
          id="edit_svg__filter2_d_319_216"
          x={12.643}
          y={18.194}
          width={11.621}
          height={5.501}
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
            result="effect1_dropShadow_319_216"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_216"
            result="shape"
          />
        </filter>
        <linearGradient
          id="edit_svg__paint0_linear_319_216"
          x1={20.458}
          y1={-3.627}
          x2={31.255}
          y2={18.08}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="edit_svg__paint1_linear_319_216"
          x1={14.43}
          y1={6.223}
          x2={19.501}
          y2={16.122}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgEdit;
