import "./HomePage.scss"
import ImageUploadCard from "../../components/ImageUploadCard/ImageUploadCard";
import { VoiceInputCard } from "../../components/VoiceInputCard/VoiceInputCard";
import { Navbar } from "../../components/Navbar/Navbar";

export const HomePage=()=>{
    return(
        <>
            <Navbar />
            <div className="home-page-container">     
                <div className="home-content-container">
                    <ImageUploadCard />
                    <VoiceInputCard />
                </div>
            </div>
        </>
    )
}