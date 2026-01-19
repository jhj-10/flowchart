// main.js

// 데이터 정의
let nodeInfo = [
  {
    worklv: "1.5",
    id: "0,0",
    type: "process",
    sequence: "1.5.1",
    title: "소관부서 담당임원 보고",
    desc: "발동요건 도달 시 경영정보시스템, 도달 알림 메일 자동 발송, 담당임원에 해당 사실 보고",
    status: "",
    from: "",
    style: "",
    direction: "",
    label: "",
  },
  {
    worklv: "1.5",
    id: "0,1",
    type: "process",
    sequence: "1.5.2",
    title: "소관부서 담당임원 보고",
    desc: "발동요건 도달 시 경영정보시스템, 도달 알림 메일 자동 발송, 담당임원에 해당 사실 보고",
    status: "Completed",
    from: "0,0",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "0,0",
    type: "system",
    sequence: "",
    title: "발동요건 해당 알림",
    desc: "",
    status: "",
    from: "1,0",
    style: "dashed",
    direction: "up",
    label: "",
  },
  {
    worklv: "1.0",
    id: "1,0",
    type: "system",
    sequence: "1.0",
    title: "발동요건 해당",
    desc: "",
    status: "",
    from: "",
    style: "",
    direction: "",
    label: "",
  },
  {
    worklv: "1.0",
    id: "0,1",
    type: "process",
    sequence: "1.1.1",
    title: "소관부서 담당임원 보고",
    desc: "발동요건 도달 시 경영정보시스템, 도달 알림 메일 자동 발송, 담당임원에 해당 사실 보고",
    status: "Completed",
    from: "0,0",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "0,2",
    type: "process",
    sequence: "1.1.2",
    title: "자체정상화계획 담당부서 및 그룹 리스크분석팀 보고",
    desc: "발동지표 소간부서는 자체정상화계획담당부서와 그룹리스크 분석팀에 발동요건 해당 사실 보고",
    status: "In Progress",
    from: "0,1",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "1,3",
    type: "tag",
    sequence: "1.2.1",
    title: "",
    desc: "",
    status: "In Progress",
    from: "0,2",
    style: "dashed",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "0,4",
    type: "process",
    sequence: "1.1.4",
    title: "상시모니터링 체제 전환(소관부서) 및 보고",
    desc: "발동지표소관부서는 해당 지표 산출 결과 분석 후, 자회사 자체정상화계획 담당부서와 그룹 리스크분석팀에 보고(해당일 지표값, 일별 비교, 전망 등",
    status: "Not Started",
    from: "0,2",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "0,5",
    type: "process",
    sequence: "1.1.5",
    title: "상시모니터링 체제 전환(그룹 리스크분석팀)",
    desc: "그룹리스크분석팀은 발동지표 소관부서로부터 분석 결과 입수 및 상시모니터링 체제 유지",
    status: "Not Started",
    from: "0,4",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "2,2",
    type: "process",
    sequence: "1.1.3",
    title: "해당 발동지표 모니터링 분석",
    desc: "소관부서 해당 발동지표 모니터링 결과(현황, 추이), 예상 변동원인, 특이사항 점검등 분석",
    status: "In Progress",
    from: "0,0",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "2,3",
    type: "in_output",
    sequence: "",
    title: "발동지표 발동요건 분석 및 전망(소관부서)",
    desc: "",
    status: "",
    from: "2,2",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "2,5",
    type: "tag",
    sequence: "1.2.3",
    title: "",
    desc: "",
    status: "",
    from: "2,3",
    style: "dashed",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.0",
    id: "2,5",
    type: "tag",
    sequence: "1.2.3",
    title: "",
    desc: "",
    status: "",
    from: "0,5",
    style: "dashed",
    direction: "down",
    label: "",
  },
  {
    worklv: "1.6",
    id: "0,2",
    type: "tag",
    sequence: "1.5.3",
    title: "",
    desc: "",
    status: "",
    from: "",
    style: "",
    direction: "",
    label: "",
  },
  {
    worklv: "1.6",
    id: "1,0",
    type: "process",
    sequence: "1.6.1",
    title: "위기단계판단 결과 이사회 보고",
    desc: "",
    status: "",
    from: "0,2",
    style: "dashed",
    direction: "down",
    label: "",
  },
  {
    worklv: "1.6",
    id: "1,1",
    type: "process",
    sequence: "1.6.2",
    title: "위기단계판단 결과 금융감독원 공문 작성",
    desc: "",
    status: "",
    from: "0,2",
    style: "dashed",
    direction: "down",
    label: "",
  },
  {
    worklv: "1.6",
    id: "1,3",
    type: "process",
    sequence: "1.6.3",
    title: "위기단계판단 결과 금융감독원 보고",
    desc: "",
    status: "",
    from: "1,1",
    style: "dashed",
    direction: "right",
    label: "",
  },
  {
    worklv: "1.6",
    id: "1,4",
    type: "process",
    sequence: "1.6.4",
    title: "자체정상화위원회 개최결과 자회사 공유",
    desc: "그룹리스크총괄부는 자체정상화위원회의 위기단계 판단결의 결과를 자회사앞 공유",
    status: "",
    from: "0,2",
    style: "dashed",
    direction: "down",
    label: "",
  },
  {
    worklv: "1.6",
    id: "1,2",
    type: "ex_output",
    sequence: "",
    title: "위기단계 판단 결과",
    desc: "",
    status: "",
    from: "",
    style: "",
    direction: "",
    label: "",
  },
  {
    worklv: "1.6",
    id: "2,2",
    type: "tag",
    sequence: "2.1.1 2.1.4",
    title: "",
    desc: "",
    status: "",
    from: "1,0 1,3 1,4",
    style: "dashed",
    direction: "down",
    label: "",
  },
  {
    worklv: "2.1",
    id: "0,0",
    type: "tag",
    sequence: "1.2.3 1.6.1 1.6.3 1.6.4 2.1.5 2.2.3",
    title: "",
    desc: "",
    status: "",
    from: "",
    style: "",
    direction: "",
    label: "",
  },
  {
    worklv: "2.1",
    id: "0,1",
    type: "process",
    sequence: "2.1.1",
    title: "자체정상화수단 분석 및 실행검토",
    desc: "그룹제무기획팀은 발동지표별 개선 목표, 실행가능 핵심 자체정상화수단 및 조달가능 규모, 소유시간 등 분석, 위기장기화 대비 보조수단 실행안 검토",
    status: "Completed",
    from: "0,0",
    style: "dashed",
    direction: "right",
    label: "",
  },
  {
    worklv: "2.1",
    id: "0,2",
    type: "process",
    sequence: "2.1.2",
    title: "자체정상화소위원회 심의 안건 준비",
    desc: "",
    status: "In Progress",
    from: "0,1",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "2.1",
    id: "0,3",
    type: "process",
    sequence: "2.1.3",
    title: "자회사 의사소통 및 보고",
    desc: "",
    status: "Not Started",
    from: "0,2",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "2.1",
    id: "1,3",
    type: "in_output",
    sequence: "",
    title: "자체정상화소위원회 심의 안건",
    desc: "",
    status: "",
    from: "0,3",
    style: "solid",
    direction: "down",
    label: "",
  },
  {
    worklv: "2.1",
    id: "2,1",
    type: "process",
    sequence: "2.1.4",
    title: "자체정상화소위원회 소집",
    desc: "",
    status: "Completed",
    from: "0,0",
    style: "dashed",
    direction: "right",
    label: "",
  },
  {
    worklv: "2.1",
    id: "2,3",
    type: "process",
    sequence: "2.1.5",
    title: "자체정상화소위원회 자체정상화수단 실행 심의",
    desc: "",
    status: "Not Started",
    from: "2,1",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "2.1",
    id: "2,3",
    type: "process",
    sequence: "2.1.5",
    title: "자체정상화소위원회 자체정상화수단 실행 심의",
    desc: "",
    status: "Not Started",
    from: "1,3",
    style: "solid",
    direction: "down",
    label: "",
  },
  {
    worklv: "2.1",
    id: "2,4",
    type: "decision",
    sequence: "",
    title: "심의통과여부",
    desc: "",
    status: "",
    from: "2,3",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "2.1",
    id: "2,5",
    type: "process",
    sequence: "2.1.7",
    title: "자체정상화소위원회 심의 결과 자회사 공유",
    desc: "",
    status: "Not Started",
    from: "2,4",
    style: "solid",
    direction: "right",
    label: "Y",
  },
  {
    worklv: "2.1",
    id: "3,2",
    type: "tag",
    sequence: "2.2.1",
    title: "",
    desc: "",
    status: "",
    from: "2,1",
    style: "dashed",
    direction: "right",
    label: "",
  },
  {
    worklv: "2.1",
    id: "0,5",
    type: "process",
    sequence: "2.1.6",
    title: "그룹 CFO 보고",
    desc: "",
    status: "Not Started",
    from: "2,4",
    style: "solid",
    direction: "right",
    label: "",
  },
  {
    worklv: "2.1",
    id: "3,4",
    type: "tag",
    sequence: "2.1.1 2.1.4",
    title: "",
    desc: "",
    status: "",
    from: "2,4",
    style: "dashed",
    direction: "down",
    label: "N",
  },
  {
    worklv: "1.6",
    id: "1,5",
    type: "process",
    sequence: "2.1.1",
    title: "dashed",
    desc: "",
    status: "",
    from: "0,2",
    style: "solid",
    direction: "down",
    label: "",
  },
];

