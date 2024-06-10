import IngredientsList from './IngredientsList';
import Instructions from './Instructions'; // 확장자 생략 가능 

// 값을 넘겨주기 위한 매개 역할 여기서 사용하는 것은 {name} 밖에 없음 
 const Recipe = ({ name, ingredients, steps }) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <IngredientsList list={ingredients} />
        <Instructions title='조리절차' steps={steps} />
    </section>


export default Recipe

// ** export default
// => '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있음
// => 컴포넌트는 대부분 이 경우에 해당하므로 import 하면서 내부에서 사용하려는 명칭으로 import 가능  
//     import IngredientsList from './IngredientsList';

//** export { pi, square, Person };
// => 복수의 변수, 함수 등이 있는 모듈의 경우 하나의 객체로 구성하여 공개 
// => import 하면서 선택적으로 사용가능  
//    import { pi, square, Person } from './m02_bar.mjs'; 
// => 이때 export한 식별자 이름을 변경하여 import 할때는 as 사용함.
//    import { pi as PI, square as mySqure, Person as P } from './m02_bar.mjs';  
// => 또 이경우 하나의 객체로 접근 도 가능함
//    import * as myLib from './m02_bar.mjs'; 
//    console.log(`** foo import 2 pi=${myLib.pi}`);