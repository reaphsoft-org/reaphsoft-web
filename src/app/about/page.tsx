import Base from "@/app/base";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Mission Statement",
  description: "Our mission statement",
};
export default function Page() {
    return (
        <Base content={MissionStatement()} />
    );
}

function MissionStatement() {
    return (
        <div className="container">
            <div className="my-4 my-lg-5"></div>
            <div className="row">
                <div className="my-0 container my-lg-5"></div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className="text-center sono-regular">
                        <h3 className="my-5">Mission Statement</h3>
                        <h5>We want to maintain high standard and excel in all our core competencies, with emphasis on service delivery and customers satisfaction.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}