let filteredNodes = []; // 업무단계로 필터링
let nodes = []; // 노드 배열
let edges = []; // 선 배열
let canvasWidth = 70; // 캔버스 기본 가로사이즈
let canvasHeight = 70; // 캔버스 기본 세로사이즈
const dWidth = 170; // 기본 노드가로사이즈

// 진행현황 옵션
const statusMap = [
  { value: "Not Started", label: "시작전", color: "gray" },
  { value: "In Progress", label: "진행중", color: "orange" },
  { value: "Completed", label: "완료", color: "yellowgreen" },
];

// 캔버스 및 노드간 간격 정의
const layoutConfig = {
  // canvasWidth: 1500,
  // canvasHeight: 350,
  nodeWidth: 170,
  nodeHeight: 70,
  hGap: 60,
  vGap: 50,
};

// 필터링된 배열을 다시 노드 배열과 선 배일로 분리
function separateItems(filteredNodes) {
  let hcnt = 0;
  let wcnt = 0;

  filteredNodes.forEach((node) => {
    const froms = node.from.split(" ");
    const sequence = node.sequence.split(" ");
    const width = node.type === "tag" ? 34 : 180;

    let [row, col] = node.id.split(",");
    hcnt = hcnt < row ? row : hcnt;
    wcnt = wcnt < col ? col : wcnt;

    let height = 70;
    if (node.type === "tag") {
      height = 26 * sequence.length - 8;
    } else if (node.type === "process" || node.type === "decision") {
      height = 80;
    } else if (node.type === "system") {
      height = 40;
    }

    // 노드배열: 노드 중복 체크
    let temp = nodes.find((n) => n.id === node.id);
    if (!temp) {
      nodes.push({
        id: node.id,
        type: node.type,
        sequence: node.sequence,
        title: node.title,
        desc: node.desc,
        status: node.status,
        row: row,
        col: col,
        from: node.from,
        nodeWidth: width,
        nodeHeight: height,
      });
    }

    // 선배열: 선 중복체크
    temp = froms.find((n) => n.to === node.id && n.from === node.from);
    if (!temp) {
      froms.forEach((from) => {
        if (from !== "") {
          edges.push({
            from: from,
            to: node.id,
            style: node.style,
            direction: node.direction,
            label: node.label,
          });
        }
      });
    }
  });

  canvasWidth = 230 * (Number(wcnt) + 1);
  canvasHeight = 120 * (Number(hcnt) + 1) - 30;
  // layoutConfig.canvasHeight = canvasHeight;
}

