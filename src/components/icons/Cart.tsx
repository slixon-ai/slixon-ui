import * as React from "react";

function SvgCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 26" fill="none" {...props}>
      <g filter="url(#cart_svg__filter0_bdi_319_175)">
        <mask id="cart_svg__a" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.147 4.265a.75.75 0 00-.294 1.47l1.05.21c.538.108.943.555.998 1.102l.153 1.535.99 8.246a2.75 2.75 0 002.73 2.422h8.993a4.25 4.25 0 004.123-3.22l1.123-4.49a3.05 3.05 0 00-2.959-3.79H8.48l-.085-.852a2.75 2.75 0 00-2.198-2.423l-1.049-.21z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.147 4.265a.75.75 0 00-.294 1.47l1.05.21c.538.108.943.555.998 1.102l.153 1.535.99 8.246a2.75 2.75 0 002.73 2.422h8.993a4.25 4.25 0 004.123-3.22l1.123-4.49a3.05 3.05 0 00-2.959-3.79H8.48l-.085-.852a2.75 2.75 0 00-2.198-2.423l-1.049-.21z"
          fill="url(#cart_svg__paint0_linear_319_175)"
          shapeRendering="crispEdges"
        />
        <path
          d="M4.265 4.853l.245.05-.245-.05zm.882-.588l-.049.245.05-.245zm-.294 1.47l.049-.245-.05.246zm1.05.21l-.05.246.05-.246zM6.9 7.047l-.249.025.249-.025zm.153 1.535l-.248.025v.005l.248-.03zm.99 8.246l.248-.03-.248.03zm15.846-.797l.243.06-.243-.06zm1.123-4.491l.243.06-.243-.06zM8.48 7.75l-.249.025.023.225h.226v-.25zm-.085-.852l-.25.024.25-.024zM6.195 4.475l-.049.245.05-.245zm-1.686.427a.5.5 0 01.588-.392l.098-.49a1 1 0 00-1.177.784l.49.098zm.392.588a.5.5 0 01-.392-.588l-.49-.098a1 1 0 00.784 1.177l.098-.49zm1.05.21l-1.05-.21-.098.49 1.05.21.097-.49zM7.15 7.022A1.5 1.5 0 005.95 5.7l-.098.49a1 1 0 01.8.882l.497-.05zm.153 1.535L7.15 7.022l-.498.05.154 1.535.497-.05zm.99 8.241l-.99-8.246-.497.06.99 8.246.496-.06zM10.773 19a2.5 2.5 0 01-2.482-2.202l-.496.06a3 3 0 002.978 2.642V19zm8.993 0h-8.993v.5h8.993V19zm3.88-3.03a4 4 0 01-3.88 3.03v.5a4.5 4.5 0 004.366-3.408l-.485-.122zm1.124-4.49l-1.123 4.49.485.122 1.123-4.491-.485-.122zM22.054 8a2.8 2.8 0 012.717 3.48l.485.12a3.3 3.3 0 00-3.202-4.1V8zM8.48 8h13.575v-.5H8.48V8zm-.334-1.078l.085.853.498-.05-.086-.852-.497.05zM6.147 4.72a2.5 2.5 0 011.998 2.202l.497-.05A3 3 0 006.246 4.23l-.099.49zm-1.049-.21l1.05.21.098-.49-1.05-.21-.098.49z"
          fill="url(#cart_svg__paint1_linear_319_175)"
          fillOpacity={0.7}
          mask="url(#cart_svg__a)"
        />
      </g>
      <g filter="url(#cart_svg__filter1_d_319_175)">
        <path
          d="M16 15.5h-4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#cart_svg__filter2_d_319_175)">
        <circle cx={11.5} cy={22} r={1.5} fill="#2AEAE7" />
      </g>
      <g filter="url(#cart_svg__filter3_d_319_175)">
        <circle cx={20.5} cy={22} r={1.5} fill="#2AEAE7" />
      </g>
      <defs>
        <filter
          id="cart_svg__filter0_bdi_319_175"
          x={0.25}
          y={0.25}
          width={28.856}
          height={23}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_175"
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
            in2="effect1_backgroundBlur_319_175"
            result="effect2_dropShadow_319_175"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_175"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_175" />
        </filter>
        <filter
          id="cart_svg__filter1_d_319_175"
          x={9.25}
          y={12.75}
          width={9.5}
          height={5.5}
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
            result="effect1_dropShadow_319_175"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_175"
            result="shape"
          />
        </filter>
        <filter
          id="cart_svg__filter2_d_319_175"
          x={8}
          y={18.5}
          width={7}
          height={7}
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
            result="effect1_dropShadow_319_175"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_175"
            result="shape"
          />
        </filter>
        <filter
          id="cart_svg__filter3_d_319_175"
          x={17}
          y={18.5}
          width={7}
          height={7}
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
            result="effect1_dropShadow_319_175"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_175"
            result="shape"
          />
        </filter>
        <linearGradient
          id="cart_svg__paint0_linear_319_175"
          x1={-2.528}
          y1={-1.75}
          x2={24.77}
          y2={32.101}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="cart_svg__paint1_linear_319_175"
          x1={4.771}
          y1={6.5}
          x2={17.851}
          y2={22.088}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgCart;
