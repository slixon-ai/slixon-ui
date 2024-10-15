import * as React from "react";

function SvgFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 27" fill="none" {...props}>
      <g
        filter="url(#flag_svg__filter0_bdi_319_228)"
        shapeRendering="crispEdges"
      >
        <path
          d="M10.751 6h8.036a1 1 0 01.809 1.588l-1.99 2.736a2 2 0 000 2.352l1.99 2.736A1 1 0 0118.787 17h-7.036a1 1 0 01-1-1V6z"
          fill="url(#flag_svg__paint0_linear_319_228)"
        />
        <path
          d="M10.876 6.125h7.911a.875.875 0 01.708 1.39l-1.99 2.735a2.125 2.125 0 000 2.5l1.99 2.735a.875.875 0 01-.708 1.39h-7.036a.875.875 0 01-.875-.875V6.125z"
          stroke="url(#flag_svg__paint1_linear_319_228)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#flag_svg__filter1_d_319_228)">
        <path
          d="M4.751 24V6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g
        filter="url(#flag_svg__filter2_bdi_319_228)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 5.5A1.5 1.5 0 015.5 4h5.75a1.5 1.5 0 011.5 1.5v8a1.5 1.5 0 01-1.5 1.5H5.5A1.5 1.5 0 014 13.5v-8z"
          fill="url(#flag_svg__paint2_linear_319_228)"
        />
        <path
          d="M4.125 5.5c0-.76.616-1.375 1.375-1.375h5.75c.76 0 1.376.616 1.376 1.375v8c0 .76-.616 1.375-1.375 1.375H5.5c-.76 0-1.375-.616-1.375-1.375v-8z"
          stroke="url(#flag_svg__paint3_linear_319_228)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="flag_svg__paint0_linear_319_228"
          x1={7.501}
          y1={1.6}
          x2={27.542}
          y2={17.849}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="flag_svg__paint1_linear_319_228"
          x1={11.001}
          y1={7.65}
          x2={20.445}
          y2={15.009}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="flag_svg__paint2_linear_319_228"
          x1={1.156}
          y1={-0.4}
          x2={20.49}
          y2={13.318}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="flag_svg__paint3_linear_319_228"
          x1={4.219}
          y1={5.65}
          x2={13.286}
          y2={11.833}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="flag_svg__filter0_bdi_319_228"
          x={6.751}
          y={2}
          width={17.038}
          height={19}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_228"
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
            in2="effect1_backgroundBlur_319_228"
            result="effect2_dropShadow_319_228"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_228"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_228" />
        </filter>
        <filter
          id="flag_svg__filter1_d_319_228"
          x={2.001}
          y={3.25}
          width={5.5}
          height={23.5}
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
            result="effect1_dropShadow_319_228"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_228"
            result="shape"
          />
        </filter>
        <filter
          id="flag_svg__filter2_bdi_319_228"
          x={0}
          y={0}
          width={16.751}
          height={19}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_228"
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
            in2="effect1_backgroundBlur_319_228"
            result="effect2_dropShadow_319_228"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_228"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_228" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgFlag;