// row/col → x,y 좌표 계산
function layoutNodes(nodes, layout) {
  return nodes.map((node) => {
    let w = node.nodeWidth;
    let h = node.nodeHeight;

    const x =
      node.col % 1 === 0 && node.type !== "tag"
        ? node.col * (dWidth + layout.hGap)
        : node.col * (dWidth + layout.hGap) + dWidth / 2 - 12;

    let y = node.row * (70 + layout.vGap);

    if (node.col % 1 !== 0) {
      // y = node.row * (70 + layout.vGap) + node.nodeHeight * 0.8;
    } else if (node.type === "tag" && node.from !== "") {
      y = node.row * (70 + layout.vGap) + 25;
    } else if (node.type === "system") {
      y = node.row * (70 + layout.vGap) + 20;
    }

    return {
      ...node,
      x,
      y,
      width: w,
      height: h,
    };
  });
}

// sequence, title, desc 줄바꿈 설정
function wrapText(text, maxWidth, fontSize = 14, fontFamily = "Malgun Gothic") {
  if (!text) return [];

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `${fontSize}px ${fontFamily}`;

  const words = text.split(" ");
  let line = "";
  const lines = [];

  for (let word of words) {
    const testLine = line ? line + " " + word : word;
    const width = ctx.measureText(testLine).width;

    if (width > maxWidth) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);

  return lines;
}

