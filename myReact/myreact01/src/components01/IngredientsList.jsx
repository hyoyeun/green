import Ingredient from './Ingredient';

const IngrdientsList = ({list}) =>
    <ul className="ingredients">
        {list.map((ingredient, i)=> 
        <Ingredient key={i} {...ingredient} />
        )}
    </ul>

export default IngrdientsList