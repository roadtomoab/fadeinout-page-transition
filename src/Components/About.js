import cool from './gifs/cool.gif'

function About () {
    return (
        <div className="page">
            <div className="wrapper">
                <img src={cool} alt="cool-gif"/>
                <h1 className="header">Using CSS Transition Group</h1>
                <p>Great moments are born from great opportunity. And that's what you have here tonight, boys. That's what you've earned here tonight. One game. If we played 'em ten times, they might win nine. But not this game. Not tonight. Tonight, we skate with them. Tonight, we stay with them. And we shut them down because we can! Tonight, WE are the greatest hockey team in the world. You were born to be hockey players. Every one of you. And you were meant to be here tonight. This is your time. Their time is done. It's over. I'm sick and tired of hearing about what a great hockey team the Soviets have. Screw 'em. This is your time. Now go out there and take it.</p>
            </div>
        </div>
    )
}

export default About;