// sequence, title 중앙정렬
function renderCenteredTspans(xCenter, startY, lines, lineHeight) {
  return lines
    .map((line, i) => {
      const y = startY + i * lineHeight;
      return `<tspan x="${xCenter}" y="${y}">${line}</tspan>`;
    })
    .join("");
}

// 노드 렌더링
function renderNode(node) {
  // tag: sequence만 입력시
  if (node.type === "tag") {
    const sequenceList = node.sequence.split(" ");

    let rectX = node.x;
    let rectY = node.y;

    let sequenceX = rectX + 4;
    let sequenceY = rectY + 14;
    let sequenceSvg = "";

    for (let i = 0; i < sequenceList.length; i++) {
      const sequence = sequenceList[i];
      rectY = i > 0 ? rectY + 20 : rectY;
      sequenceY = rectY + 14;
      sequenceSvg += `
        <rect
          x="${rectX}"
          y="${rectY}"
          width="34"
          height="18"
          rx="2"
          ry="2"
          fill="#000"
        />

        <text  
          x="${sequenceX}"
          y="${sequenceY}"
          class="sequence">
          ${sequence}
        </text>

        `;
    }

    return `
      <g>
        ${sequenceSvg}
      </g>
    `;
  }

  // process: 프로세스, 사각형
  if (node.type === "process") {
    const innerWidth = node.width - 10; // 좌우 5px 여유

    // 줄바꿈된 라인들 계산
    const sequenceLines = wrapText(node.sequence || "", innerWidth, 14);
    const titleLines = wrapText(node.title || "", innerWidth, 14);
    const descLines = wrapText(node.desc || "", innerWidth, 12);

    // sequence / title 시작 Y 위치 (사각형 안)
    // 첫 줄 baseline
    let centerX = node.x + 4;
    let currentY = node.y + 14;

    // sequence 아래 간격
    const sequenceSvg = renderCenteredTspans(
      centerX,
      currentY,
      sequenceLines,
      18
    );
    centerX = node.x + node.width / 2;
    currentY += sequenceLines.length * 18;

    // title은 끝까지 rectangle 안에, desc는 rectangle 밖에
    const titleSvg = renderCenteredTspans(
      centerX,
      currentY + 8,
      titleLines,
      18
    );

    const titleX = node.x;
    const titleY = node.y + 10;

    const color = statusMap.find((s) => s.value === node.status)?.color;

    return `
      <g data-node-id="${node.id}" cursor="pointer">
        <!-- 사각형 -->
        <rect
          x="${titleX}"
          y="${titleY}"
          width="${node.width}"
          height="${node.height - 10}"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />

        <rect
          x="${node.x}"
          y="${node.y}"
          width="34"
          height="18"
          rx="2"
          ry="2"
          fill="#000"
        />

        <rect
          x="${node.x + 38}"
          y="${node.y}"
          width="18"
          height="18"
          rx="9"
          ry="9"
          fill="${color}"
        />

        <!-- 제목(sequence), 본문(title): 가운데 정렬 -->
        <text class="sequence">
          ${sequenceSvg}
        </text>
        <text class="title">
          ${titleSvg}
        </text>
      </g>
    `;
  }

  // decision: 판단/조건, 다이아몬드
  if (node.type === "decision") {
    const innerWidth = node.width - 30; // 좌우 5px 여유

    const cx = node.x + node.width / 2;
    const cy = node.y + node.height / 2;
    const w2 = node.width / 2;
    const h2 = node.height / 2;

    // 줄바꿈된 라인 계산
    const titleLines = wrapText(node.title || "", innerWidth, 14);

    // title은 끝까지 rectangle 안에, desc는 rectangle 밖에
    const titleSvg = renderCenteredTspans(cx, cy, titleLines, 18);

    return `
      <g>
        <path
          d="M${cx} ${cy - h2} ${cx + w2} ${cy} ${cx} ${cy + h2} ${
      cx - w2
    } ${cy}Z"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />
        <text class="title">
          ${titleSvg}
        </text>
      </g>
    `;
  }

  // system: 시스템/시작/종료, 둥근 사각형
  if (node.type === "system") {
    const innerWidth = node.width - 10; // 좌우 5px 여유

    // 줄바꿈된 라인들 계산
    const titleLines = wrapText(node.title || "", innerWidth, 14);

    // 첫 줄 baseline
    let centerX = node.x + node.width / 2;
    let currentY = node.y + node.height / 2 + 5;

    // title은 끝까지 rectangle 안에, desc는 rectangle 밖에
    const titleSvg = renderCenteredTspans(centerX, currentY, titleLines, 18);

    const rx = 14;
    return `
      <g>
        <rect
          x="${node.x}"
          y="${node.y}"
          width="${node.width}"
          height="${node.height}"
          rx="${rx}"
          ry="${rx}"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />
        <text class="title">
          ${titleSvg}
        </text>
      </g>
    `;
  }

  // in_output: 내부산출물, 물결사각형
  if (node.type === "in_output") {
    const innerWidth = node.width - 10; // 좌우 5px 여유

    // 줄바꿈된 라인들 계산
    const titleLines = wrapText(node.title || "", innerWidth, 14);

    // 첫 줄 baseline
    let centerX = node.x + node.width / 2;
    let currentY = node.y + node.height / 2;

    // title은 끝까지 rectangle 안에, desc는 rectangle 밖에
    const titleSvg = renderCenteredTspans(centerX, currentY, titleLines, 18);

    const x1 = node.x;
    const y1 = node.y;

    const x2 = node.x + node.width;
    const y2 = node.y + node.height;

    const path = `M${x1} ${y1} ${x2} ${y1} ${x2} ${y2} 
    C${(x1 + x2) / 2} ${y2} ${(x1 + x2) / 2} ${y2 + 20} ${x1} ${y2}Z`;

    return `
      <g>
        <rect
          x="${node.x}"
          y="${node.y}"
          width="${node.width}"
          height="${node.height + 10}"
          fill="#FFFFFF"
          />
          <path
          d="${path}"
          stroke-width="1"
          stroke-miterlimit="8"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />
        <text class="title">
          ${titleSvg}
        </text>
      </g>
    `;
  }

  // ex_output: 외부산출물, 물결사각형3개
  if (node.type === "ex_output") {
    const innerWidth = node.width - 10; // 좌우 5px 여유

    // 줄바꿈된 라인들 계산
    const titleLines = wrapText(node.title || "", innerWidth, 14);

    // 첫 줄 baseline
    let centerX = node.x + node.width / 2;
    let currentY = node.y + node.height / 2;

    // title은 끝까지 rectangle 안에, desc는 rectangle 밖에
    const titleSvg = renderCenteredTspans(
      centerX,
      currentY + 10,
      titleLines,
      18
    );

    const x1 = node.x + 10;
    const y1 = node.y;

    const x2 = node.x + 10 + node.width;
    const y2 = node.y + node.height - 5;

    const path1 = `M${x1} ${y1} ${x2} ${y1} ${x2} ${y2} 
    C${(x1 + x2) / 2} ${y2} ${(x1 + x2) / 2} ${y2 + 20} ${x1} ${y2}Z`;

    const path2 = `M${x1 - 5} ${y1 + 5} ${x2 - 5} ${y1 + 5} ${x2 - 5} ${y2 + 5} 
    C${(x1 + x2) / 2} ${y2} ${(x1 + x2) / 2} ${y2 + 20} ${x1 - 5} ${y2 + 5}Z`;

    const path3 = `M${x1 - 10} ${y1 + 10} ${x2 - 10} ${y1 + 10} ${x2 - 10} ${
      y2 + 10
    } 
    C${(x1 - 10 + x2 - 10) / 2} ${y2 + 10} ${(x1 - 10 + x2 - 10) / 2} ${
      y2 + 30
    } ${x1 - 10} ${y2 + 10}Z`;

    return `
      <g>
        <rect
          x="${x1}"
          y="${y1}"
          width="${node.width}"
          height="${node.height + 10}"
          fill="#FFFFFF"
          />
          <path
          d="${path1}"
          stroke-width="1"
          stroke-miterlimit="8"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />
        
        <rect
          x="${x1 - 5}"
          y="${y1 + 5}"
          width="${node.width}"
          height="${node.height + 10}"
          fill="#FFFFFF"
          />
          <path
          d="${path2}"
          stroke-width="1"
          stroke-miterlimit="8"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />

        <rect
          x="${x1 - 10}"
          y="${y1 + 10}"
          width="${node.width}"
          height="${node.height + 10}"
          fill="#FFFFFF"
          />
          <path
          d="${path3}"
          stroke-width="1"
          stroke-miterlimit="8"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />
        
        <text class="title">
          ${titleSvg}
        </text>
      </g>
    `;
  }
}

