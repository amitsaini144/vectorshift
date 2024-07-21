import EnterpriseSolutions from "./enterprise";
import HighVolume from "./highVolume";
import RFP from "./rfp";
import Report from "./report";
import Personalized from "./personalized";
import Knowledge from "./knowledge";

export default function CardLayout() {
    return (
        <div className="grid grid-cols-1 gap-5 overflow-auto sm:grid-cols-2 xl:grid-cols-3 py-10">
            <EnterpriseSolutions  />
            <HighVolume />
            <RFP />
            <Report />
            <Personalized />
            <Knowledge />
        </div>
    )
}