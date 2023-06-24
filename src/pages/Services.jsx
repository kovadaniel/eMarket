import Subscribe from "../components/Subscribe";
import ServicesSection from "../components/Services";
import PageHeader from "../components/PageHeader";
import singleTitleImage from "../img/img_bg_2.jpg"
import { servicesData } from "../constants";

function Servies() {
    return (
        <div id="services">
            <PageHeader
                title="Services" 
                description="Dignissimos asperiores vitae velit veniam totam" 
                image={singleTitleImage}
            />

            <ServicesSection services={servicesData}/>
            <Subscribe/>
        </div>
    );
}

export default Servies;