// 라인 렌더링
function renderEdge(edge, nodeMap) {
  const fromNode = nodeMap[edge.from];
  const toNode = nodeMap[edge.to];
  const dir = edge.direction;

  if (!fromNode || !toNode) return "";

  let x1 = 0;
  let y1 = 0;
  let x2 = 0;
  let y2 = 0;
  let arrow = "arrowhead";

  const fromNodeHeight = fromNode.height > 80 ? 40 : fromNode.height / 2;
  const toNodeHeight = toNode.height > 80 ? 40 : toNode.height / 2;

  if (dir === "left") {
    x1 = toNode.x;
    y1 = toNode.y + toNodeHeight;

    x2 = fromNode.x + fromNode.width;
    y2 = fromNode.y + fromNodeHeight;

    arrow = dir === "left" ? "arrowhead-left" : "arrowhead";
  }

  if (dir === "right") {
    x1 = fromNode.x + fromNode.width;
    y1 = fromNode.y + fromNodeHeight;

    x2 = toNode.x;
    y2 = fromNode.y === toNode.y ? y1 : toNode.y + toNodeHeight;
  }

  if (dir === "down") {
    x1 = fromNode.x + fromNode.width / 2;
    y1 = fromNode.y + fromNode.height;

    x2 = toNode.x + toNode.width / 2;
    y2 = toNode.y;
  }

  if (dir === "up") {
    x1 = fromNode.x + fromNode.width / 2;
    y1 = fromNode.y;

    x2 = toNode.x + toNode.width / 2;
    y2 = toNode.y + toNode.height;
  }

  const [fromRow, fromCol] = fromNode.id.split(",").map(Number);
  const [toRow, toCol] = toNode.id.split(",").map(Number);

  const sameRow = fromRow === toRow;
  const sameCol = fromCol === toCol;

  // 3) path d 만들기
  // 기본값: 우측화살표 ->
  let d = `M${x1} ${y1} L${x2} ${y2}`;
  if (sameRow || sameCol) {
    d = `M${x1} ${y1} L${x2} ${y2}`;
  } else if (dir === "right") {
    const midX = x1 + 25;
    d = `M${x1} ${y1} L${midX} ${y1} L${midX} ${y2} L${x2} ${y2}`;
  } else if (dir === "down") {
    const midY = (y1 + y2) / 2;
    d = `M${x1} ${y1} L${x1} ${midY} L${x2} ${midY} L${x2} ${y2}`;
  }

  const isDashed = edge.style === "dashed" ? 'stroke-dasharray="4 2"' : "";

  const labelX = edge.direction === "right" ? x1 + 10 : (x1 + x2) / 2 - 14;
  const labelY = edge.direction === "right" ? (y1 + y2) / 2 - 5 : y1 + 20;

  return `
    <g>
      <path
        d="${d}"
        stroke="#000"
        stroke-width="1"
        ${isDashed}
        fill="none"
        marker-end="url(#${arrow})"
      />
      ${
        edge.label
          ? `
        <text
          font-family="Malgun Gothic, sans-serif"
          font-size="14"
          x="${labelX}"
          y="${labelY}"
          text-anchor="middle"
        >
          ${edge.label}
        </text>
      `
          : ""
      }
    </g>
  `;
}

