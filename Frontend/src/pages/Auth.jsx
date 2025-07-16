import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import { useEffect, useRef, useState } from 'react'
import '../styles/auth.css'

const Auth = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        if (window.anime) {
            window.anime({
                targets: '.logo',
                translateY: [-200, 0],
                opacity: [0, 1],
                duration: 1600,
                easing: 'easeOutExpo',
                complete: () => {
                    window.anime({
                        targets: '.auth-logo',
                        scale: [1, 1.03, 1],
                        duration: 600,
                        loop: true,
                        delay: 3000,
                        translateX: [
                            { value: -5, duration: 60 },
                            { value: 5, duration: 60 },
                            { value: -2, duration: 40 },
                            { value: 2, duration: 40 },
                            { value: 0, duration: 60 },
                        ],
                        skewX: [
                            { value: -8, duration: 60 },
                            { value: 8, duration: 60 },
                            { value: 0, duration: 60 },
                        ],
                        easing: 'easeInOutQuad'
                    });
                }
            });
        }
    }, []);

    useEffect(() => {
        if (!vantaEffect && window.VANTA) {
            setVantaEffect(
                window.VANTA.NET({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0xffffff,
                    backgroundColor: 0x1d1d29,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <>
            <div ref={vantaRef} className="vanta-background">
            </div>
            <div className="auth-page">
                <div className="auth-container">
                    <div className="auth-intro">
                        <div className="auth-logo">
                            <h1>Welcome to<br/><span>OneZoop</span></h1>
                        </div>
                        <div className="auth-text">
                            <p>
                                Empower your career with OneZoop — the all-in-one platform that brings you personalized jobs, internships, events, competitions, and more. Say goodbye to repetitive forms, apply in one click, build stunning resumes, and unlock AI-powered features tailored to your profile.
                            </p>
                        </div>
                    </div>
                    <div className="auth-comp">
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
