import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import './Favorites.css'


const Favorites = ({myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);


    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }


    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }



    return(
        <div className="a">
            <div className="seleccion">
                <div className="asdes">
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            </div>
            <div className="genders" >
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            </div>
            </div>
        <div className="favoritos">
        {
            myFavorites?.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        origin={fav.origin}
                        image={fav.image}
                        onClose={fav.onClose}
                    />
                )
            })
        }
        </div>
       
 
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(
    mapStateToProps,
    null
)(Favorites);

