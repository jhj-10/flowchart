// main.js

// 1. 순서도 데이터 정의
let nodes = [
  {
    id: "0,0",
    type: "terminator",
    title: "1.0",
    main: "발동요건 해당",
    row: 0,
    col: 0,
  },
  {
    id: "1,0",
    type: "terminator",
    title: "1.0",
    main: "발동요건 해당",
    row: 1,
    col: 0,
  },
  {
    id: "0,1",
    type: "process",
    title: "1.1.1",
    main: "소관부서 담당임원 보고",
    desc: "발동요건 도달 시 경영정보 시스템 도달 알림 메일 자동 발송",
    row: 0,
    col: 1,
  },
  {
    id: "0,2",
    type: "process",
    title: "1.1.2",
    main: "자체정상화 계획 및 보고",
    desc: "발동요건 도달 시 경영정보 시스템 도달 알림 메일 자동 발송",
    row: 0,
    col: 2,
  },
  {
    id: "1,1",
    type: "process",
    title: "1.1.3",
    main: "자체정상화 계획 및 보고서제출",
    desc: "발동요건 도달 시 경영정보 시스템 도달 알림 메일 자동 발송",
    row: 1,
    col: 1,
  },
  {
    id: "1,2",
    type: "decision",
    main: "심의통과 여부",
    row: 1,
    col: 2,
  },
  {
    id: "1,3",
    type: "process",
    title: "1.1.3",
    main: "자체정상화 계획 및 보고",
    desc: "발동요건 도달 시 경영정보 시스템 도달 알림 메일 자동 발송",
    row: 1,
    col: 3,
  },
  {
    id: "0,0.5",
    type: "tag",
    title: "1.1.3 2.1.1",
    main: "",
    desc: "",
    row: 0,
    col: 1.5,
  },
  {
    id: "2,3",
    type: "tag",
    title: "1.1.3 2.1.1",
    main: "",
    desc: "",
    row: 2,
    col: 3,
  },
  {
    id: "2,2",
    type: "process",
    title: "1.1.3",
    main: "자체정상화 계획 및 보고",
    desc: "발동요건 도달 시 경영정보 시스템 도달 알림 메일 자동 발송",
    row: 2,
    col: 2,
  },
  {
    id: "1,4",
    type: "tag",
    title: "1.1.3 2.1.1",
    main: "",
    desc: "",
    row: 1,
    col: 4,
  },
];

let edges = [
  { from: "0,0", to: "0,1", style: "solid", direction: "right" },
  { from: "0,1", to: "0,2", style: "solid", direction: "right" },
  { from: "0,0", to: "1,1", style: "solid", direction: "right" },
  { from: "1,1", to: "1,2", style: "solid", direction: "right" },
  { from: "1,2", to: "1,3", style: "solid", direction: "right", label: "Y" },
  { from: "1,2", to: "2,2", style: "dashed", direction: "down", label: "N" },
  { from: "0,1", to: "0,0.5", style: "dashed", direction: "right" },
  { from: "1,2", to: "2,3", style: "dashed", direction: "right" },
  { from: "1,3", to: "1,4", style: "solid", direction: "right" },
];

const layoutConfig = {
  canvasWidth: 1280,
  canvasHeight: 720,
  nodeWidth: 170,
  nodeHeight: 70,
  hGap: 80,
  vGap: 50,
};

// row/col → x,y 좌표 계산
function layoutNodes(nodes, layout) {
  return nodes.map((node) => {
    const x =
      node.col % 1 === 0
        ? node.col * (layout.nodeWidth + layout.hGap)
        : node.col * (layout.nodeWidth + layout.hGap) + layout.nodeWidth / 2;
    const y =
      node.col % 1 !== 0
        ? node.row * (layout.nodeHeight + layout.vGap) + layout.nodeHeight * 0.8
        : node.type === "tag"
        ? node.row * (layout.nodeHeight + layout.vGap) + layout.nodeHeight / 4
        : node.row * (layout.nodeHeight + layout.vGap);

    return {
      ...node,
      x,
      y,
      width: layout.nodeWidth,
      height: layout.nodeHeight,
    };
  });
}

// title, main, desc 줄바꿈 설정
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