// SVG 문자열 만들기
function renderFlowchartSvg(flowData) {
  const laidOutNodes = layoutNodes(flowData.nodes, flowData.layout);

  const nodeMap = {};
  laidOutNodes.forEach((n) => {
    nodeMap[n.id] = n;
  });

  const nodeSvg = laidOutNodes.map(renderNode).join("\n");
  const edgeSvg = flowData.edges.map((e) => renderEdge(e, nodeMap)).join("\n");

  return `
  <svg
      width="${canvasWidth}"
      height="${canvasHeight}"
      xmlns="http://www.w3.org/2000/svg"
      overflow="hidden"
    >
      <!-- 화살표 마크 -->
      <defs>
        <marker
          id="arrowhead"
          markerWidth="7"
          markerHeight="7"
          refX="7"
          refY="3.5"
          orient="auto"
          markerUnits="strokeWidth"
          >
          <polygon points="0 0, 7 3.5, 0 7" fill="#000" />
        </marker>
        <marker
          id="arrowhead-left"
          markerWidth="7"
          markerHeight="7"
          refX="7"
          refY="3.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="#000" />
        </marker>
      </defs>
      <g>
        <rect
          x="0"
          y="0"
          fill="#FFFFFF"
        />
        ${edgeSvg}
        ${nodeSvg}
      </g>
    </svg>
  `;
}

