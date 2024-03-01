import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {HiArrowNarrowRight, HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Success = () => {
    const [count, setCount] = useState(10);
    const navigate = useNavigate();
    useEffect(()=>{
        const timeoutid = setInterval(()=>{
            setCount((preCount) => {
                if (preCount === 1) {
                    clearInterval(timeoutid);
                    navigate("/");
                }
                return preCount - 1;
            });
        },1000);
        return () => clearInterval(timeoutid);
    },[navigate]);
    
    return (
        <>
        <section className='notFound'>
            <div className="container">
                <img src="/sandwich.png" alt="success" />
                <h1>Redirecting to Home in {count} seconds...</h1>
                <Link to={'/'}>Back to Home <HiOutlineArrowNarrowRight/></Link>
            </div>
        </section>
        </>
        )
}

export default Success