// title, main 중앙정렬
function renderCenteredTspans(xCenter, startY, lines, lineHeight) {
  return lines
    .map((line, i) => {
      const y = startY + i * lineHeight;
      return `<tspan x="${xCenter}" y="${y}">${line}</tspan>`;
    })
    .join("");
}

// desc 좌측정렬
function renderRightTspans(xLeft, startY, lines, lineHeight) {
  return lines
    .map((line, i) => {
      const y = startY + i * lineHeight;
      return `<tspan x="${xLeft}" y="${y}">${line}</tspan>`;
    })
    .join("");
}

// 노드 렌더링
function renderNode(node) {
  // 입력없음: 기본값
  if (node.type === "tag") {
    let rectX = node.x;
    let rectY = node.y;
    let titleX = node.x + 4;
    let titleY = node.y + 14;
    const titleList = node.title.split(" ");
    let titleSvg = "";

    for (let i = 0; i < titleList.length; i++) {
      const title = titleList[i];
      rectY = rectY + 20 * i;
      titleY = rectY + 14;
      titleSvg += `
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
          x="${titleX}"
          y="${titleY}"
          class="title">
          ${title}
        </text>

        `;
    }

    return `
      <g data-node-id="${node.id}">
        ${titleSvg}
      </g>
    `;
  }

  // process: 사각형
  if (node.type === "process") {
    const innerWidth = node.width - 10; // 좌우 5px 여유

    // 줄바꿈된 라인들 계산
    const titleLines = wrapText(node.title || "", innerWidth, 14);
    const mainLines = wrapText(node.main || "", innerWidth, 14);
    const descLines = wrapText(node.desc || "", innerWidth, 12);

    // title / main 시작 Y 위치 (사각형 안)
    // 첫 줄 baseline
    let centerX = node.x - 10;
    let currentY = node.y + 20;

    // title 아래 간격
    const titleSvg = renderCenteredTspans(centerX, currentY, titleLines, 18);
    centerX = node.x + node.width / 2;
    currentY += titleLines.length * 18 + 4;

    // main은 끝까지 rectangle 안에, desc는 rectangle 밖에
    const mainSvg = renderCenteredTspans(centerX, currentY, mainLines, 18);

    // desc는 사각형 아래 + 왼쪽 정렬
    const descStartY = node.y + node.height + 20;
    const descLeftX = node.x + 5;

    const descSvg = renderRightTspans(descLeftX, descStartY, descLines, 14);

    const idRectX = node.x - 14;
    const idRectY = node.y + 7;

    return `
      <g data-node-id="${node.id}">
        <!-- 사각형 -->
        <rect
          x="${node.x}"
          y="${node.y}"
          width="${node.width}"
          height="${node.height}"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />

        <rect
          x="${idRectX}"
          y="${idRectY}"
          width="34"
          height="18"
          rx="2"
          ry="2"
          
          fill="#000"
        />

        <!-- 제목(title), 본문(main): 가운데 정렬 -->
        <text class="title">
          ${titleSvg}
        </text>
        <text class="main">
          ${mainSvg}
        </text>
        
        <!-- desc: 박스 아래, 오른쪽 정렬 -->
        <!--
        ${
          descLines.length
            ? `
        <text
          font-family="Malgun Gothic, sans-serif"
          font-size="12"
          fill="#555"
        >
          ${descSvg}
        </text>
        `
            : ""
        }
        -->
      </g>
    `;
  }

  // decision: 다이아몬드
  if (node.type === "decision") {
    const cx = node.x + node.width / 2;
    const cy = node.y + node.height / 2;
    const w2 = node.width / 2;
    const h2 = node.height / 2;

    return `
      <g data-node-id="${node.id}">
        <path
          d="M${cx} ${cy - h2} ${cx + w2} ${cy} ${cx} ${cy + h2} ${
      cx - w2
    } ${cy}Z"
          stroke="#000"
          stroke-width="1"
          fill="#FFFFFF"
        />
        <text
          font-family="Malgun Gothic, sans-serif"
          font-size="14"
          x="${cx}"
          y="${cy}"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          ${node.main}
        </text>
      </g>
    `;
  }

  // terminator: 둥근 사각형
  if (node.type === "terminator") {
    const rx = 14;
    return `
      <g data-node-id="${node.id}">
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
        <text
          font-family="Malgun Gothic, sans-serif"
          font-size="14"
          x="${node.x + node.width / 2}"
          y="${node.y + node.height / 2}"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          ${node.main}
        </text>
      </g>
    `;
  }

  return "";
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

  console.log(dir);
  if (dir === "right") {
    x1 = fromNode.x + fromNode.width;
    y1 = fromNode.y + fromNode.height / 2;

    x2 = toNode.x;
    y2 =
      edge.to.indexOf(".") < 0
        ? toNode.y + toNode.height / 2
        : toNode.y + toNode.height / 4;
  }

  if (dir === "down") {
    x1 = fromNode.x + fromNode.width / 2;
    y1 = fromNode.y + fromNode.height;

    x2 = toNode.x + fromNode.width / 2;
    y2 = toNode.y;
  }

  const [fromRow, fromCol] = fromNode.id.split(",").map(Number);
  const [toRow, toCol] = toNode.id.split(",").map(Number);

  const sameRow = fromRow === toRow;
  const sameCol = fromCol === toCol;

  // 3) path d 만들기
  // 기본값: 우측화살표 ->
  let d = `M${x1} ${y1} L${x2} ${y1}`;

  // 방향 및 꺾은선
  if (!(sameRow && fromCol + 1 == toCol)) {
    if (dir === "right") {
      const midX = (x1 + x2) / 2;
      d = `M${x1} ${y1} L${midX} ${y1} L${midX} ${y2} L${x2} ${y2}`;
    } else if (dir === "down") {
      d = `M${x1} ${y1} L${x2} ${y2}`;
    }
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
        marker-end="url(#arrowhead)"
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
      width="${flowData.layout.canvasWidth}"
      height="${flowData.layout.canvasHeight}"
      xmlns="http://www.w3.org/2000/svg"
      overflow="hidden"
    >
      <!-- 화살표 마크 -->
      <defs>
        <marker
          id="arrowhead"
          markerWidth="5"
          markerHeight="5"
          refX="5"
          refY="2.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 5 2.5, 0 5" fill="#000" />
        </marker>
      </defs>
      <g>
        <rect
          x="0"
          y="0"
          width="${flowData.layout.canvasWidth}"
          height="${flowData.layout.canvasHeight}"
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

function refreshFlowchart() {
  const flowData = {
    nodes,
    edges,
    layout: layoutConfig,
  };

  renderOrgChart("org-chart", flowData);
  activateNodeEvents();
}

// 노드 메뉴 표시
let currentNodeId = null;

function showNodeMenu(nodeId, element) {
  const menu = document.getElementById("node-menu");
  currentNodeId = nodeId;

  const box = element.getBoundingClientRect();

  menu.style.left = box.right + 10 + "px";
  menu.style.top = box.top + "px";

  menu.classList.remove("hidden");
}

function addNodeAndEdgeFromForm(formData) {
  const type = formData.get("type");
  const row = parseInt(formData.get("row"), 10);
  const col = parseFloat(formData.get("col"));
  const title = formData.get("title") || "";
  const main = formData.get("main") || "";
  const desc = formData.get("desc") || "";

  const fromId = formData.get("fromId") || "";
  const direction = formData.get("direction") || "right";
  const style = formData.get("style") || "solid";
  const label = formData.get("label") || "";

  const id = `${row},${col}`;

  // 이미 같은 id가 있으면 막기
  if (nodes.some((n) => n.id === id)) {
    alert(`이미 존재하는 Node ID 입니다: ${id}`);
    return;
  }

  // 새 노드 구성
  const newNode = {
    id,
    type,
    title,
    main,
    desc,
    row,
    col,
  };

  nodes.push(newNode);

  // fromId가 입력된 경우, edge도 같이 추가
  if (fromId) {
    const fromNode = nodes.find((n) => n.id === fromId);
    if (!fromNode) {
      alert(`fromId에 해당하는 노드를 찾을 수 없습니다: ${fromId}`);
    } else {
      const newEdge = {
        from: fromId,
        to: id,
        style,
        direction,
      };
      if (label) newEdge.label = label;
      edges.push(newEdge);
    }
  }

  // 다시 그리기
  refreshFlowchart();
}

document.addEventListener("DOMContentLoaded", () => {
  const btnAddNode = document.getElementById("btn-add-node");
  const modal = document.getElementById("node-modal");
  const form = document.getElementById("node-form");
  const btnCancel = document.getElementById("btn-node-cancel");

  if (!btnAddNode || !modal || !form || !btnCancel) {
    console.warn("노드 추가 UI 요소를 찾을 수 없습니다.");
    return;
  }

  function openModal() {
    modal.classList.remove("hidden");
  }

  function closeModal() {
    modal.classList.add("hidden");
    form.reset();
  }

  btnAddNode.addEventListener("click", () => {
    openModal();
  });

  btnCancel.addEventListener("click", () => {
    closeModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addNodeAndEdgeFromForm(new FormData(form));
    closeModal();
  });
});

// 노드, 선 렌더 후 노트클릭 이벤트 처리(상세보기/노드추가/노드삭제 모달창)
function activateNodeEvents() {
  const svg = document.querySelector("#org-chart svg");
  if (!svg) return;

  const nodeElements = svg.querySelectorAll("[data-node-id]");
  nodeElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const nodeId = el.getAttribute("data-node-id");
      showNodeMenu(nodeId, el);
    });
  });
}

