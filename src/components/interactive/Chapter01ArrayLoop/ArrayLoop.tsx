import "./Chapter01.scss";
import Chapter01Data from "../../../data/algorithm-practice-data01.json";
import { useEffect, useState } from "react";

export default function ArrayLoop() {
  const [numberDatas, setNumberDatas] = useState<number[]>([]);
  const [statValue, setStatValue] = useState({
    evenCount: 0,
    evenRatio: 0,
    MaxValue: 0,
    MaxValueIndex: 0,
  });
  const [filter, setFilter] = useState("all");
  const filtering = [
    { label: "전체", value: "all" },
    { label: "짝수만", value: "even" },
    { label: "홀수만", value: "odd" },
  ];
  console.log("numberDatas:", numberDatas);
  console.log("statValue:", statValue);
  useEffect(() => {
    const nums = Chapter01Data?.evenStats?.numbers;
    if (Array.isArray(nums)) {
      setNumberDatas(nums);
    }
  }, []);

  // 최대값, 최대값 위치 구하기
  const MaxNumber = () => {
    // 최대값만 구할거면 정렬은 느리다
    // 반복문 : 시간 : O(n)
    // 정렬 : 시간 O(n log n)
    // 시간 복잡도 : O(1) < O(log n) < O(n) < O(n log n) < O(x²) < O(x³) < O(2ˣ) < O(n!)
    // const arr = numberDatas.sort((a, b) => a - b); // 오름차순 정렬방식은 시간 복잡도가 높다

    let max = numberDatas[0];
    let maxIndex = 0;

    for (let i = 1; i < numberDatas?.length; i++) {
      if (numberDatas[i] > max) {
        max = numberDatas[i];
        maxIndex = i;
      }
    }

    setStatValue((prev) => ({
      ...prev,
      MaxValue: max,
      MaxValueIndex: maxIndex,
    }));
  };

  const calculation = () => {
    // 짝수 구하기
    let evenCount = 0;

    for (let i = 0; i < numberDatas?.length; i++) {
      if (numberDatas[i] % 2 === 0) {
        evenCount++;
      }
    }

    // 짝수 비율 구하기
    const total = numberDatas.length;
    const evenRatio = Number(((evenCount / total) * 100).toFixed(0));

    let max = numberDatas[0];
    let maxIndex = 0;

    for (let i = 1; i < numberDatas?.length; i++) {
      if (numberDatas[i] > max) {
        max = numberDatas[i];
        maxIndex = i;
      }
    }

    setStatValue((prev) => ({
      ...prev,
      evenCount: evenCount,
      evenRatio: evenRatio,
      MaxValue: max,
      MaxValueIndex: maxIndex,
    }));
  };

  const handleChangeCategory = (value: string) => {
    setFilter(value);
    const originalData = Chapter01Data.evenStats.numbers;
    let filteredArr = [];

    if (value === "even") {
      for (let i = 0; i < originalData?.length; i++) {
        if (originalData[i] % 2 === 0) {
          filteredArr.push(originalData[i]);
        }
      }
      setNumberDatas(filteredArr);
    } else if (value === "all") {
      setNumberDatas(originalData);
    } else {
      for (let i = 0; i < originalData?.length; i++) {
        if (originalData[i] % 2 !== 0) {
          filteredArr.push(originalData[i]);
        }
      }
      setNumberDatas(filteredArr);
    }
  };

  useEffect(() => {
    if (numberDatas.length === 0) return;
    calculation();
  }, [numberDatas]);
  return (
    <div className="array-loop-container">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{statValue?.evenCount}</div>
          <div className="stat-label">짝수 개수</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{statValue?.evenRatio}%</div>
          <div className="stat-label">짝수 비율</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{statValue?.MaxValue}</div>
          <div className="stat-label">최댓값</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">#{statValue?.MaxValueIndex}</div>
          <div className="stat-label">최댓값 위치</div>
        </div>
      </div>

      {/* 숫자 리스트 영역 */}
      <div className="number-list-section">
        {/* 필터 토글 */}
        <div className="filter-toggle">
          {filtering?.map((item, i) => (
            <button
              className={item.value === filter ? "active" : ""}
              onClick={() => handleChangeCategory(item.value)}
              key={i}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 숫자 리스트 */}
        <div className="number-grid">
          {numberDatas?.map((item, index) => (
            <div className="number-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
