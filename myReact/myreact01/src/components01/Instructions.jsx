
const Instructions = ({ title, steps }) =>
    <section className="instructions">

        <h2>{title}</h2>
        {steps.map((step, i) =>
            <p key={i}>{(i+1) + '. ' + step}</p>
        )
        }
    </section>
export default Instructions

