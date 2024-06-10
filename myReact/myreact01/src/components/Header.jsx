// ** 1 컴포넌트 1 파일 
// => 만듦과 동시에 밖에서도 사용 가능해야함 
// => 그러므로 export default를 많이 사용한다. 
export default function Header() {
    return (
        <header>
            <h1>** Header **</h1>
            <p>안녕하세요~~</p>
            <hr/>
        </header>
    );
}