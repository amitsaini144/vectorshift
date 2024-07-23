import EnterpriseSolutions from "./enterprise";
import HighVolume from "./highVolume";
import RFP from "./rfp";
import Report from "./report";
import Personalized from "./personalized";
import Knowledge from "./knowledge";

export default function CardLayout() {
    return (
        <div>
            <div className="flex gap-5 overflow-auto flex-wrap justify-center">
                <div className="">
                    <EnterpriseSolutions />
                </div>
                <div className="h-80">
                    <HighVolume />
                </div>
                <div className="">
                    <RFP />
                </div>
                <div className="h-80">
                    <Report />
                </div>
                <div className="">
                    <Personalized />
                </div>
                <div className="">
                    <Knowledge />
                </div>
            </div>

        </div>

    )
}