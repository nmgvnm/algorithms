import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { algorithmsData } from "../data/algorithmsData";
import { interactiveComponents } from "../components/interactive";
import "./AlgorithmDetailPage.scss";

function AlgorithmDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleBack = () => {
    // 히스토리가 있으면 뒤로가기, 없으면 홈으로
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    if (newTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const algorithm = algorithmsData.find((a) => a.id === parseInt(id || "0"));

  // 인터랙티브 컴포넌트 가져오기
  const InteractiveComponent = algorithm?.interactiveComponent
    ? interactiveComponents[algorithm.interactiveComponent]
    : null;

  if (!algorithm) {
    return (
      <div className="detail-page">
        <div className="not-found">
          <h2>알고리즘을 찾을 수 없습니다</h2>
          <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <nav className="detail-navbar">
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
        <div className="logo">ALGORITHM</div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>

      <div className="detail-content">
        <header className="detail-header">
          <div className="header-number">{algorithm.number}</div>
          <h1 className="header-title">{algorithm.title}</h1>
          <p className="header-description">{algorithm.description}</p>
        </header>

        <section className="concept-section">
          <h2>핵심 개념</h2>
          <p>{algorithm.concept}</p>
        </section>

        <section className="examples-section">
          <h2>구현 예제</h2>
          {algorithm.examples.map((example, index) => (
            <div key={index} className="example-card">
              <h3>{example.title}</h3>
              <p>{example.description}</p>
              <pre className="code-block">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </section>

        <section className="applications-section">
          <h2>실제 활용</h2>
          <ul className="applications-list">
            {algorithm.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </section>

        {/* 인터랙티브 섹션 */}
        {InteractiveComponent && (
          <section className="interactive-section">
            <h2>인터랙티브 실습</h2>
            <Suspense fallback={<div className="loading">로딩중...</div>}>
              <InteractiveComponent />
            </Suspense>
          </section>
        )}
      </div>
    </div>
  );
}

export default AlgorithmDetailPage;
