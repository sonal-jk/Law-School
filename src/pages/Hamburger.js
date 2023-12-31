

export default function Hamburger({Open}){
    return(
        <>
        <div className="hamburger">
            <span className='bar bar1'></span>
            <span className='bar bar2'></span>
            <span className='bar bar3'></span>
    </div>
    <style jsx>{`
        .hamburger{
        width:2rem;
        height:2rem;
        display:none;
        flex-flow:column;
        justify-content:space-around;
        .bar{
            width:2rem;
            height:0.25rem;
            background-color:white;
            transition:0.4s;

        }
        .bar1{
            transform:${(Open) ? 'rotate(45deg) translate(0px,15px)':'rotate(0deg)'};
        }
        .bar2{
            transform:${Open?'translateX(100%)' : 'translateX(0%)'};
            opacity:${Open ?0:1};
        }
        .bar3{
            transform:${Open? 'rotate(-45deg) translate(0px,-15px)': 'rotate(0deg)'};
        }

        }
         @media screen and (max-width:763px){
            .hamburger{
                display:flex;
            }
         }
        `}
    </style></>
    )
}