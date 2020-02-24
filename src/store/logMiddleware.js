import axios from 'axios';
import {
  ON_SUBMIT_REGISTER,
  ON_SUBMIT_LOGIN,
  setUsersLogin,
  GET_USER_INFO,
  setUserInfo,
  ON_SUBMIT_ARTICLE,
  GET_ARTICLES,
  setArticles,
  GET_ONE_ARTICLE,
  setOneArticle,
  ON_SUBMIT_COMMENTARY,
  GET_COMMENTARY,
  getCommentary,
  setCommentary,
  cleanRegisterFields,
  GET_GAMES,
  setGamesList,
  GET_PLATEFORM,
  setPlateform,
  GET_GENRE,
  setGenre,
  SORT_ARTICLES_BY_PLATEFROM,
  SET_SORT_ARTICLES_BY_GENRE,
  setArticlesSort,
  GET_ARTICLES_BY_GAMES,
} from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);

  switch (action.type) {
    case ON_SUBMIT_REGISTER:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/users/register', {
        username: store.getState().registerUserName,
        firstname: store.getState().registerFirstName,
        lastname: store.getState().registerLastName,
        mail: store.getState().registerEmail,
        password: store.getState().registerPassword,
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(cleanRegisterFields());
          window.location.href = '/login';
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case ON_SUBMIT_LOGIN:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/users/login', {
        mail: store.getState().loginEmail,
        password: store.getState().loginPassword,
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setUsersLogin(response.data.token));
          sessionStorage.setItem('token', JSON.stringify(store.getState().token));
          window.location.href = '/user';
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message, 'Username or Password does not exists');
          console.error(error.response);
        });
      break;
    case GET_USER_INFO:
      console.log(JSON.parse(sessionStorage.getItem('token')));
      axios.get('http://localhost:3000/api/users/me', {
        headers: {
          Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        },
      })
        .then((response) => {
          store.dispatch(setUserInfo(
            response.data.username,
            response.data.firstname,
            response.data.lastname,
            response.data.mail,
            response.data.Role.name,
            response.data.avatar,
          ));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case ON_SUBMIT_ARTICLE:
      // eslint-disable-next-line no-case-declarations
      const plateforms = [];
      plateforms.push(
        store.getState().creatPlatform,
        store.getState().creatPlatform2,
        store.getState().creatPlatform3,
      );
      // eslint-disable-next-line no-case-declarations
      const genres = [];
      genres.push(
        store.getState().creatGenre,
        store.getState().creatGenre2,
        store.getState().creatGenre3,
      );
      console.log(`Bearer ${JSON.parse(sessionStorage.getItem('token'))}`);
      axios.request({
        url: 'http://localhost:3000/api/articles/addArticle/',
        method: 'post',
        data: {
          title: store.getState().creatTitle,
          text: store.getState().creatText,
          resume: store.getState().createResume,
          videoId: store.getState().creatVideo,
          image: store.getState().creatImage,
          gameName: store.getState().creatGameName,
          plateforms,
          genres,
        },
        headers: {
          authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        },
        // ... and other options
      })
        .then((response) => {
          // console.log(response.data);
          // store.dispatch(getGenres());
          // store.dispatch(getPlateform());
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_ARTICLES:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get('http://localhost:3000/api/articles/listArticle/')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setArticles(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_ONE_ARTICLE:
      console.log('action', action);
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/articles/getOne', {
        articleId: action.articleId,
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setOneArticle(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case ON_SUBMIT_COMMENTARY:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.request({
        url: 'http://localhost:3000/api/commentary',
        method: 'post',
        data: {
          ArticleId: store.getState().article.id,
          commentary: store.getState().newMessage,
        },
        headers: {
          authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        },
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(getCommentary(store.getState().article.id));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_COMMENTARY:
      axios.post('http://localhost:3000/api/commentary/getCom', {
        articleId: action.articleId,
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setCommentary(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_GAMES:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.request({
        url: 'http://localhost:3000/api/articles/getArticlesByPreferencies/',
        method: 'get',
        headers: {
          authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        },
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setGamesList(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_PLATEFORM:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get('http://localhost:3000/api/plateform/getAll/')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setPlateform(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_GENRE:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get('http://localhost:3000/api/genre/getAll/')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setGenre(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case SORT_ARTICLES_BY_PLATEFROM:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.request({
        url: 'http://localhost:3000/api/articles/sortArticlesByPlateform',
        method: 'post',
        data: {
          category: action.category,
        },
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setArticlesSort(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case SET_SORT_ARTICLES_BY_GENRE:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.request({
        url: 'http://localhost:3000/api/articles/sortArticlesByGenre',
        method: 'post',
        data: {
          category: action.category,
        },
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setArticlesSort(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_ARTICLES_BY_GAMES:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.request({
        url: 'http://localhost:3000/api/articles/sortArticleByGame/',
        method: 'post',
        data: {
          gameId: action.gameId,
        },
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(setArticlesSort(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
