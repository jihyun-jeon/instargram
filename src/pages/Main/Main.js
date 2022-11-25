import React, { useState } from 'react';
import Feed from './Feed';

import './main.scss';
import { useNavigate } from 'react-router-dom';

const MainJiHyun = () => {
  const [feedsDATA] = useState([
    {
      id: 0,
      writerId: 'someone.kim',
      writerImg: '/instargram/images/jihyun/catImg.jpg',
      feedImg: '/instargram/images/jihyun/giraffe.jpg',
      feedText: '아마존 사파리에서 기린봤당...',
    },
    {
      id: 1,
      writerId: 'jihyun',
      writerImg: '/instargram/images/jihyun/floggy.jpeg',
      feedImg: '/instargram/images/jihyun/boat.jpeg',
      feedText: '하와이로 서핑갔다~ 유후...',
    },
  ]);

  const [searchShow, setSearchShow] = useState(false);
  const [menuIsShow, setmenuIsShow] = useState(false);
  const [searchList, setSearchList] = useState(NAMES);

  const navigate = useNavigate();

  const onInput = e => {
    const searchValue = e.target.value;
    setSearchList(prev => {
      if (searchValue === '') {
        return [...NAMES];
      }
      const IncludeArr = NAMES.filter(el => el.name.includes(searchValue));
      if (IncludeArr.length === 0) {
        return [{ name: '', korean: '' }];
      }
      return IncludeArr;
    });
  };

  return (
    <div id="mainContainer">
      <nav>
        <div id="navBoxs">
          <div className="navBox" id="leftNav">
            <p>
              <img
                className="MainLogo"
                src="./images/jihyun/logoinstagram.png"
                alt="instagramlogo"
              />
            </p>
            <p>
              <span className="MainWestagram">Instagram</span>
            </p>
          </div>
          <div className="navBox" id="middleNav">
            <input
              type="text"
              placeholder="검색"
              onInput={onInput}
              onFocus={e => setSearchShow(prev => !prev)}
              onBlur={e => setSearchShow(prev => !prev)}
            />

            <div id="searchIdWeapper" className={searchShow ? '' : 'boxHidden'}>
              {/* <div id="searchIdWeapper" className=""> */}
              <div id="searchId">
                {searchList.map((el, idx) => {
                  if (el.name) {
                    return (
                      <div className="idBox" key={idx}>
                        <p>
                          <i className="fas fa-user-circle userIcon" />
                        </p>
                        <div className="idBoxRight">
                          <p>{el.name}</p>
                          <p>{el.korean}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="idBox noSearch" key={idx}>
                        검색결과 없습니다
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="navBox" id="rightNav">
            <p className="rightNavImgWrapper">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="navigation"
              />
            </p>
            <p className="rightNavImgWrapper">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
            </p>
            <div className="rightNavImgWrapper profileLi">
              <button
                type="button"
                className="profileBtn"
                onClick={() => setmenuIsShow(prev => !prev)}
              >
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="user"
                />
              </button>

              <div id="menuBox" className={menuIsShow ? null : 'hidden'}>
                <button>프로필</button>
                <button>저장됨</button>
                <button>설정</button>
                <button>계정 전환</button>
                <button onClick={() => navigate('/')}>로그아웃</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div id="feedWrapper">
          {feedsDATA.map(el => (
            <Feed
              key={el.id}
              id={el.id}
              writerId={el.writerId}
              writerImg={el.writerImg}
              feedImg={el.feedImg}
              feedText={el.feedText}
            />
          ))}
        </div>
        <section id="mainRightWrapper">
          <div className="mainRight">
            <div className="userTemplate">
              <p>
                <img src="./images/jihyun/cardImg.jpeg" alt="catImg" />
              </p>
              <div className="rightTemplate">
                <p>jihyun.jyun</p>
                <p>지현</p>
              </div>
            </div>
            <div className="story">
              <p className="storyTitle">
                <span className="gray">스토리</span>
                <span style={{ fontWeight: 'bold' }}>모두 보기</span>
              </p>
              <div id="storyUsers">
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>_yum_s</p>
                    <p>16분 전</p>
                  </div>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>drink_eat_drink</p>
                    <p>3시간 전</p>
                  </div>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>hyukyc</p>
                    <p>20시간 전</p>
                  </div>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>drink_eat_drink</p>
                    <p>3시간 전</p>
                  </div>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>drink_eat_drink</p>
                    <p>3시간 전</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="story recommend">
              <p className="storyTitle">
                <span className="gray">회원님을 위한 추천</span>
                <span style={{ fontWeight: 'bold' }}>모두 보기</span>
              </p>
              <div id="storyUsers">
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>joaaahye</p>
                    <p>_legend_a님 외 2명이...</p>
                  </div>
                  <p className="blue">팔로우</p>
                </div>
                <div className="userTemplate ">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>rampart81</p>
                    <p>ringo.seoul님 외 12...</p>
                  </div>
                  <p className="blue">팔로우</p>
                </div>
                <div className="userTemplate">
                  <p>
                    <i className="fas fa-user-circle userIcon" />
                  </p>
                  <div className="rightTemplate">
                    <p>shawnjjoo</p>
                    <p>jimmylee1220님 외 1...</p>
                  </div>
                  <p className="blue">팔로우</p>
                </div>
              </div>
            </div>
            <div id="copyRight">
              <p>Instagram 정보·지원·홍보 센터·API· </p>
              <p>채용 정보·개인정보처리방침·약관·</p>
              <p>디렉터리·프로필·해시태그·언어</p>
              <p className="copy">© 2022 INSTAGRAM FROM META</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainJiHyun;

const NAMES = [
  { name: 'alice', korean: '앨리스' },
  { name: 'abel', korean: '아벨' },
  { name: 'alexandra', korean: '알렉산드라' },

  { name: 'baby', korean: '베이비' },
  { name: 'benny', korean: '베니' },
  { name: 'brooke', korean: '브루크' },

  { name: 'callie', korean: '캘리' },
  { name: 'camille', korean: '카밀' },
  { name: 'charlotte', korean: '샬롯' },

  { name: 'dua Lipa', korean: '두아 리파' },
  { name: 'dora', korean: '도라' },
  { name: 'dorothy', korean: '도로시' },

  { name: 'earl', korean: '얼' },
  { name: 'edgar', korean: '에드가' },
  { name: 'edward', korean: '에드워드' },

  { name: 'fabiola', korean: '파비올라' },
  { name: 'felipe', korean: '펠립' },
  { name: 'finn', korean: '핀' },

  { name: 'gael', korean: '게일' },
  { name: 'genevieve', korean: '제네비에브' },
  { name: 'gary', korean: '게리' },

  { name: 'hailey', korean: '헤일리' },
  { name: 'hana', korean: '하나' },
  { name: 'heaven', korean: '헤븐' },

  { name: 'stacey', korean: '스테이시' },
  { name: 'stella', korean: '스텔라' },
  { name: 'sofia', korean: '소피아' },
];
