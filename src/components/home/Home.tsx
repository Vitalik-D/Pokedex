import React from "react";
import "./index.css";
import { connect } from "react-redux";
import * as actions from "../../components/store/actions";

class Home extends React.Component<any> {
  state = {
    isLoaded: false,
    pokemons: [],
    countPok: 0,
    searchString: "",
    data: []
  };

  async componentDidMount() {
    const data = await this.props.initCounter();
    this.setState({
      pokemons: data.payload.results,
      data: data.payload.results,
      isLoaded: true
    });
  }

  imgId = (link: any) => {
    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let id = link.replace("https://pokeapi.co/api/v2/pokemon/", "");
    id = id.replace("/", "");
    return img + id;
  };

  handleSearch = (event: any) => {
    const value = event.currentTarget.value.toLowerCase().trim();
    const { data } = this.state;
    function getMatch(arr: any, str: any) {
      const reg = new RegExp(str.split("").join(".*"), "i");

      return arr.filter(function(item: any) {
        if (item.name.match(reg)) {
          return item;
        }
      });
    }
    const filter = getMatch(data, value);

    this.setState({
      searchString: value,
      pokemons: filter
    });
  };

  render() {
    let { isLoaded, pokemons, countPok, searchString } = this.state;

    return (
      <div className="pokemon-block">
        {isLoaded ? (
          <>
            <input onChange={this.handleSearch} value={searchString} />
            <div className="Pokemon">
              {pokemons.map((pok: any) => (
                <div key={countPok++}>
                  <img src={this.imgId(pok.url) + ".png"} alt="pokemon" />
                  <p>{pok.name}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>dwfgh</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    COUNTER: state.COUNTER
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    initCounter: async () => dispatch(await actions.initCounter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
