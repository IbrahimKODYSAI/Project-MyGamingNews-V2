// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from 'src/components/Home';

// Action Creators
// import { doSomething } from 'src/store/reducer';
import { getArticle } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  getListArticles: () => {
    dispatch(getArticle());
  },
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;
