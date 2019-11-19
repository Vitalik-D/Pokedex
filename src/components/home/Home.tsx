import React from "react";
import "./index.css";
import { connect } from "react-redux";
import * as actions from "../../components/store/actions";
import ClipLoader from "react-spinners/ClipLoader";

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

  imgId = (link: string) => {
    const img =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let id = link
        .replace("https://pokeapi.co/api/v2/pokemon/", "")
        .replace("/", "");
    return img + id;
  };

  handleSearch = (event: object|any) => {
    const value = event.currentTarget.value.toLowerCase().trim();
    let { data } = this.state;
    const reg = new RegExp(value.split("").join(".*"), "i");
    const filterArr = data.filter((item: object|any) => {
      if (item.name.match(reg)) {
        return item;
      }
    });
    this.setState({
      searchString: value,
      pokemons: filterArr
    });
  };

  render() {
    const { isLoaded, pokemons, searchString } = this.state;
    let { countPok } = this.state;

    return (
      <div className="pokemon-block">
        <input
          placeholder="Enter pokemon name..."
          onChange={this.handleSearch}
          value={searchString}
          className="search"
        />
        {isLoaded ? (
          <div className="Pokemon">
            {pokemons.map((pok: object|any) => (
              <div key={countPok++}>
                <img src={this.imgId(pok.url) + ".png"} alt="pokemon" />
                <p>{pok.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="Loader">
            <ClipLoader sizeUnit={"px"} size={150} color={"red"} />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state: any|object) => {
  return {
    COUNTER: state.COUNTER
  };
};
const mapDispatchToProps = (dispatch: any|object) => {
  return {
    initCounter: async () => dispatch(await actions.initCounter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
