import React, { useRef, useState } from 'react';
import Comments from './Comment';

function Feed({ id, writerId, writerImg, feedImg, feedText }) {
  const inputRef = useRef();
  const [heartClicked, setHeartClicked] = useState(false);
  const [commentTxt, setCommentTxt] = useState('');
  const [commentList, setCommentList] = useState([
    { id: new Date().getTime() + Math.random(), txt: '댓글썻당!!' },
    { id: new Date().getTime() + Math.random(), txt: '댓글 두번썻당!' },
  ]);

  const onSubmit = e => {
    e.preventDefault();
    if (e.target.value === '') {
      return;
    }

    setCommentList(prev => [
      { id: new Date().getTime() + Math.random(), txt: commentTxt },
      ...prev,
    ]);
    setCommentTxt('');
    inputRef.current.focus();
  };

  const onInput = e =>
    setCommentTxt(() => {
      if (e.target.value === '') {
        return;
      }
      return e.target.value;
    });

  return (
    <div className="feeds">
      <header className="feedTop">
        <p>
          <img src={writerImg} alt="wecode" />
        </p>
        <p>{writerId}</p>
        <p>
          <i className="fas fa-ellipsis-h" />
        </p>
      </header>
      <img src={feedImg} alt="giraffe" className="giraffe" />
      <div id="feedBottomContents">
        <div className="imgIcons">
          <section className="imgIconsLeft">
            <p>
              <button
                type="button"
                className="heartBtn"
                onClick={() => setHeartClicked(prev => !prev)}
              >
                {heartClicked ? (
                  <svg
                    aria-label="좋아요"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                  </svg>
                ) : (
                  <svg
                    aria-label="좋아요 취소"
                    className="_ab6-"
                    color="#ed4956"
                    fill="#ed4956"
                    height="24"
                    role="img"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                )}
              </button>
            </p>
            <p>
              <svg
                aria-label="댓글 달기"
                className="_8-yf5"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </p>
            <p>
              <svg
                aria-label="게시물 공유"
                className="_8-yf5"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                />
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </p>
          </section>
          <svg
            aria-label="저장"
            className="bookMark"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="likeMessage">
          <img src={writerImg} alt="likes" />
          <p>
            <span className="thick">aineworld</span>님
            <span className="thick"> 외 10명</span>이 좋아합니다.
          </p>
        </div>
        <p className="feedText">
          <span className="thick">{writerId} </span>
          {feedText}
          <span className="gray"> 더 보기</span>
        </p>
      </div>
      <section>
        <ul id="comments">
          {commentList.map((el, idx) => {
            return (
              <Comments
                key={el.id}
                txt={el.txt}
                userNum={commentList.length - idx}
                idNum={el.id}
                setCommentList={setCommentList}
              />
            );
          })}
        </ul>
      </section>
      <form className="contentForm" onSubmit={onSubmit}>
        <input
          placeholder="댓글 달기..."
          value={commentTxt}
          ref={inputRef}
          onInput={onInput}
        />
        <button type="submit" className="addBtn">
          게시
        </button>
      </form>
    </div>
  );
}

export default Feed;
