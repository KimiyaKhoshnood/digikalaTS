import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Scroll = () => {
    const scrollTopVar = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [scrollTopVar]);
}

export default Scroll