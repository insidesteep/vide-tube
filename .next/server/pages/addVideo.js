"use strict";
(() => {
var exports = {};
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 902:
/***/ ((module) => {


const serverPort = "3000" || 0;
const youtubeApiKey = "AIzaSyCXmjHxoTyu708zREFt0rCkuJcc6s4mVTQ";
const mongoURI = "mongodb+srv://insidesteep:3101769steep@cluster0.9kyjzmb.mongodb.net/?retryWrites=true&w=majority";
const jwtSecretToken = "MysecretTokenForBSmiTube";
const appUrl = "https://video.bsmi.uz";
const channelId = "UC-tY8dG0KoYjoOyJHnRe5Jw";
const config = {
    serverPort,
    youtubeApiKey,
    mongoURI,
    jwtSecretToken,
    appUrl,
    channelId
};
module.exports = config;


/***/ }),

/***/ 2121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const { useRef , useCallback  } = __webpack_require__(6689);
const useDebounce = (callback, delay)=>{
    const timer = useRef(null);
    const debounceCallback = useCallback((...args)=>{
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(()=>{
            callback(...args);
        }, delay);
    }, [
        callback,
        delay
    ]);
    return debounceCallback;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounce);


/***/ }),

/***/ 8884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2121);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(902);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
js_cookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const { appUrl , serverPort  } = (_config_config__WEBPACK_IMPORTED_MODULE_6___default());
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3";
const convertYouTubeDuration = (yt_duration)=>{
    const time_extractor = /([0-9]*H)?([0-9]*M)?([0-9]*S)?$/;
    const extracted = time_extractor.exec(yt_duration);
    const hours = parseInt(extracted[1], 10) || 0;
    const minutes = parseInt(extracted[2], 10) || 0;
    const seconds = parseInt(extracted[3], 10) || 0;
    return hours * 3600 * 1000 + minutes * 60 * 1000 + seconds * 1000;
};
const AddVideo = ({ playlists , authors: authorsData  })=>{
    const [authors, setAuthors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(authorsData);
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [termAuthor, setAuthorTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [videoData, setVideData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [selectedAuthor, setSelectedAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const onSearchAuthor = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        onSearchAuthor();
    }, [
        termAuthor
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (authors && authors.authors && authors.authors.length) {
            setSelectedAuthor(authors.authors[0]._id);
        }
    }, [
        authors
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (playlists && playlists.items && playlists.items.length) {
            setSelectedCategory(playlists.items[0].id);
        }
    }, [
        playlists
    ]);
    const handleChangeId = (e)=>{
        setId(e.target.value);
    };
    const fetchVideoById = async ()=>{
        try {
            const res = await fetch(`${YOUTUBE_API_URL}/videos?part=snippet,statistics,contentDetails&id=${id}&key=${_config_config__WEBPACK_IMPORTED_MODULE_6__.youtubeApiKey}`);
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
    const handleSelectCategory = (e)=>{
        setSelectedCategory(e.target.value);
    };
    const handleSelectAuthor = (e)=>{
        setSelectedAuthor(e.target.value);
    };
    const onSaveVideo = async ()=>{
        try {
            const findedPlaylist = playlists.items.find((pl)=>pl.id == selectedCategory);
            const res = await fetch(`${appUrl}/api/videos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: videoData.snippet.title,
                    description: videoData.snippet.description,
                    thumbnail: videoData.snippet.thumbnails.default.url,
                    youtubeId: videoData.id,
                    viewCount: videoData.statistics.viewCount,
                    duration: moment__WEBPACK_IMPORTED_MODULE_1___default()(convertYouTubeDuration(videoData.contentDetails.duration)).format("mm:ss"),
                    author: selectedAuthor,
                    category: {
                        name: findedPlaylist.snippet.title,
                        playlistId: findedPlaylist.id
                    }
                })
            });
            const author = await res.json();
            alert(author.message);
        } catch (error) {
            alert("Ошибка при сохранении видео");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container-fluid upload-details",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "main-title",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                children: "Детали видео"
                            })
                        })
                    }),
                    videoData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "imgplace",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: videoData.snippet.thumbnails.default.url,
                                        width: "100%"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "osahan-title",
                                        children: videoData.snippet.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "osahan-size",
                                        children: "Продолжительность: 2:13 мин . Просмотров: 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "osahan-progress",
                                        children: "Описание:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "osahan-desc",
                                        children: videoData.snippet.description
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "osahan-form",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-12",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "form-group ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "e1",
                                                    children: "Поиск по YouTube ID"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex alig-items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            onChange: handleChangeId,
                                                            value: id,
                                                            type: "text",
                                                            placeholder: "Введите id видео",
                                                            id: "e1",
                                                            className: "form-control"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn btn-primary btn-sm",
                                                            disabled: !id,
                                                            onClick: fetchVideoById,
                                                            children: "Поиск"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "e3",
                                                        children: "Категория"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                        id: "e3",
                                                        className: "custom-select",
                                                        value: selectedCategory,
                                                        onChange: handleSelectCategory,
                                                        children: playlists && playlists.items.map((pl)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: pl.id,
                                                                children: pl.snippet.title
                                                            }, pl.id))
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "e4",
                                                        children: "Автор"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input-group mb-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                id: "e4",
                                                                className: "custom-select",
                                                                value: selectedAuthor,
                                                                onChange: handleSelectAuthor,
                                                                children: authors && authors.authors.map((author)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: author._id,
                                                                        children: `${author.lastname} ${author.firstname} ${author.patronymic}`
                                                                    }, author._id))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                onChange: (e)=>setAuthorTerm(e.target.value),
                                                                value: termAuthor,
                                                                type: "text",
                                                                placeholder: "Введите имя автора",
                                                                id: "e1",
                                                                className: "form-control"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "osahan-area text-center mt-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-outline-primary",
                                onClick: onSaveVideo,
                                disabled: !videoData,
                                children: "Сохранить"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddVideo);
async function getServerSideProps(ctx) {
    const cookie = ctx.req?.headers.cookie;
    const res = await fetch(`${YOUTUBE_API_URL}/playlists?part=snippet&channelId=${_config_config__WEBPACK_IMPORTED_MODULE_6__.channelId.replace(/\"/g, "")}&maxResults=100&key=${_config_config__WEBPACK_IMPORTED_MODULE_6__.youtubeApiKey.replace(/\"/g, "")}`);
    let playlists = await res.json();
    console.log("PLAYLIST", YOUTUBE_API_URL, _config_config__WEBPACK_IMPORTED_MODULE_6__.channelId, _config_config__WEBPACK_IMPORTED_MODULE_6__.youtubeApiKey);
    const res2 = await fetch(`${appUrl}/api/authors`, {
        headers: {
            cookie
        }
    });
    if (res2.status == 401 && !ctx.req) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default().replace("/login");
        return {};
    }
    if (res2.status == 401 && ctx.req) {
        ctx.res?.writeHead(302, {
            Location: `${appUrl}/login`
        });
        ctx.res?.end();
        return {
            props: {}
        };
    }
    let authors = await res2.json();
    return {
        props: {
            playlists,
            authors: authors.data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8884));
module.exports = __webpack_exports__;

})();