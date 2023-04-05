import moment from "moment";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import useDebounce from "../hooks/useDebounce";

import config, { channelId, youtubeApiKey } from "../config/config";

const { appUrl, serverPort } = config;

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3";

const convertYouTubeDuration = (yt_duration) => {
  const time_extractor = /([0-9]*H)?([0-9]*M)?([0-9]*S)?$/;
  const extracted = time_extractor.exec(yt_duration);
  const hours = parseInt(extracted[1], 10) || 0;
  const minutes = parseInt(extracted[2], 10) || 0;
  const seconds = parseInt(extracted[3], 10) || 0;
  return hours * 3600 * 1000 + minutes * 60 * 1000 + seconds * 1000;
};

const AddVideo = ({ playlists, authors: authorsData }) => {
  const [authors, setAuthors] = useState(authorsData);
  const [id, setId] = useState("");
  const [termAuthor, setAuthorTerm] = useState("");
  const [videoData, setVideData] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const onSearchAuthor = useDebounce(async () => {
    let api = `${appUrl}/api/authors`;

    console.log(appUrl, api);

    try {
      if (termAuthor.length > 1) {
        api = `${appUrl}/api/authors?search=${termAuthor}`;
      }

      console.log(appUrl, api);

      const res = await fetch(api);

      const authors = await res.json();

      if (authors.success) {
        setAuthors(authors.data);
      }
    } catch (error) {
      alert("Ошибка запроса");
    }
  }, 500);

  useEffect(() => {
    onSearchAuthor();
  }, [termAuthor]);

  useEffect(() => {
    if (authors && authors.authors && authors.authors.length) {
      setSelectedAuthor(authors.authors[0]._id);
    }
  }, [authors]);

  useEffect(() => {
    if (playlists && playlists.items && playlists.items.length) {
      setSelectedCategory(playlists.items[0].id);
    }
  }, [playlists]);

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const fetchVideoById = async () => {
    try {
      const res = await fetch(
        `${YOUTUBE_API_URL}/videos?part=snippet,statistics,contentDetails&id=${id}&key=${youtubeApiKey}`
      );

      const data = await res.json();

      if (data.items && data.items.length) {
        setVideData(data.items[0]);
      } else {
        alert("Ничего не найдено)");
      }
    } catch (error) {
      alert("Ошибка)");
    }
  };

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSelectAuthor = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const onSaveVideo = async () => {
    try {
      const findedPlaylist = playlists.items.find(
        (pl) => pl.id == selectedCategory
      );

      const res = await fetch(`${appUrl}/api/videos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: videoData.snippet.title,
          description: videoData.snippet.description,
          thumbnail: videoData.snippet.thumbnails.default.url,
          youtubeId: videoData.id,
          viewCount: videoData.statistics.viewCount,
          duration: moment(
            convertYouTubeDuration(videoData.contentDetails.duration)
          ).format("mm:ss"),
          author: selectedAuthor,
          category: {
            name: findedPlaylist.snippet.title,
            playlistId: findedPlaylist.id,
          },
        }),
      });

      const author = await res.json();

      alert(author.message);
    } catch (error) {
      alert("Ошибка при сохранении видео");
    }
  };

  return (
    <div className="container-fluid upload-details">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-title">
            <h6>Детали видео</h6>
          </div>
        </div>
        {videoData && (
          <>
            <div className="col-lg-2">
              <div className="imgplace">
                <img
                  src={videoData.snippet.thumbnails.default.url}
                  width="100%"
                />
              </div>
            </div>
            <div className="col-lg-10">
              <div className="osahan-title">{videoData.snippet.title}</div>
              <div className="osahan-size">
                Продолжительность: 2:13 мин . Просмотров: 2
              </div>
              <div className="osahan-progress">Описание:</div>
              <div className="osahan-desc">{videoData.snippet.description}</div>
            </div>
          </>
        )}
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-12">
          <div className="osahan-form">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group ">
                  <label htmlFor="e1">Поиск по YouTube ID</label>
                  <div className="d-flex alig-items-center">
                    <input
                      onChange={handleChangeId}
                      value={id}
                      type="text"
                      placeholder="Введите id видео"
                      id="e1"
                      className="form-control"
                    />
                    <button
                      className="btn btn-primary btn-sm"
                      disabled={!id}
                      onClick={fetchVideoById}
                    >
                      Поиск
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="e3">Категория</label>
                  <select
                    id="e3"
                    className="custom-select"
                    value={selectedCategory}
                    onChange={handleSelectCategory}
                  >
                    {playlists &&
                      playlists.items.map((pl) => (
                        <option key={pl.id} value={pl.id}>
                          {pl.snippet.title}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="e4">Автор</label>
                  <div className="input-group mb-3">
                    <select
                      id="e4"
                      className="custom-select"
                      value={selectedAuthor}
                      onChange={handleSelectAuthor}
                    >
                      {authors &&
                        authors.authors.map((author) => (
                          <option key={author._id} value={author._id}>
                            {`${author.lastname} ${author.firstname} ${author.patronymic}`}
                          </option>
                        ))}
                    </select>
                    <input
                      onChange={(e) => setAuthorTerm(e.target.value)}
                      value={termAuthor}
                      type="text"
                      placeholder="Введите имя автора"
                      id="e1"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="osahan-area text-center mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={onSaveVideo}
              disabled={!videoData}
            >
              Сохранить
            </button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AddVideo;

export async function getServerSideProps(ctx) {
  const cookie = ctx.req?.headers.cookie;

  const res = await fetch(
    `${YOUTUBE_API_URL}/playlists?part=snippet&channelId=${channelId.replace(
      /\"/g,
      ""
    )}&maxResults=100&key=${youtubeApiKey.replace(/\"/g, "")}`
  );
  let playlists = await res.json();

  console.log("PLAYLIST", YOUTUBE_API_URL, channelId, youtubeApiKey);

  const res2 = await fetch(`${appUrl}/api/authors`, {
    headers: {
      cookie,
    },
  });

  if (res2.status == 401 && !ctx.req) {
    Router.replace("/login");
    return {};
  }

  if (res2.status == 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: `${appUrl}/login`,
    });

    ctx.res?.end();

    return { props: {} };
  }

  let authors = await res2.json();

  return {
    props: {
      playlists,
      authors: authors.data,
    },
  };
}
