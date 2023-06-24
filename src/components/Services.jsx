import Service from "./UI/Service/Service";
import { amountOfServicesInRow } from "../constants";
import { useContext, useState } from "react";
import { DisplayContext } from "../context";

function Services({services, ...props}) {
    const {mobileView} = useContext(DisplayContext);

    return (
        <div className="services">
            <div className="services-container">
                {services.map((service, i) =>
                        <Service 
                            key={service.title}
                            service={service}
                            //delay={mobileView ? `0ms` : `${(i % amountOfServicesInRow)*200}ms`}
                            delay={mobileView ? `0ms` : `${i * 200}ms`}/> 
                             
                            // if we currently show full (not mobile) version of our web-site, 
                            // add animation delay to every sequential element
                    )
                }
            </div>
        </div>
    );
}

export default Services;