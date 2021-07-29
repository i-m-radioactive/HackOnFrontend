import React, { useEffect } from 'react'
import { useTransition, animated } from 'react-spring';
import errorStyle from '../styles/errorhandling.module.scss'

const ErrorHandling = (props) => {

    //-----------------------------------------------------------------------------
    // set timer and clear timer on for Error notifications 
    // dependency on props.children to update timer for every error change
    //-----------------------------------------------------------------------------

    useEffect(() => {
        let timeout = setTimeout(() => {
            props.setshow(false);
        }, 10000);
        return () => {
            clearTimeout(timeout);
        }
    }, [props.children])

    //-----------------------------------------------------------------------------
    // transitions of UI Animations
    //-----------------------------------------------------------------------------

    const transitions = useTransition(props.show,
        {
            from: { opacity: 0, right: "2rem", bottom: "1rem" },
            enter: { opacity: 1, bottom: "2rem", right: "2rem" },
            leave: { opacity: 0 },
        })

    return transitions(
        (styles, item) => item && <animated.div className={errorStyle.error} style={styles}><button onClick={() => (props.setshow(false))}>❌</button>{props.children}</animated.div>
    )
}

export default ErrorHandling;