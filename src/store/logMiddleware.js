import axios from 'axios';
import {
  ON_SUBMIT_REGISTER,
  ON_SUBMIT_LOGIN,
  setUsersLogin,
  GET_USER_INFO,
  setUserInfo,
  ON_SUBMIT_ARTICLE,
  cleanRegisterFields,
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
    default:
      next(action);
  }
};

export default logMiddleware;
