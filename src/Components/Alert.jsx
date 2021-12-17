import React, {useState, useEffect} from 'react'

export default function Alert({visible, children}){
    const [isVisible, setVisibility] = useState(null);
    useEffect(() => {
        setVisibility(visible);
    }, [visible]);
    
    if(!isVisible) return null;

    return children;
}