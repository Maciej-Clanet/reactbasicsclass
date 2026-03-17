import "./TabCard.css"
import { useState } from "react"

export default function TabCard({tabs}){
    const [activeTab, setActiveTab] = useState(0);

    function convertTab(tab, index){
        return <TabLabel 
            title={tab.title} 
            isActive={activeTab == index}
            activate={() => setActiveTab(index)}
            
            />
    }

    return(
        <div className="tab-card">
            <div className="tab-labels">
                {
                    tabs.map(convertTab)
                }
                <div className="tab-line"/>
            </div>
            <div className="tab-content">
                {
                    tabs[activeTab].content
                }
            </div>
        </div>
    )
}

function TabLabel({title, isActive, activate}){

    let classNameText = "";
    if (isActive){
        classNameText = "tab-label active"
    } else{
        classNameText = "tab-label"
    }

    return(
        <button onClick={activate} className={classNameText}>
            {title}
        </button>
    )
}