// 화면아무데나 클릭하면 메뉴 사라짐
document.addEventListener("click", () => {
  document.getElementById("node-menu").classList.add("hidden");
});

// 노드클릭 > 상세보기
document.getElementById("btn-view").addEventListener("click", () => {
  const node = nodes.find((n) => n.id === currentNodeId);
  if (!node) return;

  const body = document.getElementById("detail-body");
  body.innerHTML = `
    <p><b>ID:</b> ${node.id}</p>
    <p><b>Type:</b> ${node.type}</p>
    <p><b>Title:</b> ${node.title}</p>
    <p><b>Main:</b> ${node.main}</p>
    <p><b>Desc:</b> ${node.desc}</p>
  `;

  document.getElementById("detail-modal").classList.remove("hidden");
});

// 노드클릭 > 상세보기 > 확인
document.getElementById("btn-close-detail").addEventListener("click", () => {
  document.getElementById("detail-modal").classList.add("hidden");
});

// 노드클릭 > 노드추가
document.getElementById("btn-add").addEventListener("click", () => {
  document.getElementById("add-modal").classList.remove("hidden");
});

// 노드클릭 > 노드추가 > 저장
document.getElementById("add-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  const node = nodes.find((n) => n.id === currentNodeId);

  const direction = form.get("direction");

  let newRow = node.row;
  let newCol = node.col;

  if (direction === "right") newCol += 1;
  if (direction === "down") newRow += 1;

  const newId = `${newRow},${newCol}`;

  // 이미 그 위치에 노드가 있다면 중복 방지
  const exists = nodes.some((n) => n.id === newId);
  if (exists) {
    alert("이미 해당 위치에 노드가 있습니다:", newId);
    return;
  }

  nodes.push({
    id: newId,
    type: form.get("type"),
    title: form.get("title"),
    main: form.get("main"),
    desc: form.get("desc"),
    row: newRow,
    col: newCol,
  });

  edges.push({
    from: node.id,
    to: newId,
    style: "solid",
    direction: direction,
  });

  document.getElementById("add-modal").classList.add("hidden");
  refreshFlowchart();
});

// 노드클릭 > 노드추가 > 취소
document.getElementById("btn-close-add").addEventListener("click", (e) => {
  document.getElementById("add-modal").classList.add("hidden");
});

// 노드클릭 > 노드삭제
document.getElementById("btn-delete").addEventListener("click", () => {
  if (!currentNodeId) return;

  // 노드 삭제
  nodes = nodes.filter((n) => n.id !== currentNodeId);

  // 관련 edge 삭제
  edges = edges.filter(
    (e) => e.from !== currentNodeId && e.to !== currentNodeId
  );

  refreshFlowchart();
});

refreshFlowchart();
