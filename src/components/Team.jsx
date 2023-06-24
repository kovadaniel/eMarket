import { team } from "../constants";
import SectionHeader from "./UI/SectionHeader/SectionHeader";
import Person from "./UI/Person/Person";


function Team(props) {

    return (
        <div {...props}>
            <div className="container">
                <SectionHeader 
                    inscription='Productive Stuff'
                    title='Meet out team'
                    body='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'
                />
                <div className="members">
                    {team.map((member, i) => <Person user={member} i={i} isAnimated={true}/> )}
                </div>
            </div>
            
        </div>
    );
}

export default Team;