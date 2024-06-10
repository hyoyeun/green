import Recipe from "./Recipe";
import { data as recipes } from './recipeData';
// {data as recipes} == recipeData 

const Menu = () =>
    <article>
        <h1>** 맛있는 조리법 **</h1>
        <div className="recipes">
            {recipes.map((recipe, i)=>
            <Recipe key = {i}{...recipe}/>
            )}
        </div>
    </article>

Menu.displayName = 'Menu'; 
// 컴포넌트에 대한 네임 명시, 디버깅시 편리함 .displayName 속성 컴포넌트 이름을 명시하여 디버깅을 용이하게 해주는 속성 
export default Menu;