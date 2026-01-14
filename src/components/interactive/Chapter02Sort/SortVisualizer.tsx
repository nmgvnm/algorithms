import "./Chapter02.scss";
import Chapter02Data from "../../../data/algorithm-practice-data02.json";
import { useEffect, useState } from "react";

export default function SortVisualizer() {
  const { items, filters, sortOptions } =
    Chapter02Data.A_searchResults_products;
  const [category, setCategory] = useState("All");
  const [practiceData, setPracticeData] = useState({});
  const handleChangeCategory = (value: string) => {
    setCategory(value);
  };

  useEffect(() => {
    const data = Chapter02Data;
    setPracticeData(data);
  }, []);
  console.log("practiceData:", practiceData);
  return (
    <div className="sort-visualizer-container">
      <h3>상품 검색/필터/정렬</h3>

      {/* 검색 바 */}
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="상품명을 검색하세요..."
        />
      </div>

      {/* 필터 영역 */}
      <div className="filter-section">
        <div className="filter-group">
          <label className="filter-label">카테고리</label>
          <div className="filter-buttons">
            {filters.categories.map((item, i) => (
              <button
                key={i}
                onClick={() => handleChangeCategory(item)}
                className={item === category ? "active" : ""}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">가격대</label>
          <div className="filter-buttons">
            <button className="active">전체</button>
            {filters.priceRanges.map((range) => (
              <button key={range.label}>{range.label}원</button>
            ))}
          </div>
        </div>
      </div>

      {/* 정렬 옵션 */}
      <div className="sort-section">
        <label className="sort-label">정렬</label>
        <div className="sort-buttons">
          {sortOptions.map((option, i) => (
            <button key={option.key} className={i === 0 ? "active" : ""}>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* 상품 개수 표시 */}
      <div className="product-count">
        전체 <strong>{items.length}</strong>개
      </div>

      {/* 상품 그리드 */}
      <div className="product-grid">
        {items.map((product) => (
          <div key={product.id} className="product-card">
            {product.featured && <span className="badge-featured">인기</span>}
            {product.stock === 0 && <span className="badge-soldout">품절</span>}

            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className="product-info">
              <div className="product-category">{product.category}</div>
              <h4 className="product-name">{product.name}</h4>

              <div className="product-tags">
                {product.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="product-stats">
                <div className="rating">⭐ {product.rating}</div>
                <div className="review-count">
                  리뷰 {product.reviewCount.toLocaleString()}
                </div>
              </div>

              <div className="product-price">
                {product.price.toLocaleString()}원
              </div>

              <div className="product-meta">
                <span className="sales">
                  최근 30일 {product.sales30d}개 판매
                </span>
                <span className="stock">재고 {product.stock}개</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
