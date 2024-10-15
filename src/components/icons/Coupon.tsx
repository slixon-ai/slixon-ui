import * as React from "react";

function SvgCoupon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 24" fill="none" {...props}>
      <g filter="url(#coupon_svg__filter0_bdi_319_174)">
        <mask id="coupon_svg__a" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8a4 4 0 014-4h12a4 4 0 014 4v1.223c0 .19-.135.35-.315.413a2.501 2.501 0 000 4.728c.18.062.315.223.315.413V16a4 4 0 01-4 4H8a4 4 0 01-4-4v-1.223c0-.19.135-.35.315-.413a2.501 2.501 0 000-4.728A.449.449 0 014 9.223V8z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 8a4 4 0 014-4h12a4 4 0 014 4v1.223c0 .19-.135.35-.315.413a2.501 2.501 0 000 4.728c.18.062.315.223.315.413V16a4 4 0 01-4 4H8a4 4 0 01-4-4v-1.223c0-.19.135-.35.315-.413a2.501 2.501 0 000-4.728A.449.449 0 014 9.223V8z"
          fill="url(#coupon_svg__paint0_linear_319_174)"
          shapeRendering="crispEdges"
        />
        <path
          d="M4.315 9.636l-.081.236.081-.236zm0 4.728l-.081-.236.081.236zm19.37 0l.081-.236-.081.236zm0-4.728l-.082-.236.082.236zM8 3.75A4.25 4.25 0 003.75 8h.5A3.75 3.75 0 018 4.25v-.5zm12 0H8v.5h12v-.5zM24.25 8A4.25 4.25 0 0020 3.75v.5A3.75 3.75 0 0123.75 8h.5zm0 1.223V8h-.5v1.223h.5zm-2 2.777c0-.985.634-1.823 1.516-2.128l-.163-.472A2.751 2.751 0 0021.75 12h.5zm1.516 2.128A2.251 2.251 0 0122.25 12h-.5c0 1.205.775 2.229 1.853 2.6l.163-.472zM24.25 16v-1.223h-.5V16h.5zM20 20.25A4.25 4.25 0 0024.25 16h-.5A3.75 3.75 0 0120 19.75v.5zm-12 0h12v-.5H8v.5zM3.75 16A4.25 4.25 0 008 20.25v-.5A3.75 3.75 0 014.25 16h-.5zm0-1.223V16h.5v-1.223h-.5zm.647-.177A2.751 2.751 0 006.25 12h-.5c0 .985-.634 1.823-1.516 2.128l.163.472zM6.25 12a2.751 2.751 0 00-1.853-2.6l-.163.472A2.251 2.251 0 015.75 12h.5zm-2.5-4v1.223h.5V8h-.5zm.647 1.4c-.098-.034-.147-.112-.147-.177h-.5c0 .315.222.559.484.65l.163-.473zm-.147 5.377c0-.065.05-.143.147-.177l-.163-.472a.699.699 0 00-.484.649h.5zm19.353-.177c.098.034.147.112.147.177h.5a.699.699 0 00-.484-.65l-.163.473zm.147-5.377c0 .065-.05.143-.147.177l.163.472a.698.698 0 00.484-.649h-.5z"
          fill="url(#coupon_svg__paint1_linear_319_174)"
          fillOpacity={0.7}
          mask="url(#coupon_svg__a)"
        />
      </g>
      <g filter="url(#coupon_svg__filter1_d_319_174)">
        <circle
          cx={11.799}
          cy={9.799}
          r={0.792}
          transform="rotate(45 11.799 9.799)"
          fill="#2AEAE7"
        />
        <circle
          cx={16.201}
          cy={14.201}
          r={0.792}
          transform="rotate(45 16.201 14.201)"
          fill="#2AEAE7"
        />
        <path
          d="M11.761 14.239L16.24 9.76"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="coupon_svg__paint0_linear_319_174"
          x1={-2.5}
          y1={-2.4}
          x2={27.119}
          y2={30.621}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="coupon_svg__paint1_linear_319_174"
          x1={4.5}
          y1={6.4}
          x2={18.633}
          y2={21.543}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="coupon_svg__filter0_bdi_319_174"
          x={0}
          y={0}
          width={28}
          height={24}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_174"
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
            in2="effect1_backgroundBlur_319_174"
            result="effect2_dropShadow_319_174"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_174"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_174" />
        </filter>
        <filter
          id="coupon_svg__filter1_d_319_174"
          x={7}
          y={5}
          width={14}
          height={14}
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
            result="effect1_dropShadow_319_174"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_174"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCoupon;
