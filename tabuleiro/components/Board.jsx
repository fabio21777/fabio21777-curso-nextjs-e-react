import Line from "./Line";

export default function board(){
    return(
        <div>
            <Line/>
            <Line black />
            <Line/>
            <Line black />
            <Line/>
            <Line black />
            <Line/>
            <Line black />
        </div>
    )
}