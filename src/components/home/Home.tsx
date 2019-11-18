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
    let id = data.payload.results[0].url.replace(
      "https://pokeapi.co/api/v2/pokemon/",
      ""
    );
    id = id.replace("/", "") - 1;
    this.setState({
      pokemons: data.payload.results,
      data: data.payload.results,
      isLoaded: true,
      countPok: id
    });
  }

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
    const a = getMatch(data, value);

    this.setState({
      searchString: value,
      pokemons: a
    });
  };

  render() {
    let { isLoaded, pokemons, countPok, searchString } = this.state;
    const img =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    return (
      <div className="pokemon-block">
        <input onChange={this.handleSearch} value={searchString} />
        {isLoaded ? (
          <div className="Pokemon">
            {pokemons.map((pok: any) => (
              <div key={countPok++}>
                <img src={img + countPok + ".png"} alt="pokemon" />
                <p>{pok.name}</p>
              </div>
            ))}
          </div>
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
