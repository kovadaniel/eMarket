import History from "../components/History";
import PageHeader from "../components/PageHeader";
import Subscribe from "../components/Subscribe";
import Team from "../components/Team";
import { aboutTexts } from "../constants";
import aboutTitleImage from '../img/img_bg_2.jpg';

function About() {
    return (
        <div id="about">
            <PageHeader 
                title="About us" 
                description="Lorem ipsum dolor sit amet far from the countries"
                image={aboutTitleImage}/>
            
            <History texts={aboutTexts} id="history"/>

            <Team id='team'/>

            <Subscribe/> 
        </div>
    );
}

export default About;