// DOM에 넣기
function renderOrgChart(containerId, flowData) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error("지정한 ID의 요소를 찾을 수 없습니다:", containerId);
    return;
  }

  container.innerHTML = renderFlowchartSvg(flowData);
}

// 플로우차트 새로고침
function refreshFlowchart() {
  const flowData = { nodes, edges, layout: layoutConfig };

  renderOrgChart("workflow", flowData);
  activateNodeEvents();
}

let nodeId = null;
function activateNodeEvents() {
  const svg = document.querySelector("#workflow svg");
  if (!svg) return;

  // 이벤트 위임(추천): svg 하나에만 리스너 달기
  svg.onclick = (e) => {
    const g = e.target.closest("g[data-node-id]");
    if (!g) return;

    if (nodeId) {
      const prev = svg.querySelector(`g[data-node-id="${nodeId}"]`);
      if (prev) prev.classList.remove("is-selected");
    }

    // 2) 새 선택 적용
    nodeId = g.getAttribute("data-node-id");
    g.classList.add("is-selected");

    renderDetailView(nodeId);
  };
}

const workLevelSelect = document.getElementById("work-level");

// 업무단계 옵션선택 시 실행함수
function runBySelectedWorkLevel(worklv) {
  filteredNodes = nodeInfo.filter((item) => item.worklv === worklv);

  // 노드배열, 선배열 초기화
  nodes = [];
  edges = [];

  // 노드배열, 선배열 분리
  separateItems(filteredNodes);

  // 워크플로우 재로딩
  refreshFlowchart();
}

