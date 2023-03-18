import React from 'react';
import '../css/index.css';

const SignInTemp = ({button, title, children, smallText, reference, link}) => {
    const toggleCarousel = () => {
        const getCarouselElement = document.querySelector('.item-one');
        const getHiddenElement = document.querySelector('.item-two');
        const getParentElement = document.querySelector('.carousel-container');
        getParentElement.classList.toggle('bgChange');
        getCarouselElement.classList.toggle('hidden');
        getHiddenElement.classList.toggle('hidden');
    }
    setInterval (toggleCarousel, 5000);
    const clicked = (variable) => {
        let errDOM = `.${variable}Err`;
        document.querySelector(errDOM).classList.remove('hidden');
    }
    
    const input = (variable) => {
        if (variable === "Uname") {
            const vUname = document.querySelector("#Uname").value;
            const numberErr = document.querySelector("#numberErr");
            const symbolErr = document.querySelector("#symbolErr");
            if (vUname.match(/[0-9]/)) {
                numberErr.style.color = "#ff0000";
            } else {
                numberErr.style.color = "#00ff00";
            }
            // eslint-disable-next-line no-useless-escape
            if (vUname.match(/[@\#\$\%\^\&\*\(\)\+\=\_\~\`\\\}\{\]\[\:\;\"\'\<\>\.\,\/\?\!\-]/)) {
                symbolErr.style.color = "#ff0000";
            } else {
                symbolErr.style.color = "#00ff00";
            }
        }
        
    }
    
  return (
    <div>
        <main>
            <div className="main-content carousel-container">
                <span className="span left" onClick={toggleCarousel}><i className="fa-solid fa-arrow-left"></i></span>
                <span className="span right" onClick={toggleCarousel}><i className="fa-solid fa-arrow-right"></i></span>
                <div className="carousel item-one">
                    <h2>"The vote is the most powerful instrument ever devised by man for breaking down injustice and destroying the terrible walls which imprison men because they are different from other men."</h2>
                    <p className="author">- Lyndon B. Johnson</p>
                </div>
                <div className="carousel item-two hidden">
                    <h2>"The vote is a trust more delicate than any other, for it involves not just the interests of the voter, but the interests of others as well."</h2>
                    <p className="author">- Samuel J. Tilden</p>
                </div>
            </div>
            <div className="main-content form">
                
                <form action="" id="form">
                    <h1>{title}</h1>
                    <input type="text" id="Uname" name="username" onClick={() => clicked("Uname")} onInput={() => input("Uname")} placeholder="Your Username" required /><br /> 
                    <div className="error UnameErr hidden"> 
                            <p id="numberErr">Username cannot contain numbers!</p>
                            <p id="symbolErr">Username cannot contain symbols</p>
                    </div>
                    {children}
                    <button type="submit" name="submit">{button}</button>
                </form>
                <small>{smallText} <a href={reference}>{link}</a></small>
            </div>
        </main> 
    </div>
  )
}

export default SignInTemp;