import cool from './gifs/cool.gif'

function Home () {
    return (
        <div className="page">
            <div className="wrapper">
                <img src={cool} alt="cool-gif"/>
                <h1 className="header">Learning how to make a cool page transition</h1>
                <p>Anybody know what this place is? This is Gettysburg. This is where they fought the battle of Gettysburg. Fifty thousand men died right here on this field, fighting the same fight that we’re still fighting amongst ourselves today. This green field right here was painted red, bubbling with the blood of young boys. Smoke and hot lead pouring right through their bodies. Listen to their souls, man. I killed my brother with malice in my heart. Hatred destroyed my family. You listen and take a lesson from the dead. If we don’t come together right now, on this hallowed ground, we too will be destroyed just like they were. … I don’t care if you don’t like each other, but you will respect each other. I don’t know, maybe we’ll learn to play this game like men.</p>
            </div>
        </div>
    )
}

export default Home;