// 업무단계 변경 이벤트: 워크플로우 다시 그리기, 노드 상세보기 숨기기
workLevelSelect.addEventListener("change", (e) => {
  canvasHeight = 70;
  runBySelectedWorkLevel(e.target.value);
  document.getElementById("workflow-view").classList.add("hidden");
});

// 페이지로드 이벤트
document.addEventListener("DOMContentLoaded", () => {
  canvasHeight = 70;
  runBySelectedWorkLevel(workLevelSelect.value);
});

// 노드 상세보기
function renderDetailView(nodeId) {
  const node = nodes.find((n) => n.id === nodeId);
  if (!node) return;

  document.getElementById("workflow-view").classList.remove("hidden");

  const view = document.getElementById("workflow-view");
  if (!view) return;

  // nodeInfo 원본까지 같이 보고 싶으면 (worklv/ from / style 등 포함)
  const raw = nodeInfo.find(
    (x) => x.worklv === workLevelSelect.value && x.id === nodeId
  );

  const options = statusMap
    .map(
      (s) =>
        `<option value="${s.value}" ${
          node.status === s.value ? "selected" : ""
        }>${s.label}</option>`
    )
    .join("");

  // 상세보기 html 작성
  view.innerHTML = `
    <form method="" class="form-example">
      <div><b style="font-size:18px">${node.sequence || ""} ${
    node.title || ""
  }</b></div>
      <div><b>업무상세</b>: ${node.desc || ""}</div>
      <div id="statusdiv" style="width: 200px;">
        <label for="status"><b>진행현황</b>: </label>
        <select id="status" name="status">
          ${options}
        </select>
      </div>
      <div><b>담당부서</b>: </div>
      <div><b>유관부서</b>: </div>
      <button type="submit">저장</button>
    </form>
  `;

  // 진행현황 배경색상변경
  changeColor(node.status);

  // 저장버튼 클릭시 이벤트
  const form = document.querySelector(".form-example");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    saveWorkflow(nodeId);
  });
}

// 진행현황 값에 따라 배경색상변경
function changeColor(value) {
  const color = statusMap.find((s) => s.value === value)?.color;
  document.getElementById("statusdiv").style.backgroundColor = color;
}

// 진행현황변경시 색상변경
document.getElementById("workflow-view").addEventListener("change", (e) => {
  if (e.target && e.target.id === "status") {
    changeColor(e.target.value);
  }
});

// 상세보기 > 저장
function saveWorkflow(nodeId) {
  const status = document.getElementById("status").value;

  const node = nodes.find((n) => n.id === nodeId);
  if (!node) return;

  // 진행현황 값 저장
  node.status = status;
  alert("저장완료!");

  refreshFlowchart();
}
