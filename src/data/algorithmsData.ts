import { AlgorithmDetail } from './types'

export const algorithmsData: AlgorithmDetail[] = [
  {
    id: 0,
    number: '00',
    title: '알고리즘 기초',
    description: '알고리즘의 개념과 시간·공간 복잡도 등 문제 해결의 기본을 다룹니다.',
    concept: '알고리즘은 문제를 해결하기 위한 명확한 절차입니다. 효율성은 시간 복잡도(얼마나 빠른가)와 공간 복잡도(얼마나 많은 메모리를 사용하는가)로 측정됩니다.',
    examples: [
      {
        title: 'Big O 표기법',
        description: '알고리즘의 성능을 나타내는 표기법입니다.',
        code: `// O(1) - 상수 시간
const getFirst = (arr: number[]) => arr[0];

// O(n) - 선형 시간
const findMax = (arr: number[]) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

// O(n²) - 이차 시간
const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};`
      }
    ],
    applications: [
      '알고리즘 성능 분석',
      '효율적인 코드 작성',
      '문제 해결 전략 수립',
      '최적화 가능 여부 판단'
    ]
  },
  {
    id: 1,
    number: '01',
    title: '배열과 반복',
    description: '배열을 순회하며 데이터를 처리하는 가장 기본적인 알고리즘 패턴입니다.',
    concept: '배열은 연속된 메모리 공간에 같은 타입의 데이터를 저장하는 자료구조입니다. 반복문을 통해 배열의 각 요소에 접근하고 처리할 수 있습니다.',
    interactive: true,
    interactiveComponent: 'Chapter01',
    examples: [
      {
        title: '배열 순회 및 필터링',
        description: 'map, filter, reduce 등의 고차 함수를 활용한 배열 처리',
        code: `const numbers = [1, 2, 3, 4, 5];

// map - 각 요소 변환
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - 조건에 맞는 요소 선택
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - 누적 계산
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15`
      },
      {
        title: 'Two Pointer 기법',
        description: '두 개의 포인터를 사용하여 배열을 효율적으로 탐색',
        code: `// 정렬된 배열에서 두 수의 합 찾기
function twoSum(arr: number[], target: number): [number, number] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}`
      }
    ],
    applications: [
      '데이터 변환 및 가공',
      '조건부 필터링',
      '통계 계산',
      'Two Pointer 알고리즘',
      'Sliding Window 패턴'
    ]
  },
  {
    id: 2,
    number: '02',
    title: '정렬',
    description: '데이터를 일정한 기준에 따라 정렬하는 알고리즘을 학습합니다.',
    concept: '정렬은 데이터를 특정 순서로 배열하는 과정입니다. 다양한 정렬 알고리즘이 있으며, 각각 시간 복잡도와 공간 복잡도가 다릅니다.',
    examples: [
      {
        title: 'Quick Sort (빠른 정렬)',
        description: '평균 O(n log n)의 효율적인 정렬 알고리즘',
        code: `function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// 사용 예
const unsorted = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(unsorted));
// [11, 12, 22, 25, 34, 64, 90]`
      },
      {
        title: 'Merge Sort (병합 정렬)',
        description: '안정적인 O(n log n) 정렬 알고리즘',
        code: `function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}`
      }
    ],
    applications: [
      '데이터베이스 쿼리 최적화',
      '검색 엔진 결과 정렬',
      '우선순위 처리',
      '데이터 분석 및 통계'
    ]
  },
  {
    id: 3,
    number: '03',
    title: '검색',
    description: '원하는 값을 효율적으로 찾는 다양한 검색 방법을 다룹니다.',
    concept: '검색 알고리즘은 데이터 집합에서 특정 값을 찾는 방법입니다. 선형 검색부터 이진 검색까지 다양한 기법이 있습니다.',
    examples: [
      {
        title: 'Binary Search (이진 검색)',
        description: '정렬된 배열에서 O(log n)으로 검색',
        code: `function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const sorted = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(sorted, 7)); // 3`
      },
      {
        title: 'DFS (깊이 우선 탐색)',
        description: '트리나 그래프를 깊이 우선으로 탐색',
        code: `interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

function dfs(node: TreeNode | undefined, target: number): boolean {
  if (!node) return false;
  if (node.value === target) return true;

  return dfs(node.left, target) || dfs(node.right, target);
}

// 반복문 버전
function dfsIterative(root: TreeNode, target: number): boolean {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;
    if (node.value === target) return true;

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return false;
}`
      }
    ],
    applications: [
      '데이터베이스 인덱싱',
      '자동완성 기능',
      '파일 시스템 탐색',
      '경로 찾기 알고리즘'
    ]
  },
  {
    id: 4,
    number: '04',
    title: '문자열',
    description: '문자열을 조작하고 분석하는 알고리즘을 구현합니다.',
    concept: '문자열 알고리즘은 텍스트 데이터를 처리하고 분석하는 방법입니다. 패턴 매칭, 변환, 파싱 등 다양한 작업을 수행합니다.',
    examples: [
      {
        title: '팰린드롬 체크',
        description: '문자열이 앞뒤가 같은지 확인',
        code: `function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true

// Two Pointer 방식
function isPalindromeOptimized(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}`
      },
      {
        title: '애너그램 판별',
        description: '두 문자열이 같은 문자로 구성되었는지 확인',
        code: `function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount: Record<string, number> = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true`
      }
    ],
    applications: [
      '텍스트 검색 및 매칭',
      '데이터 검증',
      '암호화/복호화',
      '자연어 처리'
    ]
  },
  {
    id: 5,
    number: '05',
    title: '스택 · 큐',
    description: '데이터가 저장되고 꺼내지는 순서를 이해하는 자료구조 기초입니다.',
    concept: '스택은 LIFO(Last In First Out), 큐는 FIFO(First In First Out) 구조입니다. 순서가 중요한 작업에 활용됩니다.',
    examples: [
      {
        title: 'Stack 구현 및 활용',
        description: '괄호 유효성 검사',
        code: `class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// 괄호 유효성 검사
function isValidParentheses(s: string): boolean {
  const stack = new Stack<string>();
  const pairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.isEmpty();
}`
      },
      {
        title: 'Queue 구현 및 활용',
        description: 'BFS 탐색에 사용되는 큐',
        code: `class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// BFS 구현
function bfs(root: TreeNode, target: number): boolean {
  const queue = new Queue<TreeNode>();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue()!;
    if (node.value === target) return true;

    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }

  return false;
}`
      }
    ],
    applications: [
      '브라우저 히스토리 (Stack)',
      '실행 취소/다시 실행 (Stack)',
      '작업 큐 처리 (Queue)',
      'BFS 탐색 (Queue)'
    ]
  },
  {
    id: 6,
    number: '06',
    title: '재귀',
    description: '함수가 자기 자신을 호출하는 재귀 구조를 이해합니다.',
    concept: '재귀는 함수가 자기 자신을 호출하여 문제를 작은 부분 문제로 나누어 해결하는 기법입니다. 기저 조건과 재귀 조건이 필요합니다.',
    examples: [
      {
        title: '피보나치 수열',
        description: '재귀와 메모이제이션',
        code: `// 기본 재귀
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 메모이제이션 적용
function fibonacciMemo(n: number, memo: Map<number, number> = new Map()): number {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n)!;

  const result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}

// 동적 프로그래밍
function fibonacciDP(n: number): number {
  if (n <= 1) return n;
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}`
      },
      {
        title: '트리 순회',
        description: '재귀를 활용한 트리 탐색',
        code: `// 전위 순회 (Preorder)
function preorder(node: TreeNode | undefined): number[] {
  if (!node) return [];
  return [
    node.value,
    ...preorder(node.left),
    ...preorder(node.right)
  ];
}

// 중위 순회 (Inorder)
function inorder(node: TreeNode | undefined): number[] {
  if (!node) return [];
  return [
    ...inorder(node.left),
    node.value,
    ...inorder(node.right)
  ];
}

// 후위 순회 (Postorder)
function postorder(node: TreeNode | undefined): number[] {
  if (!node) return [];
  return [
    ...postorder(node.left),
    ...postorder(node.right),
    node.value
  ];
}`
      }
    ],
    applications: [
      '트리 구조 탐색',
      '분할 정복 알고리즘',
      '백트래킹',
      '동적 프로그래밍'
    ]
  },
  {
    id: 7,
    number: '07',
    title: '문제 해결 패턴',
    description: '알고리즘 문제를 풀기 위한 대표적인 사고 방식을 정리합니다.',
    concept: '효율적인 문제 해결을 위한 다양한 패턴과 기법을 학습합니다. Sliding Window, Two Pointers, Dynamic Programming 등이 있습니다.',
    examples: [
      {
        title: 'Sliding Window',
        description: '고정 크기 윈도우로 배열 탐색',
        code: `// 최대 부분 배열 합
function maxSubarraySum(arr: number[], k: number): number {
  if (arr.length < k) return 0;

  let maxSum = 0;
  let windowSum = 0;

  // 첫 윈도우 계산
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // 윈도우 슬라이딩
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));
// 9 (5 + 1 + 3)`
      },
      {
        title: 'Dynamic Programming',
        description: '최적 부분 구조를 활용한 문제 해결',
        code: `// 배낭 문제 (0/1 Knapsack)
function knapsack(
  weights: number[],
  values: number[],
  capacity: number
): number {
  const n = weights.length;
  const dp: number[][] = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}`
      }
    ],
    applications: [
      '최적화 문제',
      '부분 배열/문자열 탐색',
      '자원 할당 문제',
      '경로 찾기'
    ]
  },
  {
    id: 8,
    number: '08',
    title: 'React + 알고리즘',
    description: '알고리즘 로직을 React로 구현하고 시각화합니다.',
    concept: 'React의 상태 관리와 컴포넌트 구조를 활용하여 알고리즘을 시각적으로 표현하고 인터랙티브하게 만듭니다.',
    examples: [
      {
        title: '정렬 애니메이션',
        description: '정렬 과정을 시각화하는 React 컴포넌트',
        code: `function SortVisualizer() {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);

  const generateArray = () => {
    const newArray = Array.from(
      { length: 50 },
      () => Math.floor(Math.random() * 100) + 5
    );
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setSorting(true);
    const arr = [...array];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      }
    }
    setSorting(false);
  };

  return (
    <div className="visualizer">
      <button onClick={generateArray} disabled={sorting}>
        새 배열 생성
      </button>
      <button onClick={bubbleSort} disabled={sorting}>
        정렬 시작
      </button>
      <div className="bars">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bar"
            style={{ height: \`\${value}%\` }}
          />
        ))}
      </div>
    </div>
  );
}`
      },
      {
        title: '트리 시각화',
        description: 'Binary Search Tree 시각화',
        code: `interface TreeNodeType {
  value: number;
  left?: TreeNodeType;
  right?: TreeNodeType;
}

function TreeVisualizer() {
  const [tree, setTree] = useState<TreeNodeType | undefined>();
  const [input, setInput] = useState('');

  const insert = (node: TreeNodeType | undefined, value: number): TreeNodeType => {
    if (!node) return { value };

    if (value < node.value) {
      node.left = insert(node.left, value);
    } else {
      node.right = insert(node.right, value);
    }
    return node;
  };

  const handleInsert = () => {
    const value = parseInt(input);
    if (!isNaN(value)) {
      setTree(prev => insert(prev, value));
      setInput('');
    }
  };

  const TreeNode = ({ node, x, y, level }: any) => {
    if (!node) return null;

    const spacing = 200 / Math.pow(2, level);

    return (
      <g>
        <circle cx={x} cy={y} r={20} fill="#4A90E2" />
        <text x={x} y={y + 5} textAnchor="middle" fill="white">
          {node.value}
        </text>
        {node.left && (
          <>
            <line x1={x} y1={y} x2={x - spacing} y2={y + 60} stroke="#333" />
            <TreeNode node={node.left} x={x - spacing} y={y + 60} level={level + 1} />
          </>
        )}
        {node.right && (
          <>
            <line x1={x} y1={y} x2={x + spacing} y2={y + 60} stroke="#333" />
            <TreeNode node={node.right} x={x + spacing} y={y + 60} level={level + 1} />
          </>
        )}
      </g>
    );
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleInsert}>추가</button>
      <svg width="600" height="400">
        <TreeNode node={tree} x={300} y={30} level={0} />
      </svg>
    </div>
  );
}`
      }
    ],
    applications: [
      '알고리즘 학습 도구',
      '데이터 시각화',
      '인터랙티브 데모',
      '교육용 애플리케이션'
    ]
  }
]
