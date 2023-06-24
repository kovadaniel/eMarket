import { socials } from '../../../constants';
import Social from '../Social/Social';
import cl from './CopyRight.module.css'

function CopyRight() {
    return (
        <div className={cl.container}>
            <p className={cl.inscription}>
                <small>© 2023 Free HTML5. All Rights Reserved.</small>
                <small>Designed by 
                    <a href="http://freehtml5.co/" target="_blank" rel="noreferrer" className={cl.ref}>
                    FreeHTML5.co</a> Demo Images: 
                    <a href="http://blog.gessato.com/" target="_blank" rel="noreferrer" className={cl.ref}>Gessato</a> 
                    & 
                    <a href="http://unsplash.co/" target="_blank" rel="noreferrer" className={cl.ref}>Unsplash</a>
                    . Made by 
                    <a href="https://github.com/kovadaniel" target="_blank" rel="noreferrer" className={cl.ref}>kovadaniel</a></small>
            </p>
            <div className={cl.socials}>
                {socials.map(social => <Social key={social.name} data={social}/>)}
            </div>
        </div>
    );
}

export default CopyRight;