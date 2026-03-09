import React from "react";

export const Card = () => {

    const generateRandomNumber = () => Math.floor(Math.random() * 100)
    let age = 15;
    const randomNumber = generateRandomNumber()

    const cardStyles = {width: '18rem'}

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card" 
            style={cardStyles} 
            //style={{width: '18rem'}}
            >
                <div className="card-head">
                    <h2>Titulo de tarjeta</h2>
                </div>
                <div className="card-body">
                    {/* https://picsum.photos/id/237/200/300 */}
                    <img src={`https://picsum.photos/id/${randomNumber}/400`} alt="random pic" />
                </div>
                <div className="card-footer">
                    <p>
                        {/* para insertar variables en el html, usamos llaves {} */}
                        {age}
                    </p>
                    <p>
                        {randomNumber}
                    </p>

                    {age && <span>tenemos edad</span>}

                    <p>
                        {age > 18 ? "puedes manejar" : "no puedes manejar"}
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio autem ipsam
                        optio maxime similique libero minima cumque consectetur placeat esse, facilis enim
                        voluptatibus quas? Adipisci quos ullam non possimus!
                    </p>
                </div>
            </div>
        </div>
    )
}