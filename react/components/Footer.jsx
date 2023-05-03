function Footer(){

    const footerYear = new Date().getFullYear()
    
        return(
            <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
                    
                    
                <p> &copy; {footerYear} [Powered by Intersystems IRIS]</p>
            </footer>
        )
    
    }
    
    export default Footer