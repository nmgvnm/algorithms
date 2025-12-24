import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.scss'

interface AlgorithmCard {
  id: number
  title: string
  number: string
  description: string
}

function HomePage() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const totalPages = 3

  useEffect(() => {
    // 시스템 다크모드 설정 확인
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      setIsDarkMode(systemPrefersDark)
    }
  }, [])

  useEffect(() => {
    // body에 다크모드 클래스 추가/제거
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const cards: AlgorithmCard[] = [
    {
      id: 0,
      number: '00',
      title: '알고리즘 기초',
      description: '알고리즘의 개념과 시간·공간 복잡도 등 문제 해결의 기본을 다룹니다.'
    },
    {
      id: 1,
      number: '01',
      title: '배열과 반복',
      description: '배열을 순회하며 데이터를 처리하는 가장 기본적인 알고리즘 패턴입니다.'
    },
    {
      id: 2,
      number: '02',
      title: '정렬',
      description: '데이터를 일정한 기준에 따라 정렬하는 알고리즘을 학습합니다.'
    },
    {
      id: 3,
      number: '03',
      title: '검색',
      description: '원하는 값을 효율적으로 찾는 다양한 검색 방법을 다룹니다.'
    },
    {
      id: 4,
      number: '04',
      title: '문자열',
      description: '문자열을 조작하고 분석하는 알고리즘을 구현합니다.'
    },
    {
      id: 5,
      number: '05',
      title: '스택 · 큐',
      description: '데이터가 저장되고 꺼내지는 순서를 이해하는 자료구조 기초입니다.'
    },
    {
      id: 6,
      number: '06',
      title: '재귀',
      description: '함수가 자기 자신을 호출하는 재귀 구조를 이해합니다.'
    },
    {
      id: 7,
      number: '07',
      title: '문제 해결 패턴',
      description: '알고리즘 문제를 풀기 위한 대표적인 사고 방식을 정리합니다.'
    },
    {
      id: 8,
      number: '08',
      title: 'React + 알고리즘',
      description: '알고리즘 로직을 React로 구현하고 시각화합니다.'
    }
  ]

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextPage()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevPage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage])

  useEffect(() => {
    let touchStartY = 0
    let touchStartX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
      touchStartX = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      const deltaY = touchStartY - touchEndY
      const deltaX = touchStartX - touchEndX

      if (Math.abs(deltaY) > 50 || Math.abs(deltaX) > 50) {
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          if (deltaY > 0) {
            nextPage()
          } else {
            prevPage()
          }
        }
      }
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentPage])

  return (
    <div className="home-page">
      {/* Page Navigation */}
      <nav className="navbar">
        <div className="logo">ALGORITHM</div>
        <div className="nav-links">
          <button onClick={() => goToPage(0)} className={currentPage === 0 ? 'active' : ''}>HOME</button>
          <button onClick={() => goToPage(1)} className={currentPage === 1 ? 'active' : ''}>ABOUT</button>
          <button onClick={() => goToPage(2)} className={currentPage === 2 ? 'active' : ''}>COLLECTION</button>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Pages Container */}
      <div className="pages-container" style={{ transform: `translateX(-${currentPage * 33.333}%)` }}>
        {/* Page 1: Hero */}
        <section className="page hero-page">
          <div className="hero-content">
            <h1 className="hero-title">
              ALGORITHM
              <span className="hero-subtitle">Elevate the Code.</span>
            </h1>
            <p className="hero-description">
              Get Your Sonic Fix: Where Luxury Meets<br />
              Algorithm Euphoria with React.
            </p>
          </div>
          <div className="page-indicator">
            <span>Swipe or use arrow keys</span>
          </div>
        </section>

        {/* Page 2: About */}
        <section className="page about-page">
          <h2 className="section-title">ABOUT US</h2>
          <p className="section-subtitle">Algorithm in its purest state.</p>

          <div className="about-content">
            <div className="about-text">
              <p>
                알고리즘 학습은 단순히 문제를 푸는 것을 넘어, 논리적 사고와 효율적인 코드 설계를 위한 필수 과정입니다.
                이 프로젝트는 React와 TypeScript를 활용하여 알고리즘을 시각화하고 이해하기 쉽게 만듭니다.
              </p>
            </div>
            <div className="about-text">
              <p>
                각 알고리즘은 단계별로 구성되어 있으며, 인터랙티브한 UI를 통해 동작 원리를 직접 확인할 수 있습니다.
                기초부터 심화까지, 체계적인 학습 경로를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Page 3: Collection */}
        <section className="page collection-page">
          <h2 className="collection-title">ALGORITHM<br />COLLECTION</h2>

          <div className="card-grid">
            {cards.map((card, index) => (
              <article
                key={card.id}
                className="algorithm-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-number">{card.number}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <button className="card-button" onClick={() => navigate(`/algorithm/${card.id}`)}>Learn More</button>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Navigation Controls */}
      {currentPage > 0 && (
        <button className="nav-arrow nav-arrow-left" onClick={prevPage}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button className="nav-arrow nav-arrow-right" onClick={nextPage}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Page Dots */}
      <div className="page-dots">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => goToPage(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage
