import React, { useState } from 'react';
import Feed from './Feed';
import names from '../datas/names';
import './main.scss';

const MainJiHyun = () => {
  const [feedsDATA] = useState([
    {
      id: 0,
      writerId: 'canon_mj',
      writerImg: './images/jihyun/wecode.jpeg',
      feedImg: '/images/jihyun/giraffe.jpg',
      feedText: '아마존 사파리에서 기린봤당...',
    },
    {
      id: 1,
      writerId: 'jihyun',
      writerImg: './images/jihyun/floggy.jpeg',
      feedImg: '/images/jihyun/boat.jpeg',
      feedText: '하와이로 서핑갔다~ 유후...',
    },
  ]);
  const [searchShow, setSearchShow] = useState(false);
  const [menuIsShow, setmenuIsShow] = useState(false);
  const [searchList, setSearchList] = useState(names);

  const onInput = e => {
    const searchValue = e.target.value;
    setSearchList(prev => {
      if (searchValue === '') {
        return [...names];
      }
      return names.filter(el => el.name.includes(searchValue));
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
              <span className="MainWestagram">westagram</span>
            </p>
          </div>
          <div className="navBox" id="middleNav">
            <p>
              <input
                type="text"
                placeholder="검색"
                onInput={onInput}
                onFocus={e => setSearchShow(prev => !prev)}
                onBlur={e => setSearchShow(prev => !prev)}
              />
            </p>

            <div id="searchIdWeapper" className={searchShow ? '' : 'boxShow'}>
              <div id="searchId">
                {searchList.map((el, idx) => {
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
                })}
              </div>
            </div>
          </div>
          <div className="navBox" id="rightNav">
            <p>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="navigation"
              />
            </p>
            <p>
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
            </p>
            <p className="profileLi">
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
            </p>
          </div>
          <div id="menuBox" className={menuIsShow ? null : 'hidden'}>
            <button>프로필</button>
            <button>저장됨</button>
            <button>설정</button>
            <button>계정 전환</button>
            <button>로그아웃</button>
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
                <img src="./images/jihyun/wecode.jpeg" alt="wecodeLogo" />
              </p>
              <div className="rightTemplate">
                <p>wecode_bootcamp</p>
                <p>WeCode ㅣ 위코드</p>
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
