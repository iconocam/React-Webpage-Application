import React from "react";
import Form from "./Form";

const Home = () => {
    const homeStyle = {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6Ciiu_qaKH1JpKeYudz1xOKOKgvChEYGEg&usqp=CAU")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        textAlign: 'center'
    
        }
        const joinStyle = {
            marginLeft: '30px'
        }
        const buttonStyle= {
            color: 'blue'
            
        }
    return (
        <div style = {homeStyle}>
            
        <h1>Welcome Home Traveler </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, est? Laudantium id tempora provident rerum animi asperiores, iusto fuga aut? Consectetur veniam quae quod tenetur esse quibusdam deserunt, repellendus debitis?
        </p>

        <section className="pointers">
                <div className="pointer-first" ></div>
                <div className="pointer-second"></div>
                <div className="pointer-third" ></div>

                <div className="pointer-first"  >
                    {/* <img src="" alt="Test Header" /> */}
                    <div className="text">
                        <div className="title">Find Yourself</div>
                        <div className="subtitle">Have you forgotten who you are?</div>
                    </div>
                </div>

                <div className="pointer-second">
                    <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nZmfgniZwlq3tao3H1oH7Hil5KhdK1uv1Q&usqp=CAU" alt="Theory Icon" />
                    <div className="text">
                        <div className="title">We have come too far
                        to be stopped this is your kingdom</div>
                        <div className="subtitle">Join and revel in divinity</div>
                    </div>
                </div>

                <div className="pointer-last">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjA6BT-fRLWGsZcakLhdshJrzOO0TVzLbOVg&usqp=CAU" alt="Exercise Icon" />
                    <div className="text">
                        <div className="title">Mind of Equanimity</div>
                        <div className="subtitle"></div>
                    </div>
                </div>

                {/* <div className="shape"></div>
                <div className="shadow"></div> */}
            </section>

            <section style={joinStyle}>
    <h2>Join Our Community</h2>
    <p>Unlock exclusive content and connect with like-minded travelers.</p>
    <button style = {buttonStyle}>Connect!</button>
</section>
        </div>
    )

    }

export default Home;