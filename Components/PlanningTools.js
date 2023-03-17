import Faq from "../props/Faq.js";
const PlanningTools = () => {
  return (
    <div className="planning-tools grid-two">
      <div className="planning-tools__info">
        <h2>Financial planning happens with every interaction</h2>
      </div>
      <div className="faq-section">
        <Faq
          question="Savings and investment performance"
          answer="With inbuilt performance trackers that enable you get a visual sense of your savings and investment performance, you are assured of simple financial planning experience. From your Savings Scores to behavioural analysis of your savings and investment decisions, we provide useful insights on how well you are doing with your money."
        />
        <Faq
          question="Planning tools packed in clicks"
          answer={`Planning is no longer just a word, it's something you can see, feel and play with. The Cowrywise platform packs the intelligence of experienced financial analysts into a few clicks making it possible to visualize the outcomes of your financial decisions today. As you create your investment plans, we onboard you into well thought out steps that enable you plan simple.`}
        />
        <Faq
          question="Planning for life moments has never been easier"
          answer="You know the tedious process that comes with planning for the future? We just tossed it out the window on your behalf. To replace that process, we present you with our set of easy to use financial tools that enables you plan for life moments like education, retirement or buying your first home."
        />
      </div>
      <div class="chart__container">
        <div id="priceChart" style={{ minHeight: "170px" }}>
          <div
            id="apexchartsh3uf1v7i"
            class="apexcharts-canvas apexchartsh3uf1v7i apexcharts-theme-light"
            style={{ width: "387px", height: "170px" }}
          >
            <svg
              id="SvgjsSvg2593"
              width="387"
              height="170"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSvgjs="http://svgjs.dev"
              class="apexcharts-svg"
              xmlnsData="ApexChartsNS"
              transform="translate(0, 0)"
              style={{ background: "transparent" }}
            >
              <g
                id="SvgjsG2595"
                class="apexcharts-inner apexcharts-graphical"
                transform="translate(0, 0)"
              >
                <defs id="SvgjsDefs2594">
                  <clipPath id="gridRectMaskh3uf1v7i">
                    <rect
                      id="SvgjsRect2601"
                      width="392"
                      height="171"
                      x="-2.5"
                      y="-0.5"
                      rx="0"
                      ry="0"
                      opacity="1"
                      strokeWidth="0"
                      stroke="none"
                      strokeDasharray="0"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                  <clipPath id="forecastMaskh3uf1v7i"></clipPath>
                  <clipPath id="nonForecastMaskh3uf1v7i"></clipPath>
                  <clipPath id="gridRectMarkerMaskh3uf1v7i">
                    <rect
                      id="SvgjsRect2602"
                      width="391"
                      height="174"
                      x="-2"
                      y="-2"
                      rx="0"
                      ry="0"
                      opacity="1"
                      strokeWidth="0"
                      stroke="none"
                      strokeDasharray="0"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                  <linearGradient
                    id="SvgjsLinearGradient2607"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      id="SvgjsStop2608"
                      stopOpacity="0.6"
                      stopColor="rgba(1,219,250,0.6)"
                      offset="0"
                    ></stop>
                    <stop
                      id="SvgjsStop2609"
                      stopOpacity="0.3"
                      stopColor="rgba(255,255,255,0.3)"
                      offset="1"
                    ></stop>
                    <stop
                      id="SvgjsStop2610"
                      stopOpacity="0.3"
                      stopColor="rgba(255,255,255,0.3)"
                      offset="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <line
                  id="SvgjsLine2600"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="170"
                  stroke="#b6b6b6"
                  strokeDasharray="3"
                  strokeLinecap="butt"
                  class="apexcharts-xcrosshairs"
                  x="0"
                  y="0"
                  width="1"
                  height="170"
                  fill="#b1b9c4"
                  filter="none"
                  fillOpacity="0.9"
                  strokeWidth="1"
                ></line>
                <g
                  id="SvgjsG2613"
                  class="apexcharts-xaxis"
                  transform="translate(0, 0)"
                >
                  <g
                    id="SvgjsG2614"
                    class="apexcharts-xaxis-texts-g"
                    transform="translate(0, 4)"
                  ></g>
                </g>
                <g id="SvgjsG2623" class="apexcharts-grid">
                  <g
                    id="SvgjsG2624"
                    class="apexcharts-gridlines-horizontal"
                    style={{ display: "none" }}
                  >
                    <line
                      id="SvgjsLine2626"
                      x1="0"
                      y1="0"
                      x2="387"
                      y2="0"
                      stroke="#e0e0e0"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine2627"
                      x1="0"
                      y1="34"
                      x2="387"
                      y2="34"
                      stroke="#e0e0e0"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine2628"
                      x1="0"
                      y1="68"
                      x2="387"
                      y2="68"
                      stroke="#e0e0e0"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine2629"
                      x1="0"
                      y1="102"
                      x2="387"
                      y2="102"
                      stroke="#e0e0e0"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine2630"
                      x1="0"
                      y1="136"
                      x2="387"
                      y2="136"
                      stroke="#e0e0e0"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine2631"
                      x1="0"
                      y1="170"
                      x2="387"
                      y2="170"
                      stroke="#e0e0e0"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                  </g>
                  <g
                    id="SvgjsG2625"
                    class="apexcharts-gridlines-vertical"
                    style={{ display: "none" }}
                  ></g>
                  <line
                    id="SvgjsLine2633"
                    x1="0"
                    y1="170"
                    x2="387"
                    y2="170"
                    stroke="transparent"
                    strokeDasharray="0"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    id="SvgjsLine2632"
                    x1="0"
                    y1="1"
                    x2="0"
                    y2="170"
                    stroke="transparent"
                    strokeDasharray="0"
                    strokeLinecap="butt"
                  ></line>
                </g>
                <g
                  id="SvgjsG2603"
                  class="apexcharts-area-series apexcharts-plot-series"
                >
                  <g
                    id="SvgjsG2604"
                    class="apexcharts-series"
                    seriesName="Price"
                    dataLongestSeries="true"
                    rel="1"
                    dataRealIndex="0"
                  >
                    <path
                      id="SvgjsPath2611"
                      d="M 0 170L 0 154.0199999999968C 22.575 154.0199999999968 41.925 133.5066666666662 64.5 133.5066666666662C 87.075 133.5066666666662 106.425 113.55999999999949 129 113.55999999999949C 151.575 113.55999999999949 170.925 75.70666666666511 193.5 75.70666666666511C 216.075 75.70666666666511 235.425 58.25333333333401 258 58.25333333333401C 280.575 58.25333333333401 299.925 48.16666666666606 322.5 48.16666666666606C 345.075 48.16666666666606 364.425 28.446666666664896 387 28.446666666664896C 387 28.446666666664896 387 28.446666666664896 387 170M 387 28.446666666664896z"
                      fill="url(#SvgjsLinearGradient2607)"
                      fillOpacity="1"
                      strokeOpacity="1"
                      strokeLinecap="butt"
                      strokeWidth="0"
                      strokeDasharray="0"
                      class="apexcharts-area"
                      index="0"
                      clipPath="url(#gridRectMaskh3uf1v7i)"
                      pathTo="M 0 170L 0 154.0199999999968C 22.575 154.0199999999968 41.925 133.5066666666662 64.5 133.5066666666662C 87.075 133.5066666666662 106.425 113.55999999999949 129 113.55999999999949C 151.575 113.55999999999949 170.925 75.70666666666511 193.5 75.70666666666511C 216.075 75.70666666666511 235.425 58.25333333333401 258 58.25333333333401C 280.575 58.25333333333401 299.925 48.16666666666606 322.5 48.16666666666606C 345.075 48.16666666666606 364.425 28.446666666664896 387 28.446666666664896C 387 28.446666666664896 387 28.446666666664896 387 170M 387 28.446666666664896z"
                      pathFrom="M -1 13395.999999999998L -1 13395.999999999998L 64.5 13395.999999999998L 129 13395.999999999998L 193.5 13395.999999999998L 258 13395.999999999998L 322.5 13395.999999999998L 387 13395.999999999998"
                    ></path>
                    <path
                      id="SvgjsPath2612"
                      d="M 0 154.0199999999968C 22.575 154.0199999999968 41.925 133.5066666666662 64.5 133.5066666666662C 87.075 133.5066666666662 106.425 113.55999999999949 129 113.55999999999949C 151.575 113.55999999999949 170.925 75.70666666666511 193.5 75.70666666666511C 216.075 75.70666666666511 235.425 58.25333333333401 258 58.25333333333401C 280.575 58.25333333333401 299.925 48.16666666666606 322.5 48.16666666666606C 345.075 48.16666666666606 364.425 28.446666666664896 387 28.446666666664896"
                      fill="none"
                      fillOpacity="1"
                      stroke="#01dbfa"
                      strokeOpacity="1"
                      strokeLinecap="butt"
                      strokeWidth="1"
                      strokeDasharray="0"
                      class="apexcharts-area"
                      index="0"
                      clip-path="url(#gridRectMaskh3uf1v7i)"
                      pathTo="M 0 154.0199999999968C 22.575 154.0199999999968 41.925 133.5066666666662 64.5 133.5066666666662C 87.075 133.5066666666662 106.425 113.55999999999949 129 113.55999999999949C 151.575 113.55999999999949 170.925 75.70666666666511 193.5 75.70666666666511C 216.075 75.70666666666511 235.425 58.25333333333401 258 58.25333333333401C 280.575 58.25333333333401 299.925 48.16666666666606 322.5 48.16666666666606C 345.075 48.16666666666606 364.425 28.446666666664896 387 28.446666666664896"
                      pathFrom="M -1 13395.999999999998L -1 13395.999999999998L 64.5 13395.999999999998L 129 13395.999999999998L 193.5 13395.999999999998L 258 13395.999999999998L 322.5 13395.999999999998L 387 13395.999999999998"
                    ></path>
                    <g
                      id="SvgjsG2605"
                      class="apexcharts-series-markers-wrap"
                      dataRealIndex="0"
                    >
                      <g class="apexcharts-series-markers">
                        <circle
                          id="SvgjsCircle2639"
                          r="0"
                          cx="0"
                          cy="0"
                          class="apexcharts-marker wun9q0fz1f no-pointer-events"
                          stroke="#ffffff"
                          fill="#008ffb"
                          fillOpacity="1"
                          strokeWidth="2"
                          strokeOpacity="0.9"
                          defaultMarkerSize="0"
                        ></circle>
                      </g>
                    </g>
                  </g>
                  <g
                    id="SvgjsG2606"
                    class="apexcharts-datalabels"
                    dataRealIndex="0"
                  ></g>
                </g>
                <line
                  id="SvgjsLine2634"
                  x1="0"
                  y1="0"
                  x2="387"
                  y2="0"
                  stroke="#b6b6b6"
                  strokeDasharray="0"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  class="apexcharts-ycrosshairs"
                ></line>
                <line
                  id="SvgjsLine2635"
                  x1="0"
                  y1="0"
                  x2="387"
                  y2="0"
                  strokeDasharray="0"
                  strokeWidth="0"
                  strokeLinecap="butt"
                  class="apexcharts-ycrosshairs-hidden"
                ></line>
                <g id="SvgjsG2636" class="apexcharts-yaxis-annotations"></g>
                <g id="SvgjsG2637" class="apexcharts-xaxis-annotations"></g>
                <g id="SvgjsG2638" class="apexcharts-point-annotations"></g>
              </g>
              <rect
                id="SvgjsRect2599"
                width="0"
                height="0"
                x="0"
                y="0"
                rx="0"
                ry="0"
                opacity="1"
                strokeWidth="0"
                stroke="none"
                strokeDasharray="0"
                fill="#fefefe"
              ></rect>
              <g
                id="SvgjsG2622"
                class="apexcharts-yaxis"
                rel="0"
                transform="translate(-18, 0)"
              ></g>
              <g id="SvgjsG2596" class="apexcharts-annotations"></g>
            </svg>
            <div class="apexcharts-legend" style={{ maxHeight: "85px" }}></div>
            <div class="apexcharts-tooltip apexcharts-theme-light">
              <div
                class="apexcharts-tooltip-title"
                style={{ fontFamily: "CW BR Firma", fontSize: "11px" }}
              ></div>
              <div class="apexcharts-tooltip-series-group" style={{ order: 1 }}>
                <span
                  class="apexcharts-tooltip-marker"
                  style={{ backgroundColor: "rgb(0, 143, 251)" }}
                ></span>
                <div
                  class="apexcharts-tooltip-text"
                  style={{ fontFamily: "CW BR Firma", fontSize: "11px" }}
                >
                  <div class="apexcharts-tooltip-y-group">
                    <span class="apexcharts-tooltip-text-y-label"></span>
                    <span class="apexcharts-tooltip-text-y-value"></span>
                  </div>
                  <div class="apexcharts-tooltip-goals-group">
                    <span class="apexcharts-tooltip-text-goals-label"></span>
                    <span class="apexcharts-tooltip-text-goals-value"></span>
                  </div>
                  <div class="apexcharts-tooltip-z-group">
                    <span class="apexcharts-tooltip-text-z-label"></span>
                    <span class="apexcharts-tooltip-text-z-value"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
              <div class="apexcharts-yaxistooltip-text"></div>
            </div>
          </div>
        </div>
        <div class="chart-periods">
          <span class="active">1M</span>
          <span class="">3M</span>
          <span class="">6M</span>
          <span class="">1Y</span>
          <span class="">ALL</span>
        </div>
      </div>
    </div>
  );
};

export default PlanningTools;
